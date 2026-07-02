import { Box, Separator, Text } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { EXPERIENCE_ITEMS } from "../../constants/experience";
import { APP_HORIZONTAL_PADDING } from "../../constants/layout";
import { useTranslation } from "../../i18n/usetranslation";
import SectionTitle from "../section-title";
import ExperienceItem from "./experience-item";
import {
  experienceCardContainer,
  experienceFadeUp,
  experienceHeaderStagger,
  experienceListStagger,
  experienceReducedFade,
  experienceSeparator,
  experienceViewport,
} from "./experience-motion";

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);
const MotionSectionTitle = motion.create(SectionTitle);
const MotionSeparator = motion.create(Separator);

const ExperienceSection = ({ sectionId }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const motionInitial = shouldReduceMotion ? false : "hidden";
  const motionWhileInView = shouldReduceMotion ? false : "visible";
  const fadeVariant = shouldReduceMotion
    ? experienceReducedFade
    : experienceFadeUp;

  return (
    <Box
      id={sectionId}
      as="section"
      mb={{ base: 16, md: "36" }}
      scrollMarginTop={{ base: 24, md: 0 }}
      px={APP_HORIZONTAL_PADDING}
    >
      <MotionBox
        mb={{ base: 5, md: 8 }}
        textAlign={{ base: "center", md: "left" }}
        variants={experienceHeaderStagger}
        initial={motionInitial}
        whileInView={motionWhileInView}
        viewport={experienceViewport}
      >
        <MotionSectionTitle
          color="white"
          fontSize={{ base: "3xl", md: "5xl", "2xl": "6xl" }}
          mb={2}
          variants={fadeVariant}
        >
          {t("experience.title")}
        </MotionSectionTitle>
        <MotionText
          mt={4}
          color="gray.400"
          fontSize={{ base: "md", md: "lg" }}
          maxW="520px"
          mx={{ base: "auto", md: 0 }}
          lineHeight="1.7"
          variants={fadeVariant}
        >
          {t("experience.subtitle")}
        </MotionText>
      </MotionBox>

      <MotionSeparator
        borderColor="whiteAlpha.150"
        mb={{ base: 6, md: 8 }}
        variants={
          shouldReduceMotion ? experienceReducedFade : experienceSeparator
        }
        initial={motionInitial}
        whileInView={motionWhileInView}
        viewport={experienceViewport}
        style={{ originX: 0 }}
      />

      <MotionBox
        borderRadius={{ base: "xl", md: "2xl" }}
        border="1px solid"
        borderColor="whiteAlpha.100"
        bg="#08080f"
        p={{ base: 4, md: 8 }}
        variants={
          shouldReduceMotion ? experienceReducedFade : experienceCardContainer
        }
        initial={motionInitial}
        whileInView={motionWhileInView}
        viewport={experienceViewport}
      >
        <MotionBox variants={experienceListStagger}>
          {EXPERIENCE_ITEMS.map((item, index) => (
            <ExperienceItem
              key={item.id}
              item={item}
              isLast={index === EXPERIENCE_ITEMS.length - 1}
            />
          ))}
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

export default ExperienceSection;
