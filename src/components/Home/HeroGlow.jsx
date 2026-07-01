import { Box } from "@chakra-ui/react";

const HeroGlow = () => (
  <Box
    aria-hidden
    position="absolute"
    inset={0}
    minH="100dvh"
    pointerEvents="none"
    css={{
      backgroundImage:
        "radial-gradient(ellipse 130% 95% at 100% 0%, var(--color-hero-gradient-glow) 0%, rgba(0, 198, 141, 0.12) 38%, transparent 62%)",
    }}
  />
);

export default HeroGlow;
