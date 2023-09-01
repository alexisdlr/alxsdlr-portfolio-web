import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import Skill from "../components/Skills/Skill";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
        <Flex
          justify={"center"}
          align={{ base: "center", md: "flex-start" }}
          direction={"column"}
          mb={{ base: "24", md: "36" }}
          minH={{ base: "85vh", md: "100vh" }}
          id="skills"
          maxW={1350}
          mx={"auto"}
        >
          <Heading
            w={{ md: "full", xl: "contain" }}
            textAlign={{ base: "center", xl: "left" }}
            color={"yellow"}
            px={{ md: 8, "2xl": 0 }}
            fontSize={{ base: "4xl", md: "6xl", "2xl": "8xl" }}
          >
            Skills
          </Heading>
          <Box p={{ base: 3, md: 10 }}  > 
           <Text
            my={5}
            px={{ base: 8, "2xl": 0 }}
            color="gray.100"
            maxW={{ base: 500, md: "100%" }}
            fontSize={{ base: "1rem", md: "md", xl: "xl" }}
            textAlign={{ base: "center", md: "left" }}
          >
            I am passionate about technology, in my day to day I try to learn
            new things, in addition, I like to build my projects with different
            languages ​​/ skills:
          </Text>

          
          </Box>
          <Skill />
        </Flex>
      </motion.div>
    </>
  );
};
export default Skills;
