import logo from "../../assets/logo.png";
import { Box, Image } from "@chakra-ui/react";
const Logo = ({ open }) => {
  return (
    <Box>
      <Image
        boxSize={{ base: 12, md: 16 }}
        position={open ? "absolute" : "initial"}
        borderRadius="full"
        objectFit={"cover"}
        boxShadow={"-1px 2px 1px #5800FF"}
        src={logo}
        top={6}
        alt="logo"
      />
    </Box>
  );
};
export default Logo;
