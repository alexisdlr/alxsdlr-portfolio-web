import { Box } from "@chakra-ui/react";
import Hero from "../components/Home/Hero";
import HeroGlow from "../components/Home/HeroGlow";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ width: "100%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Hero />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;
