import { defineConfig } from "tsdown";

export default defineConfig({
  // 1. Entry Point
  // The main file where your application starts.
  entry: ["./src/index.ts"],

  // 2. Output Format
  format: ["esm", "cjs"],

  // 3. Platform & Target
  // Optimizes the output specifically for Node.js, not the browser.
  platform: "node",
  target: "node20",

  // 4. Bundling Strategy
  // unbundle: false -> Combines all YOUR source files into a single output file (dist/index.js).
  // external: [/node_modules/] -> Tells tsdown: "Do not bundle library code."
  unbundle: false,
  external: [/node_modules/],

  // 5. Output Management
  // 'dist' is the standard output folder.
  // clean: true -> Wipes the dist folder before every build to prevent stale files.
  outDir: "dist",
  clean: true,

  // 6. Debugging & Types
  // sourcemap: true -> Essential for production logs. If your app crashes, the stack trace
  // will point to your original .ts file, not the bundled .js file.
  // dts: true -> Generates .d.ts files. Useful if you import this code elsewhere,
  // but also acts as a sanity check that your types are valid during build.
  sourcemap: true,
  dts: true,

  // 7. Optimization
  // treeshake: true -> Removes variables and functions that are defined but never used,
  treeshake: true,
});
