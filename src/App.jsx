import React, { Suspense, lazy } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Oval } from "react-loader-spinner";
import theme from "../theme/theme";

const Home = lazy(() => import("./Layouts/Home"));
const Projects = lazy(() => import("./Layouts/Projects"));
const Skills = lazy(() => import("./Layouts/Skills"));
const About = lazy(() => import("./Layouts/About"));
const Contact = lazy(() => import("./Layouts/Contact"));
const Footer = lazy(() => import("./Layouts/Footer"));

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Suspense
          fallback={
            <Flex h={"100vh"} justify={"center"} alignItems={"center"}>
              <Oval color="#5800FF" secondaryColor="#FFC600" />
            </Flex>
          }
        >
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </ChakraProvider>
  );
}

export default App;
