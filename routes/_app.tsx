import { AppProps } from "$fresh/server.ts";
import { Header } from "@/islands/Header.tsx";
import { Footer } from "@/islands/Footer.tsx";
import { asset } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/src/runtime/utils.ts";

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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>crawford.ml</title>
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
