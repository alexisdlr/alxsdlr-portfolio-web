import { Box } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader";

const About = lazy(() => import("../layouts/About"));

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
