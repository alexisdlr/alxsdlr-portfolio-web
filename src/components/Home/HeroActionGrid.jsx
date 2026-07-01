import { Grid } from "@chakra-ui/react";
import { toast } from "react-hot-toast";
import { LuCopy, LuDownload, LuExternalLink, LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE } from "../../constants/profile";
import { useTranslation } from "../../i18n/useTranslation";
import { CV_URL } from "../Navbar/navConfig";
import HeroActionButton from "./HeroActionButton";

const HeroActionGrid = (props) => {
  const { t } = useTranslation();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      toast.success(t("actions.emailCopied"));
    } catch {
      toast.error(t("actions.emailCopyFailed"));
    }
  };

  return (
    <Grid
      templateColumns={{ base: "1fr", sm: "1fr 1fr" }}
      gap={4}
      w="full"
      {...props}
    >
      <HeroActionButton
        icon={LuDownload}
        label={t("actions.cv")}
        tooltip={t("actions.cvTooltip")}
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        actionIcon={LuDownload}
      />
      <HeroActionButton
        icon={FaLinkedin}
        label="LinkedIn"
        tooltip={t("actions.linkedinTooltip")}
        href={PROFILE.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        actionIcon={LuExternalLink}
      />
      <HeroActionButton
        icon={FaGithub}
        label="GitHub"
        tooltip={t("actions.githubTooltip")}
        href={PROFILE.github}
        target="_blank"
        rel="noopener noreferrer"
        actionIcon={LuExternalLink}
      />
      <HeroActionButton
        icon={LuMail}
        tooltip={t("actions.emailTooltip")}
        label={t("actions.mail")}
        onClick={copyEmail}
        actionIcon={LuCopy}
      />
    </Grid>
  );
};

export default HeroActionGrid;
