import { Box, Flex } from "@chakra-ui/react";

const STATUS_STYLES = {
  published: {
    bg: "rgba(52, 211, 153, 0.1)",
    borderColor: "rgba(52, 211, 153, 0.2)",
    color: "#d1fae5",
    dotColor: "#6ee7b7",
  },
  completed: {
    bg: "rgba(56, 189, 248, 0.1)",
    borderColor: "rgba(56, 189, 248, 0.2)",
    color: "#e0f2fe",
    dotColor: "#7dd3fc",
  },
  inDevelopment: {
    bg: "rgba(251, 191, 36, 0.1)",
    borderColor: "rgba(251, 191, 36, 0.2)",
    color: "#fef3c7",
    dotColor: "#fcd34d",
  },
};

const STATUS_KEY_ALIAS = {
  finished: "completed",
  published: "published",
  inDevelopment: "inDevelopment",
};

const resolveStatusStyle = (statusKey) => {
  const resolvedKey = STATUS_KEY_ALIAS[statusKey] ?? statusKey;
  return STATUS_STYLES[resolvedKey] ?? STATUS_STYLES.published;
};

const ProjectBadge = ({ statusKey, status }) => {
  const styles = resolveStatusStyle(statusKey);

  return (
    <Flex
      align="center"
      gap={2}
      px={3}
      py={1.5}
      borderRadius="full"
      bg={styles.bg}
      border="1px solid"
      borderColor={styles.borderColor}
      fontSize={{ base: "2xs", md: "xs" }}
      fontWeight="medium"
      color={styles.color}
      whiteSpace={{ base: "normal", md: "nowrap" }}
      maxW={{ base: "calc(100% - 0.5rem)", md: "none" }}
      backdropFilter="blur(8px)"
    >
      <Box w="6px" h="6px" borderRadius="full" bg={styles.dotColor} />
      {status}
    </Flex>
  );
};

export default ProjectBadge;
