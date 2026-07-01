import { Box, Text } from "@chakra-ui/react";
import { EXPERIENCE_ITEMS } from "../../constants/experience";
import { useTranslation } from "../../i18n/useTranslation";
import SectionTitle from "../SectionTitle";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection = ({ sectionId }) => {
  const { t } = useTranslation();

  return (
    <Box id={sectionId} as="section" mb={{ base: "24", md: "36" }}>
      <Box mb={{ base: 8, md: 10 }}>
        <SectionTitle
          color="white"
          fontSize={{ base: "3xl", md: "5xl", "2xl": "6xl" }}
          mb={2}
        >
          {t("experience.title")}
        </SectionTitle>
        <Text
          mt={4}
          color="gray.400"
          fontSize={{ base: "md", md: "lg" }}
          maxW="520px"
        >
          {t("experience.subtitle")}
        </Text>
      </Box>

      <Box
        borderRadius="2xl"
        border="1px solid"
        borderColor="whiteAlpha.100"
        bg="#08080f"
        p={{ base: 5, md: 8 }}
      >
        {EXPERIENCE_ITEMS.map((item, index) => (
          <ExperienceItem
            key={item.id}
            item={item}
            isLast={index === EXPERIENCE_ITEMS.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ExperienceSection;
