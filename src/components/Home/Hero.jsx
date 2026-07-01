import { Box, Flex, Image, Separator, Text } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { LuGraduationCap, LuMapPin } from "react-icons/lu";
import { APP_BG } from "../../constants/layout";
import { PROFILE } from "../../constants/profile";
import { useTranslation } from "../../i18n/useTranslation";
import { formatBoldText } from "../../utils/formatBoldText";
import SectionTitle from "../SectionTitle";
import profilePhoto from "../../assets/me2.png";
import HeroActionGrid from "./HeroActionGrid";
import {
  heroButtonItem,
  heroButtonStagger,
  heroFadeRight,
  heroFadeUp,
  heroMetaItem,
  heroSeparator,
  heroStagger,
} from "./heroMotion";

const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);
const MotionSectionTitle = motion.create(SectionTitle);

const floatedImageStyles = {
  "@media (min-width: 48em)": {
    shapeOutside: "circle(50%)",
    WebkitShapeOutside: "circle(50%)",
    shapeMargin: "1.25rem",
  },
};

const Hero = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const motionInitial = shouldReduceMotion ? false : "hidden";
  const motionAnimate = shouldReduceMotion ? false : "visible";

  return (
    <Box
      as="section"
      id="home"
      w="full"
      minH={{ base: "auto", lg: "100dvh" }}
      pt={{ base: 20, md: 0 }}
      px={{ base: 4, md: 0 }}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap={{ base: 6, md: 8 }}
        w="full"
        maxW="900px"
        mx="auto"
        minH={{ base: "auto", lg: "100dvh" }}
      >
        <Box w="full">
          <MotionSectionTitle
            as="h1"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            color="white"
            lineHeight="1.15"
            mb={{ base: 6, md: 5 }}
            textAlign={{ base: "center", md: "left" }}
            variants={heroFadeUp}
            initial={motionInitial}
            animate={motionAnimate}
          >
            {t("profile.greeting")} Alexis De León
          </MotionSectionTitle>

          <Box w="full">
            <MotionBox
              float={{ base: "none", md: "right" }}
              position="relative"
              w={{ base: "full", md: "220px", lg: "420px" }}
              maxW={{ base: "300px", md: "none" }}
              mx={{ base: "auto", md: 0 }}
              ml={{ md: 6 }}
              mb={{ base: 6, md: 3 }}
              overflow={{ base: "visible", md: "hidden" }}
              flexShrink={0}
              css={floatedImageStyles}
              variants={heroFadeRight}
              initial={motionInitial}
              animate={motionAnimate}
            >
              <Image
                src={profilePhoto}
                alt={`${PROFILE.name} - ${t("profile.role")}`}
                w="full"
                h={{ base: "auto", md: "auto" }}
                aspectRatio={{ base: undefined, md: "1" }}
                objectFit={{ base: "contain", md: "cover" }}
                objectPosition={{ base: "center bottom", md: "top center" }}
                display="block"
              />
              <Box
                aria-hidden
                position="absolute"
                insetX={0}
                bottom={0}
                h="45%"
                pointerEvents="none"
                display={{ base: "none", md: "block" }}
                css={{
                  background: `linear-gradient(to top, ${APP_BG} 0%, rgba(8, 10, 15, 0.85) 35%, transparent 100%)`,
                }}
              />
            </MotionBox>

            <MotionText
              as="div"
              fontSize={{ base: "md", md: "lg" }}
              color="gray.400"
              lineHeight="1.35"
              textAlign={{ base: "center", md: "justify" }}
              variants={heroFadeUp}
              initial={motionInitial}
              animate={motionAnimate}
            >
              {formatBoldText(t("hero.bio"))}
            </MotionText>

            <MotionFlex
              direction="column"
              mt={4}
              gap={5}
              align={{ base: "center", md: "flex-start" }}
              w={{ base: "full", md: "50%" }}
              variants={heroStagger}
              initial={motionInitial}
              animate={motionAnimate}
            >
              <MotionFlex direction="column" gap={4} w="full">
                <MotionFlex
                  align="center"
                  gap={3}
                  color="gray.400"
                  variants={heroMetaItem}
                >
                  <Box
                    bg="gray.900"
                    p={2}
                    rounded="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <LuGraduationCap size={24} />
                  </Box>
                  <Text fontSize="lg">{t("profile.education")}</Text>
                </MotionFlex>
                <MotionFlex
                  align="center"
                  gap={3}
                  color="gray.400"
                  variants={heroMetaItem}
                >
                  <Box
                    bg="gray.900"
                    p={2}
                    rounded="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <LuMapPin size={24} />
                  </Box>
                  <Text fontSize="lg">{PROFILE.location}</Text>
                </MotionFlex>
              </MotionFlex>

              <MotionBox
                w="full"
                variants={heroSeparator}
                style={{ originX: 0 }}
              >
                <Separator borderColor="gray.600" w="full" />
              </MotionBox>

              <HeroActionGrid
                w="full"
                motionVariants={heroButtonStagger}
                itemVariants={heroButtonItem}
                motionInitial={motionInitial}
                motionAnimate={motionAnimate}
              />
            </MotionFlex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
