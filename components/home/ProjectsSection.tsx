import { IProject } from "@/services/projects.types.ts";
import { ProjectCard } from "@/components/home/ProjectCard.tsx";

export const ProjectsSection = ({ projects }: { projects: IProject[] }) => {
  return (
    <section id="projects" class="md:px-60 px-16 min-h-full w-full flex pb-20">
      <div class="flex flex-col">
        <h1 class="md:text-8xl mt-40 text-5xl text-indigo-500">
          Featured Projects
        </h1>
        <p class="mt-10 text-gray-400">
          All projects in this section are open source and available on GitHub,
          some of them also have a website, check them out. <br />
          If you like them please consider giving them a star.
        </p>
        <div class="grid mt-10 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
