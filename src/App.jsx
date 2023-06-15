import React, { Suspense, lazy } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import Loader from "./components/Loader";

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
        <Suspense fallback={<Loader />}>
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
