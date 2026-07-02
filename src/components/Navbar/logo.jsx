import { Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

const Logo = ({ onNavigateHome }) => {
  return (
    <Image
      as="button"
      type="button"
      onClick={onNavigateHome}
      aria-label="Go to home section"
      boxSize="44px"
      borderRadius="full"
      objectFit="cover"
      bg="black"
      src={logo}
      cursor="pointer"
      flexShrink={0}
      _hover={{ opacity: 0.85 }}
      transition="opacity 200ms"
    />
  );
};

export default Logo;
