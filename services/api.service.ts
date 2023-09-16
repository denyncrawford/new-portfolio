import axios, { AxiosPromise, getAdapter } from "axios";
import { LRUCache } from 'lru-cache'
import {
  ICacheLike,
  cacheAdapterEnhancer,
  throttleAdapterEnhancer,
} from "axios-extensions";
import { IProject } from "@/services/projects.types.ts";

const GITHUB_AUTH_TOKEN = Deno.env.get("GITHUB_AUTH_TOKEN") || "";

export const cache = new LRUCache({ ttl: 24 * 60 * 60 * 1000, max: 3 });

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${GITHUB_AUTH_TOKEN}`,
    "Cache-Control": "no-cache",
  },
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(getAdapter(axios.defaults.adapter), {
      defaultCache: cache as ICacheLike<AxiosPromise<IProject>>,
    }),
  ),
});