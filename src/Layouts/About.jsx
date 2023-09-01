import { Flex, Heading, Text } from "@chakra-ui/react";
import AboutInfo from "../components/About/AboutInfo";
const About = () => {
  return (
    <Flex
      direction={"column"}
      align={{ base: "center", md: "flex-start" }}
      maxW={1350}
      mx={"auto"}
      my={{ base: "10", md: "30" }}
      minH={{ base: "90vh", md: "100vh" }}
    >
      <Heading
        color={"yellow"}
        px={{ md: 8, "2xl": 0 }}
        fontSize={{ base: "4xl", md: "4xl", lg: "6xl", "2xl": "7xl" }}
        lineHeight={"10"}
      >
        About me!
      </Heading>
      <Text
        color={"gray.300"}
        px={{ md: 8, "2xl": 0 }}
        my={{ base: 0, md: 8 }}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight={"normal"}
        textAlign={{ base: "center", md: "initial" }}
        as={"span"}
      >
        Who I am
      </Text>
      <AboutInfo />
    </Flex>
  );
};
export default About;
