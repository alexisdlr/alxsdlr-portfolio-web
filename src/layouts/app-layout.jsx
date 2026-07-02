import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import {
  APP_BG,
  APP_BOTTOM_NAV_GUTTER,
  APP_MAX_WIDTH,
} from "../constants/layout";

const AppLayout = () => {
  return (
    <Box w="full" minH="100dvh" bg={APP_BG}>
      <Navbar />
      <Box
        maxW={APP_MAX_WIDTH}
        mx="auto"
        w="full"
        pb={APP_BOTTOM_NAV_GUTTER}
        minH="100dvh"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
