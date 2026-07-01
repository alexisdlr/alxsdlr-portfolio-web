import { images, gallery } from "../../assets/images";
const projectsData = [
  {
    id: 1,
    slug: "unibetas",
    title: "Unibetas",
    description:
      "A web platform for universities to create, manage, and deliver exams, with admin tools for managing questions and results, and a student flow for taking exams and reviewing scores.",
    introRest:
      " es una plataforma web para universidades que permite crear, administrar y aplicar exámenes en línea, con herramientas para gestionar preguntas, resultados y el flujo completo del estudiante.",
    technicalDescription:
      "Construido con **Next.js**, **TypeScript** y **Tailwind CSS**, con paneles separados para administradores y estudiantes. Incluye gestión de bancos de preguntas, asignación de exámenes, temporizadores, calificación automática y visualización de resultados en tiempo real.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Chakra UI",
      "React Query",
      "React Hook Form + Zod",
      "zustand",
    ],
    src: images.unibetas,
    gallery: gallery.unibetas,
    statusKey: "completed",
    status: "Finalizado",
    url: "https://unibetas.com",
    githubUrl: "https://github.com/alexisdlr",
    featured: true,
    showViewButton: false,
  },
  {
    id: 2,
    slug: "finance",
    title: "Finance",
    description:
      "Personal finance app using Nextjs 15, Zustand, React Query (TanStack Query), ExpressJS, PostgreSql",
    introRest:
      " es una aplicación de finanzas personales para registrar ingresos y gastos, visualizar el presupuesto y mantener el control de tu dinero en un solo lugar.",
    technicalDescription:
      "Desarrollado con **Next.js 15**, **Zustand** y **TanStack Query** en el frontend, y **Express.js** con **PostgreSQL** en el backend. Incluye autenticación, categorías personalizables, gráficas de resumen y sincronización de datos en tiempo real.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Framer Motion",
      "Zustand",
      "React Query",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    src: images.finance,
    gallery: gallery.finance,
    statusKey: "published",
    status: "Publicado",
    url: "https://finance.com",
    githubUrl: "https://github.com/alexisdlr",
    featured: false,
    showViewButton: true,
  },
  {
    id: 3,
    slug: "frontpage",
    title: "Frontpage",
    description:
      "customizable content aggregator that pulls RSS and Atom feeds into one calm reading dashboard.",
    introRest:
      " es un agregador de contenido personalizable que reúne feeds RSS y Atom en un panel de lectura limpio y sin distracciones.",
    technicalDescription:
      "Implementado con **React**, **Node.js** y almacenamiento local para guardar fuentes y preferencias. Permite organizar feeds por categorías, marcar artículos como leídos y disfrutar de una experiencia de lectura enfocada.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Supabase",
      "Server Actions",
      "Virtualized List",
      "Infinite Scroll",
      "RSS",
      "Tailwind CSS",
      "Framer Motion",
    ],
    src: images.frontpage,
    gallery: gallery.frontpage,
    statusKey: "published",
    status: "Publicado",
    url: "https://frontpage.com",
    githubUrl: "https://github.com/alexisdlr",
    featured: false,
    showViewButton: false,
  },
  {
    id: 4,
    slug: "frontend-quizz-app",
    title: "Frontend Quizz App",
    description:
      "A frontend quiz app built with Next.js and TypeScript, with a focus on simplicity and ease of use. It allows users to test their knowledge on various topics related to frontend development.",
    introRest:
      "Un quiz de conocimientos frontend construida con Next.js y TypeScript, con un enfoque en la simplicidad y facilidad de uso. Permite a los usuarios probar sus conocimientos en diversos temas de desarrollo frontend.",
    technicalDescription:
      "Construido con **Next.js**, **TypeScript** y **Tailwind CSS**, con paneles separados para administradores y estudiantes. Incluye gestión de bancos de preguntas, asignación de exámenes, temporizadores, calificación automática y visualización de resultados en tiempo real.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    src: images.frontendQuizzApp,
    gallery: gallery.frontendQuizzApp,
    statusKey: "published",
    status: "Publicado",
    url: "https://frontend-quizz-app.vercel.app/",
    githubUrl: "https://github.com/alexisdlr/frontend-quizz-app",
    featured: false,
    showViewButton: false,
  },
];

export const ALL_PROJECTS_URL = "https://github.com/alexisdlr";

export const getProjectBySlug = (slug) =>
  projectsData.find((project) => project.slug === slug);

export const getProjectNeighbors = (slug) => {
  const index = projectsData.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: index > 0 ? projectsData[index - 1] : null,
    next: index < projectsData.length - 1 ? projectsData[index + 1] : null,
  };
};

export default projectsData;
