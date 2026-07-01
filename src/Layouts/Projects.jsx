import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ALL_PROJECTS_URL } from "../components/Projects/projects";
import ProjectsGrid from "../components/Projects/ProjectsGrid";
import SectionTitle from "../components/SectionTitle";
import { useTranslation } from "../i18n/useTranslation";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <motion.div whileInView={{ opacity: [0, 1] }} viewport={{ once: true }}>
      <Box id="projects" as="section" mb={{ base: "24", md: "36" }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "flex-end" }}
          gap={4}
          mb={{ base: 8, md: 10 }}
        >
          <Box>
            <SectionTitle
              color="white"
              fontSize={{ base: "3xl", md: "5xl", "2xl": "6xl" }}
              mb={2}
            >
              {t("projects.title")}
            </SectionTitle>
            <Text
              color="gray.400"
              fontSize={{ base: "md", md: "lg" }}
              maxW="520px"
            >
              {t("projects.subtitle")}
            </Text>
          </Box>

          <Link
            href={ALL_PROJECTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            color="gray.400"
            fontSize={{ base: "sm", md: "md" }}
            whiteSpace="nowrap"
            _hover={{ color: "purple", textDecoration: "none" }}
            transition="color 0.2s"
          >
            {t("projects.viewAll")}
          </Link>
        </Flex>

        <ProjectsGrid />
      </Box>
    </motion.div>
  );
};

export default Projects;
