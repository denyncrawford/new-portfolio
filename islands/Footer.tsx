import { Signal } from "@preact/signals";

export const Footer = (
  { darkModeSignal }: { darkModeSignal: Signal<"light" | "dark"> },
) => {
  return (
    <div class="w-full px-16 py-20 flex flex-col items-center justify-center">
      <h1 class="dark:text-white text-gray-600 font-mono">
        Made with ❤️ by Miguel Rangel - ©{" "}
        <span class="text-indigo-500 font-bold">
          Crawford {new Date().getFullYear()}
        </span>
      </h1>
      <a class="mt-5 mx-auto" href="https://fresh.deno.dev">
        <img
          width="156"
          height="30"
          src={darkModeSignal.value === "dark"
            ? "https://fresh.deno.dev/fresh-badge-dark.svg"
            : "https://fresh.deno.dev/fresh-badge.svg"}
          alt="Made with Fresh"
        />
      </a>
    </div>
  );
};
