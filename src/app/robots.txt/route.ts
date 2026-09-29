import { siteUrl } from "../site";

export const dynamic = "force-dynamic";

export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
    {
      headers: {
        "Cache-Control": "public, max-age=0, must-revalidate",
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
