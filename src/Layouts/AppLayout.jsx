import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  APP_BG,
  APP_HORIZONTAL_PADDING,
  APP_MAX_WIDTH,
  APP_SIDEBAR_GUTTER,
} from "../constants/layout";

const AppLayout = () => {
  return (
    <Box w="full" minH="100dvh" bg={APP_BG}>
      <Navbar />
      <Box
        maxW={APP_MAX_WIDTH}
        mx="auto"
        w="full"
        px={APP_HORIZONTAL_PADDING}
        pl={APP_SIDEBAR_GUTTER}
        minH="100dvh"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
