import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devtoolsJson from 'vite-plugin-devtools-json';

// export default defineConfig({
//   plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), devtoolsJson()],
//   server: {
//     // Diagnostic step: Disable HMR to check if it's the cause of "Upgrade required" error.
//     // If the error vanishes, HMR was the issue.
//     hmr: false,
//   },
// });


export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), devtoolsJson()],
  server: { port: 5174 }, // run frontend on port 5174



});