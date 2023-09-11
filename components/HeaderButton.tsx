import { JSX } from "preact/jsx-runtime";

interface Props extends JSX.HTMLAttributes<HTMLAnchorElement> {
  active: string;
}
export const HeaderButton = (props: Props) => {
  return (
    <div class="inline-flex rounded-md">
      <a
        href={props.href}
        class={`
          inline-flex
          items-center
          justify-center
          px-4
          py-2
          text-base
          dark:text-white
          font-medium
          leading-6
          transition
          duration-150
          ease-in-out
          font-bold
          border border-transparent
          rounded-md
          hover:text-indigo-500!
          focus:outline-none
          ${props.active === props.href ? "text-indigo-500!" : ""}
      `}
      >
        {props.children}
      </a>
    </div>
  );
};
