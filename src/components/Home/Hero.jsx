import { Box, Flex, Image, Separator, Text } from "@chakra-ui/react";
import { LuGraduationCap, LuMapPin } from "react-icons/lu";
import { APP_BG } from "../../constants/layout";
import { useTranslation } from "../../i18n/useTranslation";
import { formatBoldText } from "../../utils/formatBoldText";
import SectionTitle from "../SectionTitle";
import profilePhoto from "../../assets/me2.png";
import HeroActionGrid from "./HeroActionGrid";
import { PROFILE } from "../../constants/profile";
const floatedImageStyles = {
  "@media (min-width: 48em)": {
    shapeOutside: "circle(50%)",
    WebkitShapeOutside: "circle(50%)",
    shapeMargin: "1.25rem",
  },
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Flex
      id="home"
      as="section"
      direction="column"
      align="center"
      justify="center"
      w="full"
      minH={{ base: "auto", lg: "100dvh" }}
    >
      <Flex
        direction="column"
        align="center"
        gap={{ base: 6, md: 8 }}
        w="full"
        maxW="900px"
      >
        <Box w="full">
          <SectionTitle
            as="h1"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            color="white"
            lineHeight="1.15"
            mb={{ base: 6, md: 5 }}
            textAlign={{ base: "center", md: "left" }}
          >
            {t("profile.greeting")} Alexis De León
          </SectionTitle>

          <Box w="full">
            <Box
              float={{ base: "none", md: "right" }}
              position="relative"
              w={{ base: "200px", md: "220px", lg: "420px" }}
              mx={{ base: "auto", md: 0 }}
              ml={{ md: 6 }}
              mb={{ base: 6, md: 3 }}
              overflow="hidden"
              flexShrink={0}
              css={floatedImageStyles}
            >
              <Image
                src={profilePhoto}
                alt={`${PROFILE.name} - ${t("profile.role")}`}
                w="full"
                aspectRatio="1"
                objectFit="cover"
                objectPosition="top center"
                display="block"
              />
              <Box
                aria-hidden
                position="absolute"
                insetX={0}
                bottom={0}
                h="45%"
                pointerEvents="none"
                css={{
                  background: `linear-gradient(to top, ${APP_BG} 0%, rgba(8, 10, 15, 0.85) 35%, transparent 100%)`,
                }}
              />
            </Box>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.400"
              lineHeight="1.35"
              textAlign={{ base: "center", md: "justify" }}
            >
              {formatBoldText(t("hero.bio"))}
            </Text>

            <Flex
              direction="column"
              mt={4}
              gap={5}
              align={{ base: "center", md: "flex-start" }}
              w={{ base: "full", md: "50%" }}
            >
              <Flex direction="column" gap={4} w="full">
                <Flex align="center" gap={3} color="gray.400">
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
                </Flex>
                <Flex align="center" gap={3} color="gray.400">
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
                </Flex>
              </Flex>

              <Separator borderColor="gray.600" w="full" />

              <HeroActionGrid w="full" />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
