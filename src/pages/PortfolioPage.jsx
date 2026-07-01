import { Suspense, lazy } from "react";
import { Box } from "@chakra-ui/react";
import Loader from "../components/Loader";
import {
  APP_BG_DARK,
  APP_HORIZONTAL_PADDING,
  APP_MAX_WIDTH,
  APP_SIDEBAR_GUTTER,
} from "../constants/layout";

const Home = lazy(() => import("../Layouts/Home"));
const Experience = lazy(() => import("../Layouts/Experience"));
const Projects = lazy(() => import("../Layouts/Projects"));
const Footer = lazy(() => import("../Layouts/Footer"));

const sectionFadeMask = {
  base: "linear-gradient(to bottom, transparent 0%, black 100px)",
  md: "linear-gradient(to bottom, transparent 0%, black 160px)",
  lg: "linear-gradient(to bottom, transparent 0%, black 200px)",
};

const PortfolioPage = () => {
  return (
    <Box as="main" w="full">
      <Suspense fallback={<Loader />}>
        <Home />

        <Box
          position="relative"
          w="100vw"
          ml="calc(50% - 50vw)"
          mr="calc(50% - 50vw)"
          pt={{ base: 12, md: 16 }}
        >
          <Box
            aria-hidden
            position="absolute"
            inset={0}
            bg={APP_BG_DARK}
            pointerEvents="none"
            css={{
              maskImage: sectionFadeMask,
              WebkitMaskImage: sectionFadeMask,
            }}
          />

          <Box
            position="relative"
            zIndex={1}
            maxW={APP_MAX_WIDTH}
            mx="auto"
            w="full"
            px={APP_HORIZONTAL_PADDING}
            pl={APP_SIDEBAR_GUTTER}
          >
            <Experience />
            <Projects />
            <Footer />
          </Box>
        </Box>
      </Suspense>
    </Box>
  );
};

export default PortfolioPage;
