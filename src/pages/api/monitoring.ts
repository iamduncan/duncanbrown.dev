import { NextApiRequest, NextApiResponse } from "next";

  const SENTRY_HOST = "o476605.ingest.sentry.io"
  const SENTRY_PROJECT_IDS = ["4505652393934848"]

  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { body } = req;
        const piece = body.split("\n")[0];
        const header = JSON.parse(piece);
        const dsn = new URL(header["dsn"]);
        const project_id = dsn.pathname.replace("/", "");

        if (dsn.hostname !== SENTRY_HOST) {
          throw new Error(`Invalid sentry hostname: ${dsn.hostname}`);
        }

        if(!project_id || !SENTRY_PROJECT_IDS.includes(project_id)){
          throw new Error(`Invalid sentry project id: ${project_id}`);
        }

        const upstream_sentry_url = `https://${SENTRY_HOST}/api/${project_id}/envelope/`;
        fetch(upstream_sentry_url, {
          method: "POST",
          body,
        })
        .then((response) => {
          if (process.env.NODE_ENV === "development") {
            console.log("~~ Upstream response ~~", response.status, response.statusText);
          }
          if (!response.ok) {
            console.error("Upstream request failed", response.status, response.statusText);
            if (response.status !== 429) {
              throw new Error("Upstream request failed");
            }
          }
          return response;
        })
        .catch((error) => {
          console.error("Error tunneling request to sentry", error);
          if ('status' in error) {
            console.info("Upstream response", error.status, error.statusText);
          }
        });
        return res.status(200).json({ success: true });
    }
    res.status(405).json({ error: "Method not allowed" });
  }
