import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LuCalendar, LuTarget } from "react-icons/lu";
import { ABOUT_STATS } from "../constants/about";
import { useTranslation } from "../i18n/usetranslation";
import { formatBoldText } from "../utils/formatboldtext";
import SectionTitle from "../components/section-title";
import AboutLinks from "../components/about/about-links";
import EducationList from "../components/about/education-list";
import StatCard from "../components/about/stat-card";
import TechnologiesSection from "../components/about/technologies-section";
import ExperienceSection from "../components/experience/experience-section";

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.div whileInView={{ opacity: [0, 1] }} viewport={{ once: true }}>
      <Box as="section">
        <Box mb={{ base: 16, md: 20 }}>
          <SectionTitle
            color="white"
            fontSize={{ base: "3xl", md: "5xl", "2xl": "6xl" }}
            mb={{ base: 5, md: 6 }}
          >
            {t("about.title")}
          </SectionTitle>

          <Text
            color="gray.400"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.7"
            maxW="720px"
          >
            {formatBoldText(t("about.bio"))}
          </Text>

          <AboutLinks />

          <Flex
            direction={{ base: "column", sm: "row" }}
            gap={4}
            mt={{ base: 8, md: 10 }}
          >
            <StatCard
              icon={LuTarget}
              value={ABOUT_STATS.projects}
              label={t("about.stats.projects")}
            />
            <StatCard
              icon={LuCalendar}
              value={ABOUT_STATS.yearsExperience}
              label={t("about.stats.experience")}
            />
          </Flex>
        </Box>

        <Box mb={{ base: 16, md: 20 }}>
          <SectionTitle
            color="white"
            fontSize={{ base: "3xl", md: "5xl", "2xl": "6xl" }}
            mb={2}
          >
            {t("about.education.title")}
          </SectionTitle>
          <Text
            color="gray.400"
            fontSize={{ base: "md", md: "lg" }}
            mb={{ base: 6, md: 8 }}
          >
            {t("about.education.subtitle")}
          </Text>

          <EducationList />
        </Box>

        <ExperienceSection />

        <TechnologiesSection />
      </Box>
    </motion.div>
  );
};

export default About;
