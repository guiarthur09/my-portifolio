import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const serverDir = path.join(dist, "server");

const files = [
  ["index.html", "text/html; charset=utf-8"],
  ["assets/css/style.css", "text/css; charset=utf-8"],
  ["assets/js/script.js", "text/javascript; charset=utf-8"],
];

const entries = {};

for (const [file, type] of files) {
  const content = await readFile(path.join(root, file), "utf8");
  const route = `/${file.replaceAll("\\", "/")}`;
  entries[route] = { body: content, type };
}

entries["/"] = entries["/index.html"];

const worker = `const files = ${JSON.stringify(entries, null, 2)};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = decodeURIComponent(url.pathname);
    const file = files[pathname] || files[pathname.replace(/\\/$/, "")] || files["/"];

    if (!file) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(file.body, {
      headers: {
        "content-type": file.type,
        "cache-control": pathname === "/" || pathname === "/index.html"
          ? "no-cache"
          : "public, max-age=31536000, immutable"
      }
    });
  }
};
`;

await rm(dist, { recursive: true, force: true });
await mkdir(serverDir, { recursive: true });
await writeFile(path.join(serverDir, "index.js"), worker);
