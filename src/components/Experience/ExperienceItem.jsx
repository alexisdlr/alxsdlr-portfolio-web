import { Box, Flex, Heading, Separator, Text } from "@chakra-ui/react";
import { LuDiamond } from "react-icons/lu";
import { useTranslation } from "../../i18n/useTranslation";

const ExperienceLogo = ({ logo }) => (
  <Flex
    flexShrink={0}
    w={{ base: "44px", md: "52px" }}
    h={{ base: "44px", md: "52px" }}
    align="center"
    justify="center"
    borderRadius="md"
    bg={logo.bg}
    color={logo.color}
    fontWeight="bold"
    fontSize={{ base: "lg", md: "xl" }}
    aria-hidden
  >
    {logo.label}
  </Flex>
);

const ExperienceItem = ({ item, isLast }) => {
  const { t } = useTranslation();
  const base = `experience.items.${item.id}`;
  const areas = t(`${base}.areas`);
  const paragraphs = t(`${base}.paragraphs`);
  const tagline = t(`${base}.tagline`);
  const intro = t(`${base}.intro`);
  const outro = t(`${base}.outro`);

  return (
    <>
      <Flex gap={{ base: 4, md: 5 }} align="flex-start" w="full">
        <ExperienceLogo logo={item.logo} />

        <Box flex="1" minW={0}>
          <Heading
            as="h3"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            color="white"
            lineHeight="1.3"
            mb={1}
          >
            {t(`${base}.role`)}
          </Heading>

          <Text color="gray.300" fontSize={{ base: "sm", md: "md" }} mb={0.5}>
            {t(`${base}.company`)} · {t(`${base}.employmentType`)}
          </Text>

          <Text color="gray.500" fontSize={{ base: "sm", md: "md" }} mb={0.5}>
            {t(`${base}.period`)}
          </Text>

          <Text color="gray.500" fontSize={{ base: "sm", md: "md" }} mb={4}>
            {t(`${base}.location`)}
          </Text>

          {typeof tagline === "string" && tagline.length > 0 && (
            <Text
              color="gray.300"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="medium"
              mb={3}
            >
              {tagline}
            </Text>
          )}

          {typeof intro === "string" && intro.length > 0 && (
            <Text
              color="gray.400"
              fontSize={{ base: "sm", md: "md" }}
              lineHeight="1.75"
              mb={4}
            >
              {intro}
            </Text>
          )}

          {Array.isArray(areas) && areas.length > 0 && (
            <Box mb={4}>
              <Text
                color="white"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="semibold"
                mb={2}
              >
                {t("experience.areasTitle")}
              </Text>
              <Flex direction="column" gap={2}>
                {areas.map((area) => (
                  <Flex key={area.label} gap={2} align="flex-start">
                    <Box
                      mt="5px"
                      w="14px"
                      h="14px"
                      flexShrink={0}
                      borderRadius="sm"
                      bg="purple"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="10px"
                      color="#111"
                      fontWeight="bold"
                    >
                      ✓
                    </Box>
                    <Text
                      color="gray.400"
                      fontSize={{ base: "sm", md: "md" }}
                      lineHeight="1.6"
                    >
                      <Text as="span" fontWeight="semibold" color="gray.200">
                        {area.label}:
                      </Text>{" "}
                      {area.value}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Box>
          )}

          {Array.isArray(paragraphs) &&
            paragraphs.map((paragraph) => (
              <Text
                key={paragraph.slice(0, 40)}
                color="gray.400"
                fontSize={{ base: "sm", md: "md" }}
                lineHeight="1.75"
                mb={4}
              >
                {paragraph}
              </Text>
            ))}

          {typeof outro === "string" && outro.length > 0 && (
            <Text
              color="gray.400"
              fontSize={{ base: "sm", md: "md" }}
              lineHeight="1.75"
              mb={4}
            >
              {outro}
            </Text>
          )}

          <Flex align="center" gap={2} color="gray.500" fontSize={{ base: "sm", md: "md" }}>
            <LuDiamond size={14} />
            <Text>{t(`${base}.skills`)}</Text>
          </Flex>
        </Box>
      </Flex>

      {!isLast && <Separator borderColor="whiteAlpha.100" my={{ base: 8, md: 10 }} />}
    </>
  );
};

export default ExperienceItem;
