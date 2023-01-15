import type { LoaderArgs } from "@remix-run/node";
import { getAllPosts } from "~/utils/blog.server";
import { formatDate, getDomainUrl } from "~/utils/misc";

export const loader = async ({ request }: LoaderArgs) => {
  const posts = await getAllPosts();

  const blogUrl = `${getDomainUrl(request)}/blog`;

  const rss = `
    <rss xmlns:blogChannel="${blogUrl}" version="2.0">
      <channel>
        <title>Kent C. Dodds Blog</title>
        <link>${blogUrl}</link>
        <description>The Kent C. Dodds Blog</description>
        <language>en-us</language>
        <generator>Kody the Koala</generator>
        <ttl>40</ttl>
        ${posts
          .map((post) =>
            `
            <item>
              <title>${cdata(post.data.title ?? "Untitled Post")}</title>
              <description>${cdata(
                post.data.excerpt ?? "This post is... indescribable"
              )}</description>
              <pubDate>${formatDate(
                post.data.date ?? new Date(),
                "yyyy-MM-ii"
              )}</pubDate>
              <link>${blogUrl}/${post.slug}</link>
              <guid>${blogUrl}/${post.slug}</guid>
            </item>
          `.trim()
          )
          .join("\n")}
      </channel>
    </rss>
  `.trim();

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(rss)),
    },
  });
};

function cdata(s: string) {
  return `<![CDATA[${s}]]>`;
}
