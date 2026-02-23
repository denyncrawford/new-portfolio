import { Header } from "@/islands/Header.tsx";
import { Footer } from "@/islands/Footer.tsx";
import { asset } from "fresh/runtime";
import { useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/src/runtime/utils.ts";
import { AppProps } from "fresh/compat";

export default function App({ Component, url }: AppProps) {
  const code = `function global_dark(change) {
    if (change === 'auto') delete localStorage.theme; else if (change === 'on') localStorage.theme = 'dark'; else if (change === 'off') localStorage.theme = 'light';
    window.isDark = localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[window.isDark ? 'add' : 'remove']("dark");
  }
  global_dark();`;

  const darkModeSignal = useSignal<"light" | "dark">("light");

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Miguel Rangel - crawford.ml</title>

        <meta
          name="description"
          content="Full-Stack developer from Venezuela, now in Argentina. Open source enthusiast, tech learner, proficient in JavaScript, TypeScript, Node.js, Deno, and exploring Rust."
        />

        <meta
          property="og:title"
          content="Miguel Rangel - crawford.ml"
        />
        <meta
          property="og:description"
          content="Full-Stack developer from Venezuela, now in Argentina. Open source enthusiast, tech learner, proficient in JavaScript, TypeScript, Node.js, Deno, and exploring Rust."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={asset("/miguel-rangel-site2x.jpg")}
        />
        <meta property="og:url" content="https://crawford.ml" />
        <meta property="og:site_name" content="Miguel Rangel - crawford.ml" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DenynBvB" />
        <meta
          name="twitter:title"
          content="Miguel Rangel - crawford.ml"
        />
        <meta
          name="twitter:description"
          content="Full-Stack developer from Venezuela, now in Argentina. Open source enthusiast, tech learner, proficient in JavaScript, TypeScript, Node.js, Deno, and exploring Rust."
        />
        <meta
          name="twitter:image"
          content={asset("/miguel-rangel-site2x.jpg")}
        />
        <link rel="stylesheet" href={asset("/global.css")} />
        <script
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        />
      </head>

      <body class="dark:bg-[#0f172a]">
        <Header active={url.pathname} darkModeSignal={darkModeSignal} />
        <Component />
        <Footer darkModeSignal={darkModeSignal} />
      </body>
    </html>
  );
}
