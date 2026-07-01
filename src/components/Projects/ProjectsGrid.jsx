import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { useLocalizedProjects } from "../../i18n/useLocalizedProjects";
import ProjectCard from "./ProjectCard";
import {
  projectsCardFromRight,
  projectsCardItem,
  projectsFeaturedItem,
  projectsGridStagger,
  projectsReducedFade,
  projectsViewport,
} from "./projectsMotion";

const MotionGrid = motion.create(Grid);
const MotionGridItem = motion.create(GridItem);

const ProjectsGrid = () => {
  const projects = useLocalizedProjects();
  const [featured, ...rest] = projects;
  const shouldReduceMotion = useReducedMotion();
  const isLarge = useBreakpointValue({ base: false, lg: true });

  const motionInitial = shouldReduceMotion ? false : "hidden";
  const motionWhileInView = shouldReduceMotion ? false : "visible";

  const featuredVariants = shouldReduceMotion
    ? projectsReducedFade
    : isLarge
      ? projectsFeaturedItem
      : projectsCardItem;

  const secondaryVariants = shouldReduceMotion
    ? projectsReducedFade
    : isLarge
      ? projectsCardFromRight
      : projectsCardItem;

  return (
    <MotionGrid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      templateRows={{ base: "auto", lg: "1fr 1fr" }}
      gap={{ base: 6, md: 6 }}
      w="full"
      minH={{ lg: "560px" }}
      variants={projectsGridStagger}
      initial={motionInitial}
      whileInView={motionWhileInView}
      viewport={projectsViewport}
    >
      <MotionGridItem
        rowSpan={{ base: 1, lg: 2 }}
        minH={{ base: "auto", lg: "full" }}
        minW={0}
        overflow="hidden"
        variants={featuredVariants}
      >
        <ProjectCard project={featured} featured />
      </MotionGridItem>

      {rest.map((project) => (
        <MotionGridItem
          key={project.id}
          minH={{ base: "auto", lg: "0" }}
          minW={0}
          overflow="hidden"
          variants={secondaryVariants}
        >
          <ProjectCard project={project} />
        </MotionGridItem>
      ))}
    </MotionGrid>
  );
};

export default ProjectsGrid;
