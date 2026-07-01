import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { SocialLinks } from "../components/Footer/SocialLinks";
import { useTranslation } from "../i18n/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="footer"
      w="full"
      pt={{ base: 16, md: 20 }}
      pb={{ base: 10, md: 12 }}
      mt={{ base: 12, md: 16 }}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr auto 1fr" }}
        templateRows={{ base: "auto", md: "auto" }}
        alignItems={{ base: "center", md: "center" }}
        gap={{ base: 6, md: 8 }}
        w="full"
      >
        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading
            color="yellow"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            lineHeight="1.2"
            mb={1}
          >
            Alexis De León Rodriguez
          </Heading>
          <Text
            color="gray.400"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="light"
          >
            {t("footer.role")}
          </Text>
        </Box>

        <Box justifySelf={{ base: "center", md: "center" }}>
          <SocialLinks size={7} />
        </Box>

        <Text
          color="gray.500"
          fontSize={{ base: "sm", md: "md" }}
          textAlign={{ base: "center", md: "right" }}
          justifySelf={{ base: "center", md: "end" }}
        >
          {t("footer.madeWith")}
        </Text>
      </Grid>
    </Box>
  );
};

export default Footer;
