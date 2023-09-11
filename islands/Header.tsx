import { HeaderButton } from "@/components/HeaderButton.tsx";
import { HeaderModeButton } from "@/islands/HeaderModeButton.tsx";
import { HiMenu, HiX } from "react-icons/hi";
import { useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/src/runtime/utils.ts";

type Props = {
  active: string;
};

export const Header = (props: Props) => {
  const isOpen = useSignal(false);
  const isWide = IS_BROWSER && window.innerWidth > 450;

  const close = () => {
    isOpen.value = false;
  }

  return (
    <div class="fixed top-0 left-0 w-full">
      <div class="absolute top-10 right-10 z-20 text-3xl dark:text-white  cursor-pointer md:hidden">
        {isOpen.value
          ? <HiX onClick={() => isOpen.value = false} />
          : <HiMenu onClick={() => isOpen.value = true} />}
      </div>
      <div
        class={`
      w-full md:h-auto h-screen px-16 py-8 sm:py-12 mx-auto justify-center
      sm:px-28 flex flex-col md:flex-row lg:py-8 items-center 
      bg-white dark:bg-[#0f172a] md:justify-between z-10
      ${isWide ? "" : isOpen.value ? "" : "hidden"}
    `}
      >
        <a
          href="/"
          class="
        text-lg
        text-indigo-600
        sm:text-3xl
        font-bold
      "
        >
          Miguel Rangel
        </a>
        <div class="flex flex-col md:flex-row items-center">
          <HeaderButton onClick={close} active={props.active} href="/">About Me</HeaderButton>
          <HeaderButton onClick={close} active={props.active} href="/blog">Blog</HeaderButton>
          <HeaderModeButton onClick={close} prev="dark" />
        </div>
      </div>
    </div>
  );
};
