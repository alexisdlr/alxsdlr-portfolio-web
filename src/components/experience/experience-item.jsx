import { Box, Flex, Heading, Separator, Text } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { LuDiamond } from "react-icons/lu";
import { useTranslation } from "../../i18n/usetranslation";
import {
  experienceContentReveal,
  experienceItem,
  experienceItemInnerStagger,
  experienceLogoReveal,
  experienceReducedFade,
} from "./experience-motion";

const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);

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
  const shouldReduceMotion = useReducedMotion();
  const base = `experience.items.${item.id}`;
  const areas = t(`${base}.areas`);
  const paragraphs = t(`${base}.paragraphs`);
  const tagline = t(`${base}.tagline`);
  const intro = t(`${base}.intro`);
  const outro = t(`${base}.outro`);

  const itemVariant = shouldReduceMotion
    ? experienceReducedFade
    : experienceItem;
  const logoVariant = shouldReduceMotion
    ? experienceReducedFade
    : experienceLogoReveal;
  const contentVariant = shouldReduceMotion
    ? experienceReducedFade
    : experienceContentReveal;

  return (
    <MotionBox variants={itemVariant}>
      <MotionFlex
        gap={{ base: 3, md: 5 }}
        align="flex-start"
        w="full"
        variants={
          shouldReduceMotion
            ? experienceReducedFade
            : experienceItemInnerStagger
        }
      >
        <MotionBox variants={logoVariant} flexShrink={0}>
          <ExperienceLogo logo={item.logo} />
        </MotionBox>

        <MotionBox flex="1" minW={0} variants={contentVariant}>
          <Heading
            as="h3"
            fontSize={{ base: "md", md: "xl" }}
            fontWeight="bold"
            color="white"
            lineHeight="1.35"
            mb={1}
            wordBreak="break-word"
          >
            {t(`${base}.role`)}
          </Heading>

          <Text
            color="gray.300"
            fontSize={{ base: "sm", md: "md" }}
            mb={0.5}
            wordBreak="break-word"
          >
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

          <Flex
            align="center"
            gap={2}
            color="gray.500"
            fontSize={{ base: "sm", md: "md" }}
            flexWrap="wrap"
          >
            <LuDiamond size={14} />
            <Text wordBreak="break-word">{t(`${base}.skills`)}</Text>
          </Flex>
        </MotionBox>
      </MotionFlex>

      {!isLast && (
        <Separator borderColor="whiteAlpha.100" my={{ base: 6, md: 10 }} />
      )}
    </MotionBox>
  );
};

export default ExperienceItem;
