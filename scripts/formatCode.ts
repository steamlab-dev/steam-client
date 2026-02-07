import { execSync } from "node:child_process";

export default function formatDirectory(dirPath: string = "./src") {
  console.log(`\n  Formatting ${dirPath}...`);
  try {
    execSync("npm run fix", {
      stdio: ["ignore", "pipe", "inherit"], // suppress stdout, show stderr
    });
    console.log(`✅ Formatted all files in ${dirPath}\n`);
  } catch (_error) {
    // console.error('Formatting failed:', error);
  }
}
