import { Box, Flex, Link, Separator, Text } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";
import { ALL_PROJECTS_URL } from "../components/Projects/projects";
import ProjectsGrid from "../components/Projects/ProjectsGrid";
import {
  projectsFadeRight,
  projectsFadeUp,
  projectsHeaderStagger,
  projectsReducedFade,
  projectsSeparator,
  projectsViewport,
} from "../components/Projects/projectsMotion";
import SectionTitle from "../components/SectionTitle";
import { useTranslation } from "../i18n/useTranslation";
import { APP_HORIZONTAL_PADDING } from "../constants/layout";

const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);
const MotionSectionTitle = motion.create(SectionTitle);
const MotionSeparator = motion.create(Separator);
const MotionSpan = motion.span;

const Projects = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const motionInitial = shouldReduceMotion ? false : "hidden";
  const motionWhileInView = shouldReduceMotion ? false : "visible";
  const fadeVariant = shouldReduceMotion ? projectsReducedFade : projectsFadeUp;
  const linkVariant = shouldReduceMotion
    ? projectsReducedFade
    : projectsFadeRight;

  return (
    <Box
      id="projects"
      as="section"
      mb={{ base: 16, md: "36" }}
      scrollMarginTop={{ base: 24, md: 0 }}
      px={APP_HORIZONTAL_PADDING}
    >
      <MotionFlex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "center", md: "flex-end" }}
        gap={{ base: 3, md: 4 }}
        mb={{ base: 5, md: 8 }}
        textAlign={{ base: "center", md: "left" }}
        variants={projectsHeaderStagger}
        initial={motionInitial}
        whileInView={motionWhileInView}
        viewport={projectsViewport}
      >
        <Box w={{ base: "full", md: "auto" }}>
          <MotionSectionTitle
            color="white"
            fontSize={{ base: "3xl", md: "5xl", "2xl": "6xl" }}
            mb={2}
            variants={fadeVariant}
          >
            {t("projects.title")}
          </MotionSectionTitle>
          <MotionText
            color="gray.400"
            fontSize={{ base: "md", md: "lg" }}
            maxW="520px"
            mx={{ base: "auto", md: 0 }}
            lineHeight="1.7"
            variants={fadeVariant}
          >
            {t("projects.subtitle")}
          </MotionText>
        </Box>

        <MotionBox variants={linkVariant} flexShrink={0}>
          <Link
            href={ALL_PROJECTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            color="gray.400"
            fontSize={{ base: "sm", md: "md" }}
            whiteSpace="nowrap"
            display="inline-flex"
            alignItems="center"
            gap={1.5}
            _hover={{ color: "purple", textDecoration: "none" }}
            transition="color 0.2s"
            css={{
              "&:hover .view-all-arrow": {
                transform: "translate(3px, -3px)",
              },
            }}
          >
            {t("projects.viewAll")}
            <MotionSpan
              className="view-all-arrow"
              display="inline-flex"
              style={{ transition: "transform 0.2s ease" }}
            >
              <LuArrowUpRight size={16} />
            </MotionSpan>
          </Link>
        </MotionBox>
      </MotionFlex>

      <MotionSeparator
        borderColor="whiteAlpha.150"
        mb={{ base: 6, md: 10 }}
        variants={shouldReduceMotion ? projectsReducedFade : projectsSeparator}
        initial={motionInitial}
        whileInView={motionWhileInView}
        viewport={projectsViewport}
        style={{ originX: 0 }}
      />

      <ProjectsGrid />
    </Box>
  );
};

export default Projects;
