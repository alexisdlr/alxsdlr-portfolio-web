import { Box, Flex, Text } from "@chakra-ui/react";
import { TECHNOLOGIES } from "../../constants/technologies";
import { useTranslation } from "../../i18n/useTranslation";
import SectionTitle from "../SectionTitle";
import TechnologyBadge from "./TechnologyBadge";

const TechnologiesSection = () => {
  const { t } = useTranslation();

  return (
    <Box as="section">
      <SectionTitle
        color="white"
        fontSize={{ base: "3xl", md: "5xl", "2xl": "6xl" }}
        mb={2}
      >
        {t("about.technologies.title")}
      </SectionTitle>
      <Text color="gray.400" fontSize={{ base: "md", md: "lg" }} mb={{ base: 6, md: 8 }}>
        {t("about.technologies.subtitle")}
      </Text>

      <Flex wrap="wrap" gap={3}>
        {TECHNOLOGIES.map((tech) => (
          <TechnologyBadge key={tech.name} {...tech} />
        ))}
      </Flex>
    </Box>
  );
};

export default TechnologiesSection;
