import { Box, Flex, Separator, Text } from "@chakra-ui/react";
import { useTranslation } from "../../i18n/usetranslation";

const EducationCard = ({ itemId, initials, grade, skills, isLast }) => {
  const { t } = useTranslation();
  const baseKey = `about.education.items.${itemId}`;

  const metaParts = [t(`${baseKey}.period`)];

  if (grade) {
    metaParts.push(`${t("about.education.grade")}: ${grade}`);
  }

  if (skills?.length) {
    metaParts.push(`${t("about.education.skills")}: ${skills.join(", ")}`);
  }

  return (
    <>
      <Flex align="center" gap={{ base: 4, md: 5 }} p={{ base: 5, md: 6 }}>
        <Flex
          align="center"
          justify="center"
          w={{ base: "56px", md: "64px" }}
          h={{ base: "56px", md: "64px" }}
          borderRadius="full"
          bg="purple"
          color="gray.900"
          flexShrink={0}
          fontWeight="bold"
          fontSize="sm"
        >
          {initials}
        </Flex>

        <Box minW={0}>
          <Text
            color="white"
            fontWeight="semibold"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.35"
          >
            {t(`${baseKey}.degree`)}
          </Text>
          <Text color="gray.500" fontSize="sm" mt={1.5}>
            {t(`${baseKey}.school`)}
          </Text>
          <Text color="gray.600" fontSize="sm" mt={1}>
            {metaParts.join(" | ")}
          </Text>
        </Box>
      </Flex>

      {!isLast && <Separator borderColor="whiteAlpha.100" />}
    </>
  );
};

export default EducationCard;
