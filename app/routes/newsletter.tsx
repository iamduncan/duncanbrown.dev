import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { addSubscriber } from "~/utils/convertkit.server";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");

  if (
    !name ||
    !email ||
    typeof email !== "string" ||
    typeof name !== "string"
  ) {
    return new Response("Missing name or email", { status: 400 });
  }

  const subscriber = await addSubscriber(email, name);

  console.log({ subscriber });

  return redirect("/");

  if (subscriber) {
    return json({ success: true });
  } else {
    return json({ success: false });
  }
};
