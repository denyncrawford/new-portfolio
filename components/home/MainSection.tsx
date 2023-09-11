import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { SiDeno } from "react-icons/si";
import { LinkTo } from "@/components/Link.tsx";

const linkIcon = `h-8 w-8 text-indigo-500 hover:scale-150 transition`;

export const MainSection = () => {
  return (
    <section class="px-16 md:px-40 md:h-screen w-full md:flex md:text-center items-center justify-center">
      <div class="md:flex mt-40 md:mt-0 flex-col">
        <h1 class="md:text-8xl text-5xl text-indigo-500">Miguel Rangel</h1>
        <div class="rounded border-dashed border border-[#64748b] mt-8 px-5 ml-auto mr-auto">
          <h2 class="text-md font-thin text-[#64748b]">AKA: denyncrawford</h2>
        </div>
        <p class="dark:text-gray-300 text-slate-500 max-w-prose mt-5 mb-5">
          I'm a Full-Stack/multipurpose developer from Venezuela living in
          Argentina. <br />{" "}
          I like to do open source and decentralized stuff, I'm always trying to
          learn and adopt new technologies... Right now I'm learning Rust and I
          am already a proeficient in JavaScript, TypeScript, NodeJS, Deno and
          their ecosystem.
        </p>
        <code class="dark:bg-gray-700 bg-gray-200 dark:text-white rounded px-2 ml-auto mr-auto">
          {"const { deno , node } = 🖤;"}
        </code>
        <div class="mt-10 flex md:items-center md:justify-center">
          <LinkTo to="https://deno.land/x/astrodon">
            <SiDeno size={50} class={linkIcon} />
          </LinkTo>
          <LinkTo to="https://github.com/denyncrawford">
            <FaGithub size={50} class={`${linkIcon} ml-5`} />
          </LinkTo>
          <LinkTo to="https://es.stackoverflow.com/users/44653/d%d1%94%ce%b7y%ce%b7-crawford">
            <FaStackOverflow class={`${linkIcon} ml-5`} />
          </LinkTo>
          <LinkTo to="https://www.linkedin.com/in/miguel-rangel-863373230/">
            <FaLinkedin class={`${linkIcon} ml-5`} />
          </LinkTo>
        </div>
        <div class="mt-10 flex md:items-center md:justify-center flex-col md:flex-row">
          <LinkTo
            internal={true}
            to="#support"
            class="text-md mr-auto md:mr-0 font-thin text-[#64748b] rounded border-dashed border border-[#64748b] hover:text-indigo-700 hover:border-indigo-700 py-1 px-5"
          >
            Want to support me?
          </LinkTo>
          <LinkTo
            internal={true}
            to="#projects"
            class="text-md md:mr-0 mr-auto font-thin text-white rounded bg-indigo-500 md:ml-5 mt-5 md:mt-0 py-1 px-5 hover:bg-indigo-700"
          >
            Check out my featured projects
          </LinkTo>
        </div>
      </div>
    </section>
  );
};
