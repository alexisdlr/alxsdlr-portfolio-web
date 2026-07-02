import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { system } from "../theme/theme";
import ToasterProvider from "./components/toaster-provider";
import AppLayout from "./layouts/app-layout";
import AboutPage from "./pages/about-page";
import PortfolioPage from "./pages/portfolio-page";
import ProjectDetailPage from "./pages/project-detail-page";

function App() {
  return (
    <ChakraProvider value={system}>
      <ToasterProvider />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
