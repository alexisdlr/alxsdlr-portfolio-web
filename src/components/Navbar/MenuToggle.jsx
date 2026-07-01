import { IconButton } from "@chakra-ui/react";
import { LuMenu, LuX } from "react-icons/lu";
import { useTranslation } from "../../i18n/useTranslation";

const MenuToggle = ({ isOpen, onToggle }) => {
  const { t } = useTranslation();

  return (
    <IconButton
      display={{ base: "inline-flex", md: "none" }}
      variant="ghost"
      color="white"
      fontSize="xl"
      position={{ base: isOpen ? "fixed" : "relative", md: "relative" }}
      top={{ base: isOpen ? 5 : undefined, md: undefined }}
      right={{ base: isOpen ? 12 : undefined, md: undefined }}
      zIndex={{ base: isOpen ? 99 : undefined, md: undefined }}
      aria-label={isOpen ? t("nav.ariaCloseMenu") : t("nav.ariaOpenMenu")}
      aria-expanded={isOpen}
      aria-controls="main-nav-menu"
      onClick={onToggle}
      _hover={{ bg: "whiteAlpha.200" }}
    >
      {isOpen ? <LuX /> : <LuMenu />}
    </IconButton>
  );
};

export default MenuToggle;
