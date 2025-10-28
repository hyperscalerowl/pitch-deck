import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";

const iconPath = join(process.cwd(), "src", "app", "icon.svg");
const iconSvg = readFile(iconPath, "utf-8");

export async function GET() {
  const body = await iconSvg;

  return new Response(body, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
