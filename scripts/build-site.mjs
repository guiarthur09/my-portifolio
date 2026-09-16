import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const serverDir = path.join(dist, "server");

const textFiles = [
  ["index.html", "text/html; charset=utf-8"],
  ["assets/css/style.css", "text/css; charset=utf-8"],
  ["assets/js/script.js", "text/javascript; charset=utf-8"],
  ["assets/svg/css3-02-svgrepo-com.svg", "image/svg+xml; charset=utf-8"],
  ["assets/svg/fastapi-svgrepo-com.svg", "image/svg+xml; charset=utf-8"],
  ["assets/svg/flask-svgrepo-com.svg", "image/svg+xml; charset=utf-8"],
  ["assets/svg/html-124-svgrepo-com.svg", "image/svg+xml; charset=utf-8"],
  ["assets/svg/linux-svgrepo-com.svg", "image/svg+xml; charset=utf-8"],
  ["assets/svg/mysql-svgrepo-com.svg", "image/svg+xml; charset=utf-8"],
  ["assets/svg/pandas-svgrepo-com.svg", "image/svg+xml; charset=utf-8"],
  ["assets/svg/php02-svgrepo-com.svg", "image/svg+xml; charset=utf-8"],
  ["assets/svg/python-svgrepo-com.svg", "image/svg+xml; charset=utf-8"],
  ["assets/svg/sqlite-svgrepo-com.svg", "image/svg+xml; charset=utf-8"],
  ["assets/svg/windows-174-svgrepo-com.svg", "image/svg+xml; charset=utf-8"],
];

const binaryFiles = [
  ["assets/favicon/Favicon_G_Desenvolvedor-removebg-preview.png", "image/png"],
  ["assets/img/brasilia.png", "image/png"],
  ["assets/img/espanha.png", "image/png"],
  ["assets/img/estados-unidos.png", "image/png"],
  ["assets/img/JusTraduz_Logo_Melhorado.webp", "image/webp"],
];

const entries = {};

for (const [file, type] of textFiles) {
  const content = await readFile(path.join(root, file), "utf8");
  const route = `/${file.replaceAll("\\", "/")}`;
  entries[route] = { body: content, type, encoding: "text" };
}

for (const [file, type] of binaryFiles) {
  const content = await readFile(path.join(root, file));
  const route = `/${file.replaceAll("\\", "/")}`;
  entries[route] = { body: content.toString("base64"), type, encoding: "base64" };
}

entries["/"] = entries["/index.html"];

const worker = `const files = ${JSON.stringify(entries, null, 2)};

const fromBase64 = (value) => {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = decodeURIComponent(url.pathname);
    const file = files[pathname] || files[pathname.replace(/\\/$/, "")] || files["/"];

    if (!file) {
      return new Response("Not found", { status: 404 });
    }

    const body = file.encoding === "base64" ? fromBase64(file.body) : file.body;

    return new Response(body, {
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
