import { Grid, GridItem } from "@chakra-ui/react";
import { useLocalizedProjects } from "../../i18n/useLocalizedProjects";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  const projects = useLocalizedProjects();
  const [featured, ...rest] = projects;

  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      templateRows={{ base: "auto", lg: "1fr 1fr" }}
      gap={{ base: 5, md: 6 }}
      w="full"
      minH={{ lg: "560px" }}
    >
      <GridItem
        rowSpan={{ base: 1, lg: 2 }}
        minH={{ base: "auto", lg: "full" }}
        minW={0}
        overflow="hidden"
      >
        <ProjectCard project={featured} featured />
      </GridItem>

      {rest.map((project) => (
        <GridItem key={project.id} minH={{ base: "auto", lg: "0" }} minW={0} overflow="hidden">
          <ProjectCard project={project} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProjectsGrid;
