import { IProject } from "@/services/projects.types.ts";
import { api } from "@/services/api.service.ts";

const projectsWhitelist = [
  "astrodon",
  "astrodon.land",
  "docs.astrodon.land",
  "dndb",
  "dndb-web",
  "crawford",
  "DeSend",
  "dropper-deno",
  "deno-livereload",
  "deno-rollup-plugin-livereload",
  "deno-rollup-plugin-serve",
  "deno-figlet",
  "native-barcode-scanner",
  "barcode-scanner",
  "deno-gkm",
  "astrodon-vue-template",
  "astrodon-default-template",
  "graviton-polacode-plugin",
  "photoshop-channels-to-palette",
  "photoshop-images-to-channels",
  "devland-backend",
  "denyncrawford",
];

export const getProjects = async () => {

  const projectsResult = await Promise.all([
    api.get<IProject[]>("/orgs/astrodon/repos"),
    api.get<IProject[]>("/users/denyncrawford/repos"),
    api.get<IProject[]>("/orgs/DevLand-Network/repos"),
  ]);

  return projectsResult.flatMap((result) => result.data).filter((project) =>
    projectsWhitelist.includes(project.name)
  ).sort((a, b) => b.stargazers_count - a.stargazers_count);
};
