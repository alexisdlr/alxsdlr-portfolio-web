import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { system } from "../theme/theme";
import ToasterProvider from "./components/ToasterProvider";
import AppLayout from "./layouts/AppLayout";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

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
