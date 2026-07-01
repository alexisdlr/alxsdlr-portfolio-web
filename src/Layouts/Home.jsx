import { Box } from "@chakra-ui/react";
import Hero from "../components/Home/Hero";
import HeroGlow from "../components/Home/HeroGlow";

const Home = () => {
  return (
    <Box
      as="section"
      position="relative"
      minH="100dvh"
      w="full"
    >
      <Box
        position="absolute"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        w="100vw"
        minH="100dvh"
        pointerEvents="none"
        zIndex={0}
      >
        <HeroGlow />
      </Box>

      <Box position="relative" zIndex={1} w="full">
        <Hero />
      </Box>
    </Box>
  );
};

export default Home;
