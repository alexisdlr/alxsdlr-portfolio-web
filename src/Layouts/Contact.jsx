import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ContactForm from "../components/Contact/ContactForm";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
      <Flex
        id={"contact"}
        direction={{ base: "column", md: "row" }}
        align={"center"}
        justify={"center"}
        maxW={1350}
        mx={"auto"}
        my={{ base: "24", md: "32" }}
        gap={4}
        as={"section"}
      >
        <Box as={"div"} textAlign={{ base: "center", md: "initial" }}>
          <Heading
            px={{ base: 8, md: 0 }}
            color={"yellow"}
            fontSize={{ base: "3xl", md: "8xl" }}
            as={"h2"}
            lineHeight={"10"}
            my={8}
          >
            Contact me!
            <br />
            <Text
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
            px={{ base: 8, md: 0 }}
            fontSize={{ base: "1rem", md: "xl" }}
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
