import { Image, Text, Box, Container, Flex } from "@chakra-ui/react";
import alxs from "../../assets/me.png";

const AboutInfo = () => {
  return (
    <Container
      rounded={8}
      py={8}
      px={16}
      textAlign={{ base: "center", md: "left" }}
      maxW={"full"}
    >
      <Flex
        align={"center"}
        justify={"center"}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 8, md: 4 }}
        
      >
        <Box display={{base: 'none', md:'block'}} w={'350px'} bg={'purple'} height={'350px'} position={'absolute'} left={150} borderRadius={8} />
        <Image
          alt="alexis de leon rodriguez"
          src={alxs}
          transform="rotate(8deg)"
          maxW={{ base: "200px", md: "350px" }}
          rounded={"8"}
          objectFit={"cover"}
        />
        <Flex direction={"column"} px={{ base: 0, md: 16 }}>
          <Box p={8} borderRadius={"8px"}>
            <Text
              as={"p"}
              fontSize={{ base: "1rem", md: "xl" }}
              color={"white"}
              fontWeight={"normal"}
            >
              Hi! I am{" "}
              <Text as={"span"} fontWeight={"bold"} color={"yellow"}>
                Alexis De León
              </Text>{" "}
              a very hardworking{" "}
              <Text as={"span"} fontWeight={"bold"} color={"yellow"}>
                Web Developer
              </Text>{" "}
              from MX who wants to collaborate in amazing things. <br />
              As a self-taught developer for almost 2 years, I love learning new
              things, my main area of ​​learning is{" "}
              <Text as={"span"} fontWeight={"bold"} color={"yellow"}>
                Javascript
              </Text>
              , I enjoy building sites with technologies like{" "}
              <Text as={"span"} fontWeight={"bold"} color={"blue.400"}>
                ReactJs
              </Text>
              . I'm constantly learning, and also improving things I already
              know, I have experience in{" "}
              <Text as={"span"} fontWeight={"bold"} color={"yellow"}>
                Front-end and in Back-end
              </Text>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};
export default AboutInfo;
