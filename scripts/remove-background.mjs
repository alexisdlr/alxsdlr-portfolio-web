import { removeBackground } from "@imgly/background-removal-node";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.resolve(__dirname, "../src/assets/me.jpg");
const outputPath = path.resolve(__dirname, "../src/assets/me.png");

const input = await readFile(inputPath);
const blob = new Blob([input], { type: "image/jpeg" });
const output = await removeBackground(blob);
const outputBuffer = Buffer.from(await output.arrayBuffer());

await writeFile(outputPath, outputBuffer);
console.log(`Saved transparent image to ${outputPath}`);
