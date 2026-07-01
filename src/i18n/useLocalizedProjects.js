import { useLanguageStore } from "../store/useLanguageStore";
import { translations } from "../i18n/translations";
import projectsData from "../components/Projects/projects";

const STATUS_KEY_MAP = {
  Finalizado: "finished",
  Publicado: "published",
};

export const getLocalizedProject = (project, locale) => {
  if (!project) return null;

  const content = translations[locale]?.projects?.items?.[project.slug];
  const statusKey = project.statusKey ?? STATUS_KEY_MAP[project.status];
  const status = statusKey
    ? translations[locale]?.projects?.status?.[statusKey]
    : project.status;

  return {
    ...project,
    description: content?.description ?? project.description,
    introRest: content?.introRest ?? project.introRest,
    technicalDescription:
      content?.technicalDescription ?? project.technicalDescription,
    status,
  };
};

export const useLocalizedProjects = () => {
  const locale = useLanguageStore((state) => state.locale);
  return projectsData.map((project) => getLocalizedProject(project, locale));
};

export const useLocalizedProject = (slug) => {
  const locale = useLanguageStore((state) => state.locale);
  const project = projectsData.find((item) => item.slug === slug);
  return getLocalizedProject(project, locale);
};
