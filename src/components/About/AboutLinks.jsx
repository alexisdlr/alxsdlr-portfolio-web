import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { toast } from "react-hot-toast";
import { LuDownload, LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE } from "../../constants/profile";
import { useTranslation } from "../../i18n/useTranslation";
import { CV_URL } from "../Navbar/navConfig";

const chipStyles = {
  display: "inline-flex",
  alignItems: "center",
  gap: 2,
  px: 4,
  py: 2.5,
  borderRadius: "lg",
  border: "1px solid",
  borderColor: "whiteAlpha.100",
  bg: "#0c0c14",
  color: "gray.300",
  fontSize: "sm",
  transition: "background 0.2s, color 0.2s",
  _hover: {
    bg: "whiteAlpha.100",
    color: "white",
    textDecoration: "none",
  },
};

const AboutLinks = () => {
  const { t } = useTranslation();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      toast.success(t("actions.emailCopied"));
    } catch {
      toast.error(t("actions.emailCopyFailed"));
    }
  };

  const links = [
    {
      key: "linkedin",
      label: "LinkedIn",
      icon: FaLinkedin,
      href: PROFILE.linkedin,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      key: "github",
      label: "GitHub",
      icon: FaGithub,
      href: PROFILE.github,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      key: "cv",
      label: t("actions.cv"),
      icon: LuDownload,
      href: CV_URL,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <Flex wrap="wrap" gap={3} mt={6}>
      {links.map(({ key, label, icon, href, target, rel }) => (
        <Link key={key} href={href} target={target} rel={rel} {...chipStyles}>
          <Icon as={icon} boxSize={4} />
          <Text as="span" textDecoration="underline" textUnderlineOffset="3px">
            {label}
          </Text>
        </Link>
      ))}

      <Box
        as="button"
        type="button"
        onClick={copyEmail}
        aria-label={t("actions.emailTooltip")}
        {...chipStyles}
        cursor="pointer"
      >
        <Icon as={LuMail} boxSize={4} />
        <Text as="span" textDecoration="underline" textUnderlineOffset="3px">
          {t("about.email")}
        </Text>
      </Box>
    </Flex>
  );
};

export default AboutLinks;
