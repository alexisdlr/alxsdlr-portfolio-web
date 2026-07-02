import { Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { LuCopy, LuDownload, LuExternalLink, LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE } from "../../constants/profile";
import { useTranslation } from "../../i18n/usetranslation";
import { CV_URL } from "../navbar/navconfig";
import HeroActionButton from "./hero-action-button";

const MotionGrid = motion.create(Grid);
const MotionBox = motion.div;

const HeroActionGrid = ({
  motionVariants,
  itemVariants,
  motionInitial,
  motionAnimate,
  ...props
}) => {
  const { t } = useTranslation();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      toast.success(t("actions.emailCopied"));
    } catch {
      toast.error(t("actions.emailCopyFailed"));
    }
  };

  const buttons = [
    {
      key: "cv",
      icon: LuDownload,
      label: t("actions.cv"),
      tooltip: t("actions.cvTooltip"),
      href: CV_URL,
      target: "_blank",
      rel: "noopener noreferrer",
      actionIcon: LuDownload,
    },
    {
      key: "linkedin",
      icon: FaLinkedin,
      label: "LinkedIn",
      tooltip: t("actions.linkedinTooltip"),
      href: PROFILE.linkedin,
      target: "_blank",
      rel: "noopener noreferrer",
      actionIcon: LuExternalLink,
    },
    {
      key: "github",
      icon: FaGithub,
      label: "GitHub",
      tooltip: t("actions.githubTooltip"),
      href: PROFILE.github,
      target: "_blank",
      rel: "noopener noreferrer",
      actionIcon: LuExternalLink,
    },
    {
      key: "mail",
      icon: LuMail,
      tooltip: t("actions.emailTooltip"),
      label: t("actions.mail"),
      onClick: copyEmail,
      actionIcon: LuCopy,
    },
  ];

  if (!motionVariants) {
    return (
      <Grid
        templateColumns={{ base: "1fr", sm: "1fr 1fr" }}
        gap={4}
        w="full"
        {...props}
      >
        {buttons.map((button) => (
          <HeroActionButton key={button.key} {...button} />
        ))}
      </Grid>
    );
  }

  return (
    <MotionGrid
      variants={motionVariants}
      initial={motionInitial}
      animate={motionAnimate}
      templateColumns={{ base: "1fr", sm: "1fr 1fr" }}
      gap={4}
      w="full"
      {...props}
    >
      {buttons.map((button) => (
        <MotionBox key={button.key} variants={itemVariants}>
          <HeroActionButton {...button} />
        </MotionBox>
      ))}
    </MotionGrid>
  );
};

export default HeroActionGrid;
