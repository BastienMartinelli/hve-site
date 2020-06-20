import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

export function getAllSlugs(path) {
  const files = fs.readdirSync(path);
  return files.map((f) => f.replace(".md", ""));
}

export function getMD(mdPath = "", slug = "") {
  const md = fs.readFileSync(path.join(mdPath, slug + ".md")).toString();
  const { content: mdContent, data } = matter(md);
  const content = marked.parse(mdContent);

  return {
    content,
    data,
  };
}

export function getAllMD(path) {
  const files = fs.readdirSync(path);
}
