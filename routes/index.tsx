// import { useSignal } from "@preact/signals";
// import Counter from "../islands/Counter.tsx";
import { MainSection } from "@/components/home/MainSection.tsx";
import { getProjects } from "@/services/projects.service.ts";
import { IProject } from "@/services/projects.types.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { ProjectsSection } from "@/components/home/ProjectsSection.tsx";
import { SupportSection } from "@/components/home/SupportSection.tsx";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers<IProject[]> = {
  async GET(_req, ctx) {
    const projects = await getProjects();
    return ctx.render(projects);
  },
};

export default function HomePage(props: PageProps<IProject[]>) {
  return (
    <>
      <Head>
        <title>Miguel Rangel - Home</title>
      </Head>
      <div class="min-h-screen">
        <MainSection />
        <ProjectsSection projects={props.data} />
        <SupportSection />
      </div>
    </>
  );
}
