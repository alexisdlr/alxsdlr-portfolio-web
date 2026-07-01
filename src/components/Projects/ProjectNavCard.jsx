import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { getLocalizedProject } from "../../i18n/useLocalizedProjects";
import { useTranslation } from "../../i18n/useTranslation";
import { useLanguageStore } from "../../store/useLanguageStore";
import ProjectBadge from "./ProjectBadge";

const ProjectNavCard = ({ project, direction }) => {
  const locale = useLanguageStore((state) => state.locale);
  const { t } = useTranslation();
  const localizedProject = getLocalizedProject(project, locale);
  const isPrevious = direction === "previous";
  const Icon = isPrevious ? LuArrowLeft : LuArrowRight;

  return (
    <Box
      asChild
      flex="1"
      borderRadius="2xl"
      border="1px solid"
      borderColor="whiteAlpha.100"
      bg="#08080f"
      overflow="hidden"
      position="relative"
      transition="border-color 0.2s, transform 0.2s"
      _hover={{ borderColor: "whiteAlpha.300", transform: "translateY(-2px)" }}
    >
      <RouterLink to={`/projects/${project.slug}`}>
        <Box
          aria-hidden
          position="absolute"
          inset={0}
          bg="#00C68D"
          opacity={0.15}
          maskImage="radial-gradient(ellipse 50% 80% at 0% 50%, black 0%, transparent 70%)"
          WebkitMaskImage="radial-gradient(ellipse 50% 80% at 0% 50%, black 0%, transparent 70%)"
        />

        <Flex direction="column" h="full" position="relative" zIndex={1}>
          <Box p={{ base: 4, md: 5 }} position="relative" minH={{ base: "140px", md: "180px" }}>
            <Text
              fontSize="xs"
              color="gray.500"
              letterSpacing="wider"
              textTransform="uppercase"
              mb={2}
            >
              {isPrevious
                ? t("projectDetail.previous")
                : t("projectDetail.next")}
            </Text>
            <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} color="white" mb={3}>
              {localizedProject.title}
            </Heading>
            <Box position="absolute" top={4} right={4}>
              <ProjectBadge
                statusKey={localizedProject.statusKey}
                status={localizedProject.status}
              />
            </Box>
            <Image
              src={localizedProject.src}
              alt={localizedProject.title}
              maxH={{ base: "80px", md: "100px" }}
              borderRadius="md"
              objectFit="cover"
              opacity={0.85}
            />
          </Box>

          <Flex
            align="center"
            justify={isPrevious ? "flex-start" : "flex-end"}
            px={5}
            py={4}
            borderTop="1px solid"
            borderColor="whiteAlpha.100"
          >
            <Flex
              align="center"
              justify="center"
              w="36px"
              h="36px"
              borderRadius="full"
              border="1px solid"
              borderColor="whiteAlpha.200"
              color="white"
            >
              <Icon size={18} />
            </Flex>
          </Flex>
        </Flex>
      </RouterLink>
    </Box>
  );
};

export default ProjectNavCard;
