import { Flex, Heading, Stack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ButtonPrimary } from "../Button";
import { variants } from "../../constants/variants";
import projectsData from "./projects";
import ProjectCard from "./ProjectCard";
const Project = () => {
  return (
    <Stack
      spacing={{ base: 16, md: 8 }}
      px={{ base: 4, md: 8 }}
      direction={{ base: "column", md: "row" }}
      justify={"center"}
      align={"center"}
      wrap={"wrap"}
      rowGap={8}
    >
      {projectsData.map((project, index) => (
        <ProjectCard project={project} index={index} key={project.id} />
      ))}
    </Stack>
  );
};
export default Project;
