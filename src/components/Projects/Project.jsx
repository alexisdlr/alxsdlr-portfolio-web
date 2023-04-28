import { Flex, Heading, Stack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ButtonPrimary } from "../Button";
import listProjects from "./listProjects";
import { variants } from "../../constants/variants";
const Project = () => {
  return (
    <Stack
      spacing={{ base: 16, md: 8 }}
      px={{ base: 4, md: 8 }}
      direction={{ base: "column", md: "row" }}
      justify={"center"}
      align={"center"}
      wrap={"wrap"}
      rowGap={8}
    >
      {listProjects.map(({ title, src, id, url, code }, index) => (
        <motion.div
          key={id}
          initial={"hidden"}
          whileInView={"visible"}
          custom={{ delay: (index + 1) * 0.1 }}
          variants={variants}
          viewport={{ once: false }}
        >
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            gap={5}
            p={{ base: 8, md: 0 }}
            _hover={{ opacity: 0.8, transition: "300ms" }}
          >
            <Heading fontSize={{ base: "1rem", md: "xl" }}>{title}</Heading>
            <Image alt={title} src={src} maxW={400} rounded={8} />
            <Flex gap={5}>
              <ButtonPrimary
                href={url}
                rounded={"full"}
                bg={"purple"}
                color={"white"}
                fontWeight={"bold"}
                boxShadow="rgb(99 51 255 / 19%) 5px 5px 15px 5px"
                _hover={{
                  opacity: 0.8,
                  transform: "translateY(-3px)",
                }}
                _active={{ opacity: 0.5 }}
              >
                View demo
              </ButtonPrimary>
              <ButtonPrimary
                href={code}
                rounded={"full"}
                bg={"yellow"}
                color={"black"}
                fontWeight={"bold"}
                boxShadow="rgb(99 51 255 / 19%) 5px 5px 15px 5px"
                _hover={{
                  opacity: 0.8,
                  transform: "translateY(-3px)",
                }}
                _active={{ opacity: 0.5 }}
              >
                {"<Code />"}
              </ButtonPrimary>
            </Flex>
          </Flex>
        </motion.div>
      ))}
    </Stack>
  );
};
export default Project;
