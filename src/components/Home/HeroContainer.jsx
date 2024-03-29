import { Stack } from "@chakra-ui/react";

const HeroContainer = ({ children }) => {
  return (
    <Stack
      h={{ base: "full", md: "100vh" }}
      direction={{ base: "column-reverse", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      maxW={1500}
      gap={10}
      mx={"auto"}
      px={4}
      id="home"
    >
      {children}
    </Stack>
  );
};
export default HeroContainer;
