import { Signal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/src/runtime/utils.ts";
import { HiMoon, HiSun } from "react-icons/hi";
import { JSX } from "preact/jsx-runtime";

interface DarkModeProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  prev: "light" | "dark";
  darkModeSignal: Signal<"light" | "dark" | null>
}

export const HeaderModeButton = (props: DarkModeProps) => {

  function updateMode() {
    const w = (window as unknown as { isDark: boolean });
    w.isDark = localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[w.isDark ? "add" : "remove"]("dark");
  }

  const getMode = () => {
    if (!IS_BROWSER) {
      return props.prev;
    }
    updateMode();
    if (localStorage?.theme?.includes("dark")) {
      return "dark";
    }
    return "light";
  }

  props.darkModeSignal.value = getMode();

  const toggleTheme = () => {
    props.darkModeSignal.value = props.darkModeSignal.value === "light" ? "dark" : "light";
    localStorage.theme = props.darkModeSignal.value;
    updateMode();
  };

  return (
    <div class="inline-flex ml-3 rounded-md">
      <button
        onClick={(e) => {
          props?.onClick?.(e);
          toggleTheme();
        }}
        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-indigo-500 transition duration-150 ease-in-out border border-transparent rounded-md hover:border-indigo-500 hover:text-indigo-500 focus:outline-none"
      >
        {props.darkModeSignal.value === "light"
          ? <HiMoon class="h-5" />
          : <HiSun class="h-5 text-yellow-500" />}
      </button>
    </div>
  );
};
