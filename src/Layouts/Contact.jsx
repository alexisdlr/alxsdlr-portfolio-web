import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ContactForm from "../components/Contact/ContactForm";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div whileInView={{ opacity: [0, 1] }} viewport={{ once: true }}>
      <Flex
        id={"contact"}
        direction={{ base: "column", md: "column", xl: "row" }}
        align={"center"}
        minH={{ base: "85vh", md: "100vh" }}
        justify={"center"}
        maxW={1350}
        mx={"auto"}
        gap={4}
        as={"section"}
      >
        <Box as={"div"} textAlign={{ base: "center", md: "initial" }}>
          <Heading
            px={{ md: 8, xl: 0 }}
            color={"yellow"}
            fontSize={{ base: "3xl", md: "8xl" }}
            as={"h2"}
            lineHeight={"10"}
            my={8}
          >
            Contact me!
            <br />
            <Text
              px={{ md: 8, xl: 0 }}
              color={"gray.300"}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight={"normal"}
              as={"span"}
            >
              Hire me
            </Text>
          </Heading>
          <Text
            as={"p"}
            maxW={{ base: 500, md: "100%" }}
            px={{ md: 8, xl: 0 }}
            color={"gray.200"}
          >
            If you are interested in collaborating in any project, hire me or
            just want to say hello, write me a message through my email
            alexisdlr3009@hotmail.com and I will respond as soon as possible.
          </Text>
        </Box>
        <ContactForm />
      </Flex>
    </motion.div>
  );
};
export default Contact;
