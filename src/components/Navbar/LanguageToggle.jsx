import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useLanguageStore } from "../../store/useLanguageStore";
import { useTranslation } from "../../i18n/useTranslation";
import { Tooltip } from "../Tooltip";

const sidebarTooltipContentProps = {
  bg: "rgba(30, 30, 30, 0.92)",
  color: "gray.200",
  fontWeight: "medium",
  px: 3,
  py: 2,
  borderRadius: "lg",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.45)",
};

const LanguageToggle = ({ variant = "default" }) => {
  const toggleLocale = useLanguageStore((state) => state.toggleLocale);
  const { locale, t } = useTranslation();
  const tooltipPlacement = useBreakpointValue({ base: "top", md: "right" });
  const label =
    locale === "es" ? t("nav.switchToEnglish") : t("nav.switchToSpanish");

  if (variant === "sidebar") {
    return (
      <Tooltip
        content={label}
        showArrow
        positioning={{ placement: tooltipPlacement, offset: { mainAxis: 14 } }}
        contentProps={sidebarTooltipContentProps}
      >
        <Box
          as="button"
          type="button"
          onClick={toggleLocale}
          aria-label={label}
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={{ base: "40px", md: "44px" }}
          h={{ base: "40px", md: "44px" }}
          borderRadius="full"
          border="none"
          cursor="pointer"
          bg="transparent"
          color="gray.400"
          fontWeight="bold"
          fontSize="xs"
          letterSpacing="wider"
          flexShrink={0}
          transition="background 0.2s, color 0.2s"
          _hover={{ bg: "whiteAlpha.150", color: "gray.200" }}
        >
          {locale === "es" ? "EN" : "ES"}
        </Box>
      </Tooltip>
    );
  }

  return (
    <Box
      as="button"
      type="button"
      onClick={toggleLocale}
      aria-label={label}
      display="flex"
      alignItems="center"
      justifyContent="center"
      minW="44px"
      h="36px"
      px={3}
      borderRadius="full"
      border="1px solid"
      borderColor="whiteAlpha.300"
      bg="whiteAlpha.100"
      color="white"
      fontWeight="bold"
      fontSize="xs"
      letterSpacing="wider"
      cursor="pointer"
      transition="background 0.2s"
      _hover={{ bg: "whiteAlpha.200" }}
    >
      {locale === "es" ? "EN" : "ES"}
    </Box>
  );
};

export default LanguageToggle;
