import { Image, Text, Box, Container, Flex } from "@chakra-ui/react";
import alxs from "../../assets/me.jpg";

const AboutInfo = () => {
  return (
    <Container
      rounded={8}
      py={8}
      px={{ base: 2, md: 16 }}
      textAlign={{ base: "center", md: "left" }}
      maxW={"full"}
    >
      <Flex
        align={"center"}
        justify={"center"}
        direction={{ base: "column", xl: "row" }}
        gap={{ base: 8, md: 10 }}
      >
        <Box position={"relative"}>
          <Box
            w={{ base: "200px", md: "300px", "2xl": "350px" }}
            height={{ base: "200px", md: "300px", "2xl": "350px" }}
            bg={"purple"}
            transform="rotate(-3deg)"
            position={"absolute"}
            boxShadow={{
              base: "10px 1px 50px #070A52",
              md: "10px 1px 100px #070A52",
            }}
            left={0}
            top={0}
            borderRadius={8}
          />
          <Image
            alt="alexis de leon rodriguez"
            src={alxs}
            transform={"rotate(8deg)"}
            maxW={{ base: "200px", md: "300px", "2xl": "350px" }}
            rounded={8}
            boxShadow={{
              base: "10px 1px 85px #5800FF",
              md: "10px 1px 155px #5800FF",
            }}
            objectFit={"cover"}
          />
        </Box>
        <Box p={{ base: 3, md: 10 }} >
          <Text
            as={"p"}
            maxW={{ base: 500, md: "100%" }}
            fontSize={{ base: "1rem", md: "md", "2xl": "xl" }}
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
            . I'm constantly learning, and also improving things I already know,
            I have experience in{" "}
            <Text as={"span"} fontWeight={"bold"} color={"yellow"}>
              Front-end and in Back-end
            </Text>
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};
export default AboutInfo;
