import { Box } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import Loader from "../components/loader";

const About = lazy(() => import("../layouts/about"));

const AboutPage = () => {
  return (
    <Box as="main" w="full" py={{ base: 12, md: 16 }}>
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
    </Box>
  );
};

export default AboutPage;
