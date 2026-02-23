import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', "sans-serif"],
      },
    },
  },
  preflight: {
    "@import": [
      'url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap")',
    ],
  },
} as Options;
