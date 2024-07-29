import fs from "fs/promises";
import path from "path";

export async function getData<T>(fileName: string): Promise<T> {
  const filePath = path.join(process.cwd(), "public", fileName);
  const jsonString = await fs.readFile(filePath, "utf-8");
  const data: T = JSON.parse(jsonString);
  return data;
}
