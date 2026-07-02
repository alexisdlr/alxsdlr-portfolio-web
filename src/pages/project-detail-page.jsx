import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { LuArrowLeft, LuArrowUpRight, LuGithub } from "react-icons/lu";
import ProjectBadge from "../components/projects/project-badge";
import ProjectImageSlider from "../components/projects/project-image-slider";
import ProjectNavCard from "../components/projects/project-navcard";
import { getProjectNeighbors } from "../components/projects/projects";
import { useLocalizedProject } from "../i18n/uselocalizedprojects";
import { useTranslation } from "../i18n/usetranslation";
import { formatBoldText } from "../utils/formatboldtext";

const scrollToProjects = () => {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
};

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const project = useLocalizedProject(slug);
  const { previous, next } = getProjectNeighbors(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const handleBack = () => {
    navigate("/");
    requestAnimationFrame(() => {
      setTimeout(scrollToProjects, 100);
    });
  };

  return (
    <Box minH="100vh" color="gray.200" py={{ base: 8, md: 12 }}>
      <Flex align="center" justify="space-between" gap={4} mb={8}>
        <Flex align="center" gap={4} minW={0}>
          <IconButton
            aria-label={t("projectDetail.backToProjects")}
            onClick={handleBack}
            variant="outline"
            borderColor="whiteAlpha.200"
            borderRadius="full"
            color="white"
            bg="transparent"
            flexShrink={0}
            _hover={{ bg: "whiteAlpha.100" }}
          >
            <LuArrowLeft />
          </IconButton>

          <Flex align="center" gap={3} minW={0} flexWrap="wrap">
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl" }}
              color="white"
              lineHeight="1.1"
            >
              {project.title}
            </Heading>
            <ProjectBadge
              statusKey={project.statusKey}
              status={project.status}
            />
          </Flex>
        </Flex>

        <Flex gap={2} flexShrink={0}>
          <IconButton
            asChild
            aria-label={t("projectDetail.viewLive")}
            variant="outline"
            borderColor="whiteAlpha.200"
            borderRadius="full"
            color="white"
            bg="transparent"
            _hover={{ bg: "whiteAlpha.100" }}
          >
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <LuArrowUpRight />
            </Link>
          </IconButton>
          <IconButton
            asChild
            aria-label={t("projectDetail.viewGithub")}
            variant="outline"
            borderColor="whiteAlpha.200"
            borderRadius="full"
            color="white"
            bg="transparent"
            _hover={{ bg: "whiteAlpha.100" }}
          >
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuGithub />
            </Link>
          </IconButton>
        </Flex>
      </Flex>

      <Text
        fontSize={{ base: "md", md: "lg" }}
        color="gray.300"
        lineHeight="1.8"
        mb={8}
      >
        <Text as="span" fontWeight="bold" color="white">
          {project.title}
        </Text>
        {project.introRest}
      </Text>

      <ProjectImageSlider images={project.gallery} title={project.title} />

      <Text
        fontSize={{ base: "md", md: "lg" }}
        color="gray.400"
        lineHeight="1.9"
        mt={8}
        mb={6}
      >
        {formatBoldText(project.technicalDescription)}
      </Text>

      <Wrap gap={2} mb={{ base: 12, md: 16 }}>
        {project.technologies.map((tech) => (
          <Box
            key={tech}
            px={3}
            py={1.5}
            borderRadius="md"
            bg="whiteAlpha.100"
            border="1px solid"
            borderColor="whiteAlpha.100"
            fontSize="sm"
            color="gray.300"
          >
            {tech}
          </Box>
        ))}
      </Wrap>

      <Box
        borderTop="1px solid"
        borderColor="whiteAlpha.100"
        pt={{ base: 10, md: 12 }}
      >
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          color="white"
          mb={2}
        >
          {t("projectDetail.keepExploring")}
        </Heading>
        <Text color="gray.500" fontSize="sm" mb={8}>
          {t("projectDetail.keepExploringSubtitle")}
        </Text>

        <Flex direction={{ base: "column", md: "row" }} gap={5}>
          {previous ? (
            <ProjectNavCard project={previous} direction="previous" />
          ) : (
            <Box flex="1" display={{ base: "none", md: "block" }} />
          )}
          {next && <ProjectNavCard project={next} direction="next" />}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectDetailPage;
