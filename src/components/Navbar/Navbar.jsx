import { Box, Flex, Separator } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useDocumentLang } from "../../i18n/useDocumentLang";
import { useTranslation } from "../../i18n/useTranslation";
import { useSectionNavigation } from "./hooks/useSectionNavigation";
import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import NavIconButton from "./NavIconButton";
import { NAV_LINKS } from "./navConfig";

const MotionBox = motion.create(Box);

function Navbar() {
  useDocumentLang();
  const { t } = useTranslation();
  const { activeSection, navigateToSection } = useSectionNavigation();

  return (
    <Box
      position="fixed"
      left={{ base: 3, md: 5 }}
      top="50%"
      transform="translateY(-50%)"
      zIndex={99}
    >
      <MotionBox
        as="nav"
        id="main-nav-menu"
        aria-label={t("nav.ariaMainNav")}
        initial={{ x: -72, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
          delay: 0.15,
          type: "spring",
        }}
      >
        <Flex
          direction="column"
          align="center"
          gap={3}
          py={4}
          px={2.5}
          bg="rgba(255, 255, 255, 0.06)"
          border="1px solid"
          borderColor="whiteAlpha.100"
          borderRadius="full"
          backdropFilter="auto"
          backdropBlur="12px"
          boxShadow="0 12px 40px rgba(0, 0, 0, 0.35)"
        >
          <Flex
            as="ul"
            direction="column"
            align="center"
            gap={2}
            listStyleType="none"
            m={0}
            p={0}
          >
            {NAV_LINKS.map(({ id, labelKey, icon }) => (
              <Box as="li" key={id}>
                <NavIconButton
                  icon={icon}
                  label={t(labelKey)}
                  isActive={activeSection === id}
                  onClick={() => navigateToSection(id)}
                />
              </Box>
            ))}
          </Flex>

          <Separator borderColor="whiteAlpha.200" w="70%" />

          <LanguageToggle variant="sidebar" />
        </Flex>
      </MotionBox>
    </Box>
  );
}

export default Navbar;
