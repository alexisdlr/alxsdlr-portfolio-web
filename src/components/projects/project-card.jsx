import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import { useTranslation } from "../../i18n/usetranslation";
import ProjectBadge from "./project-badge";
import {
  projectsFeaturedFooter,
  projectsFeaturedLayerStagger,
  projectsFeaturedPreview,
  projectsViewport,
} from "./projects-motion";

const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);

const ViewProjectButton = ({ onClick, label }) => (
  <Box
    as="button"
    type="button"
    onClick={onClick}
    display="inline-flex"
    alignItems="center"
    gap={1.5}
    px={{ base: 2.5, md: 3 }}
    py={1.5}
    borderRadius="full"
    bg="blackAlpha.600"
    border="1px solid"
    borderColor="whiteAlpha.200"
    backdropFilter="blur(8px)"
    fontSize="2xs"
    fontWeight="medium"
    color="white"
    cursor="pointer"
    flexShrink={0}
    _hover={{ bg: "blackAlpha.700" }}
  >
    {label}
    <LuArrowUpRight size={14} />
  </Box>
);

const PreviewArea = ({ project, featured, t }) => (
  <Box
    position="relative"
    flex="1"
    minH={{
      base: featured ? "260px" : "190px",
      md: featured ? "340px" : "200px",
    }}
    minW={0}
    p={{ base: 3, md: 5 }}
    pt={{ base: 11, md: 14 }}
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
      top={{ base: 3, md: 5 }}
      left={{ base: 3, md: 5 }}
      right={{ base: 3, md: 5 }}
      justify="space-between"
      align="flex-start"
      flexWrap="wrap"
      gap={2}
      zIndex={2}
    >
      <ProjectBadge statusKey={project.statusKey} status={project.status} />
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
      position="absolute"
      inset={0}
      zIndex={10}
      bg="black/0"
      transition="background-color 0.3s ease"
      _hover={{ bg: "black/10" }}
    />

    <Box
      className="project-card-preview"
      position="relative"
      zIndex={1}
      w="full"
      maxW={featured ? { base: "96%", md: "92%" } : { base: "94%", md: "88%" }}
      maxH={{
        base: featured ? "200px" : "130px",
        md: featured ? "280px" : "140px",
      }}
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
        maxH={{
          base: featured ? "200px" : "130px",
          md: featured ? "280px" : "140px",
        }}
        objectFit="cover"
        objectPosition="top center"
        display="block"
      />
    </Box>
  </Box>
);

const CardFooter = ({ project, featured }) => (
  <Box
    px={{ base: 4, md: 6 }}
    py={{ base: 4, md: 6 }}
    bg="linear-gradient(180deg, #EEF2F0 0%, #E2EBE7 100%)"
    color="#1A1A1A"
  >
    <Heading
      as="h3"
      fontSize={{ base: "md", md: featured ? "2xl" : "xl" }}
      fontWeight="bold"
      mb={2}
      lineHeight="1.25"
      wordBreak="break-word"
    >
      {project.title}
    </Heading>
    <Text
      fontSize={{ base: "sm", md: "md" }}
      color="#4A5568"
      lineHeight="1.6"
      lineClamp={{ base: featured ? 2 : 2, md: featured ? 3 : 2 }}
    >
      {project.description}
    </Text>
  </Box>
);

const cardHoverTransition = { type: "spring", stiffness: 420, damping: 28 };

const ProjectCard = ({ project, featured = false }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const cardContent = featured ? (
    <MotionFlex
      direction="column"
      h="full"
      minH={0}
      variants={projectsFeaturedLayerStagger}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? false : "visible"}
      viewport={projectsViewport}
    >
      <MotionBox
        variants={projectsFeaturedPreview}
        flex="1"
        minH={0}
        display="flex"
      >
        <PreviewArea project={project} featured={featured} t={t} />
      </MotionBox>
      <MotionBox variants={projectsFeaturedFooter}>
        <CardFooter project={project} featured={featured} />
      </MotionBox>
    </MotionFlex>
  ) : (
    <Flex direction="column" h="full" minH={0}>
      <PreviewArea project={project} featured={featured} t={t} />
      <CardFooter project={project} featured={featured} />
    </Flex>
  );

  return (
    <MotionBox
      asChild
      h="full"
      display="block"
      borderRadius={{ base: "xl", md: "2xl" }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={cardHoverTransition}
    >
      <RouterLink to={`/projects/${project.slug}`}>
        <Flex
          direction="column"
          h="full"
          minH={0}
          borderRadius={{ base: "xl", md: "2xl" }}
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
            "@media (hover: hover)": {
              "&:hover .project-card-preview": {
                transform: "scale(1.06)",
              },
            },
          }}
        >
          {cardContent}
        </Flex>
      </RouterLink>
    </MotionBox>
  );
};

export default ProjectCard;
