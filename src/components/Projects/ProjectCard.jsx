import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import { useTranslation } from "../../i18n/useTranslation";
import ProjectBadge from "./ProjectBadge";

const ViewProjectButton = ({ href, onClick, label }) => (
  <Box
    as="button"
    type="button"
    onClick={onClick}
    display="inline-flex"
    alignItems="center"
    gap={1.5}
    px={3}
    py={1.5}
    borderRadius="full"
    bg="blackAlpha.600"
    border="1px solid"
    borderColor="whiteAlpha.200"
    backdropFilter="blur(8px)"
    fontSize="xs"
    fontWeight="medium"
    color="white"
    cursor="pointer"
    _hover={{ bg: "blackAlpha.700" }}
  >
    {label}
    <LuArrowUpRight size={14} />
  </Box>
);

const ProjectCard = ({ project, featured = false }) => {
  const { t } = useTranslation();

  return (
    <Box
      asChild
      h="full"
      display="block"
      borderRadius="2xl"
      transition="transform 0.25s ease"
      _hover={{ transform: "translateY(-2px)" }}
    >
      <RouterLink to={`/projects/${project.slug}`}>
        <Flex
          direction="column"
          h="full"
          minH={0}
          borderRadius="2xl"
          border="1px solid"
          borderColor="whiteAlpha.100"
          bg="#08080f"
          overflow="hidden"
          transition="border-color 0.25s ease"
          _hover={{ borderColor: "whiteAlpha.300" }}
          css={{
            "& .project-card-preview": {
              transformOrigin: "top center",
              transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: "transform",
            },
            "&:hover .project-card-preview": {
              transform: "scale(1.06)",
            },
          }}
        >
          <Box
            position="relative"
            flex="1"
            minH={{ base: "220px", md: featured ? "340px" : "200px" }}
            minW={0}
            p={{ base: 4, md: 5 }}
            pt={{ base: 12, md: 14 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
          >
            {!featured && (
              <Box
                aria-hidden
                position="absolute"
                inset={0}
                bg="#00C68D"
                opacity={0.22}
                maskImage="radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 70%)"
                WebkitMaskImage="radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 70%)"
              />
            )}

            <Flex
              position="absolute"
              top={{ base: 4, md: 5 }}
              left={{ base: 4, md: 5 }}
              right={{ base: 4, md: 5 }}
              justify="space-between"
              align="flex-start"
              zIndex={2}
            >
              <ProjectBadge
                status={project.status}
                statusColor={project.statusColor}
              />
              {project.showViewButton && (
                <ViewProjectButton
                  label={t("projects.viewProject")}
                  onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    window.open(project.url, "_blank", "noopener,noreferrer");
                  }}
                />
              )}
            </Flex>

            <Box
              className="project-card-preview"
              position="relative"
              zIndex={1}
              w="full"
              maxW={featured ? "92%" : "88%"}
              maxH={{ base: "160px", md: featured ? "280px" : "140px" }}
              minH={0}
              flexShrink={1}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="0 12px 32px rgba(0, 0, 0, 0.35)"
              border="1px solid"
              borderColor="whiteAlpha.150"
            >
              <Image
                src={project.src}
                alt={project.title}
                w="full"
                h="full"
                maxH={{ base: "160px", md: featured ? "280px" : "140px" }}
                objectFit="cover"
                objectPosition="top center"
                display="block"
              />
            </Box>
          </Box>

          <Box
            px={{ base: 5, md: 6 }}
            py={{ base: 5, md: 6 }}
            bg="linear-gradient(180deg, #EEF2F0 0%, #E2EBE7 100%)"
            color="#1A1A1A"
          >
            <Heading
              as="h3"
              fontSize={{ base: "lg", md: featured ? "2xl" : "xl" }}
              fontWeight="bold"
              mb={2}
              lineHeight="1.2"
            >
              {project.title}
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="#4A5568"
              lineHeight="1.6"
              lineClamp={featured ? 3 : 2}
            >
              {project.description}
            </Text>
          </Box>
        </Flex>
      </RouterLink>
    </Box>
  );
};

export default ProjectCard;
