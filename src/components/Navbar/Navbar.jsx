import { Box, Flex, Separator } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useDocumentLang } from "../../i18n/useDocumentLang";
import { useTranslation } from "../../i18n/useTranslation";
import { useSectionNavigation } from "./hooks/useSectionNavigation";
import LanguageToggle from "./LanguageToggle";
import NavIconButton from "./NavIconButton";
import { NAV_LINKS } from "./navConfig";
import { APP_BG } from "../../constants/layout";
const MotionBox = motion.create(Box);

function Navbar() {
  useDocumentLang();
  const { t } = useTranslation();
  const { activeSection, navigateToSection } = useSectionNavigation();

  return (
    <Box
      position="fixed"
      zIndex={99}
      left={{ base: "50%", md: 5 }}
      right={{ base: "auto", md: "auto" }}
      top={{ base: "auto", md: "50%" }}
      bottom={{ base: 4, md: "auto" }}
      transform={{
        base: "translateX(-50%)",
        md: "translateY(-50%)",
      }}
      w={{ base: "max-content", md: "auto" }}
      px={{ base: 2, md: 0 }}
      pb={{ base: "env(safe-area-inset-bottom, 0px)", md: 0 }}
    >
      <MotionBox
        as="nav"
        id="main-nav-menu"
        aria-label={t("nav.ariaMainNav")}
        initial={{ opacity: 0, y: 24, x: 0 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
          delay: 0.15,
          type: "spring",
        }}
      >
        <Flex
          direction={{ base: "row", md: "column" }}
          align="center"
          justify={{ base: "space-between", md: "flex-start" }}
          gap={{ base: 1, md: 3 }}
          py={{ base: 2.5, md: 4 }}
          px={{ base: 2.5, md: 2.5 }}
          bg={
            "linear-gradient(to bottom, #080A0F 0%, rgba(8, 10, 15, 0.85) 35%, transparent 100%)"
          }
          border="1px solid"
          borderColor="whiteAlpha.100"
          borderRadius={{ base: "2xl", md: "full" }}
          backdropFilter="auto"
          backdropBlur="12px"
          boxShadow="0 12px 40px rgba(0, 0, 0, 0.35)"
        >
          <Flex
            as="ul"
            direction={{ base: "row", md: "column" }}
            align="center"
            justify={{ base: "center", md: "flex-start" }}
            gap={{ base: 1, md: 2 }}
            listStyleType="none"
            m={0}
            p={0}
            flex={{ base: 1, md: "initial" }}
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

          <Separator
            orientation="vertical"
            borderColor="whiteAlpha.200"
            h={{ base: "70%", md: "0" }}
            w={{ base: "1px", md: "70%" }}
            display={{ base: "block", md: "none" }}
          />
          <Separator
            orientation="horizontal"
            borderColor="whiteAlpha.200"
            w="70%"
            display={{ base: "none", md: "block" }}
          />

          <LanguageToggle variant="sidebar" />
        </Flex>
      </MotionBox>
    </Box>
  );
}

export default Navbar;
