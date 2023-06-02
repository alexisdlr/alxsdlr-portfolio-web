import { Box } from "@chakra-ui/react";
const Header = ({ children }) => {
  return (
    <Box
      as="header"
      w={"full"}
      mx={"auto"}
      backdropFilter="auto"
      backdropBlur="8px"
      top={4}
      wrap="wrap"
      pos="fixed"
      left={0}
      zIndex={99}
    >
      {children}
    </Box>
  );
};
export default Header;
