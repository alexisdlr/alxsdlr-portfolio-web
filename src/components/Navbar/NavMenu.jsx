import { Box, Stack } from "@chakra-ui/react";
import { ButtonPrimary } from "../Button";
import { useTranslation } from "../../i18n/useTranslation";
import { CV_BUTTON_PROPS, CV_URL, NAV_LINKS } from "./navConfig";
import NavLink from "./NavLink";

const NavMenu = ({ isOpen, onNavigate }) => {
  const { t } = useTranslation();

  return (
    <Box
      display={{ base: isOpen ? "flex" : "none", md: "flex" }}
      position={{ base: isOpen ? "fixed" : "relative", md: "relative" }}
      inset={{ base: isOpen ? 0 : undefined, md: undefined }}
      zIndex={{ base: isOpen ? 98 : undefined, md: undefined }}
      w={{ base: "full", md: "auto" }}
      flex={{ md: "1" }}
      pt={{ base: 24, md: 0 }}
      bg={{ base: isOpen ? "#000114" : "transparent", md: "transparent" }}
    >
      <Stack
        as="ul"
        listStyleType="none"
        gap={10}
        w="full"
        h={{ base: "full", md: "auto" }}
        align="center"
        justify={{ base: "center", md: "flex-end" }}
        direction={{ base: "column", md: "row" }}
        m={0}
        p={0}
      >
        {NAV_LINKS.map(({ id, labelKey }) => (
          <Box as="li" key={id}>
            <NavLink sectionId={id} label={t(labelKey)} onNavigate={onNavigate} />
          </Box>
        ))}
        <Box as="li">
          <ButtonPrimary href={CV_URL} {...CV_BUTTON_PROPS}>
            {t("nav.downloadCv")}
          </ButtonPrimary>
        </Box>
      </Stack>
    </Box>
  );
};

export default NavMenu;
