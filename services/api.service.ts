import axios, { getAdapter } from "axios";
import {
  cacheAdapterEnhancer,
  throttleAdapterEnhancer,
} from "axios-extensions";

const GITHUB_AUTH_TOKEN = Deno.env.get("GITHUB_AUTH_TOKEN") || "";

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${GITHUB_AUTH_TOKEN}`,
    "Cache-Control": "no-cache",
  },
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(getAdapter(axios.defaults.adapter)),
  ),
});
