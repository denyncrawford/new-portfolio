import { IProject } from "@/services/projects.types.ts";
import { FaGithub, FaGlobeAmericas, FaStar } from "react-icons/fa";
import { VscIssues } from "react-icons/vsc";
import { CgGitFork } from "react-icons/cg";
import { langs } from "@/services/lang-colors.service.ts";

export const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div class="rounded-xl cursor-pointer flex flex-col group hover:scale-110 dark:border-[#94a3b8] dark:hover:border-indigo-500 hover:border-indigo-500 transition p-8 border border-dashed">
      <a
        target="_blank"
        href={project.html_url}
        class="group-hover:text-indigo-500 text-gray-600 dark:text-white font-bold"
      >
        {project.full_name || project.name}
      </a>
      <p class="mt-2 dark:text-[#94a3b8]">{project.description}</p>
      <div class="flex flex-col md:flex-row justify-between mt-auto pt-4">
        <div class="flex">
          <a
            href={project.html_url}
            target="_blank"
            class="text-indigo-500 hover:text-indigo-600"
          >
            <FaGithub class="h-5" />
          </a>
          {project.homepage && (
            <a
              v-show={project.homepage}
              href={project.homepage}
              target="_blank"
              class="text-indigo-500 hover:text-indigo-600 ml-2"
            >
              <FaGlobeAmericas class="h-5" />
            </a>
          )}
        </div>
        <div class="flex mt-2 md:mt-0">
          <a
            href={`${project.html_url}/stargazers`}
            target="_blank"
            class="text-indigo-500 flex hover:text-indigo-600"
          >
            <FaStar name="fa-star" class="h-5" />
            <span class="ml-1">{project.stargazers_count}</span>
          </a>
          <a
            href={`${project.html_url}/issues`}
            target="_blank"
            class="ml-4 flex text-indigo-500 hover:text-indigo-600"
          >
            <VscIssues class="h-5" />
            <span class="ml-1">{project.open_issues_count}</span>
          </a>
          <a
            href={`${project.html_url}/network`}
            target="_blank"
            class="ml-4 flex text-indigo-500 hover:text-indigo-600"
          >
            <CgGitFork class="h-5" />
            <span class="ml-1">{project.forks_count}</span>
          </a>
        </div>
      </div>
      <div class="flex mt-4">
        <span
          style={{ color: langs[project.language].color }}
          class="text-gray-300 dark:text-white text-xs font-bold"
        >
          {project.language}
        </span>
      </div>
    </div>
  );
};
