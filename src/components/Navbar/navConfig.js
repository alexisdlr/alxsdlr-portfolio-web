import { LuBriefcase, LuCode, LuHouse, LuUser } from "react-icons/lu";

export const NAV_LINKS = [
  { id: "home", labelKey: "nav.home", icon: LuHouse },
  { id: "about", labelKey: "nav.about", icon: LuUser, href: "/about" },
  { id: "experience", labelKey: "nav.experience", icon: LuBriefcase },
  { id: "projects", labelKey: "nav.projects", icon: LuCode },
];

export const SCROLL_SECTION_IDS = NAV_LINKS.filter((link) => !link.href).map(
  ({ id }) => id,
);

export const CV_URL =
  "https://drive.google.com/file/d/1yVkxlNI5xSJLFPRY5CW10KOLibACLlEV/view?usp=sharing";

export const CV_BUTTON_PROPS = {
  rounded: "full",
  bg: "purple",
  color: "white",
  fontWeight: "bold",
  boxShadow: "rgb(99 51 255 / 19%) 5px 5px 15px 5px",
  _hover: { opacity: 0.8, transform: "translateY(-5px)" },
  _active: { opacity: 0.5 },
};
