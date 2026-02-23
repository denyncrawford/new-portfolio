import { defineConfig } from "fresh";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
export default defineConfig({
  plugins: [twindPlugin(twindConfig)],
});
