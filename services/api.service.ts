
import axios from "axios";

const GITHUB_AUTH_TOKEN = Deno.env.get('GITHUB_AUTH_TOKEN') || '';

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${GITHUB_AUTH_TOKEN}`,
  }
})