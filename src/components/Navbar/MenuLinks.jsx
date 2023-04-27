import { Box, Stack } from "@chakra-ui/react";
import { ButtonPrimary } from "../Button";
import MenuItem from "./MenuItem";

const MenuLinks = ({ open }) => {
  const Datanav = [
    { id: 1, text: "Home", link: "#home" },
    { id: 2, text: "Sklls", link: "#skills" },
    { id: 3, text: "Projects", link: "#projects" },
    { id: 4, text: "Contact Me", link: "#contact" },
  ];
  return (
    <Box
      display={{ base: open ? "block" : "none", md: "block" }}
      w={{ base: "100%", md: "auto" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={{ base: "center", md: "space-between", lg: "flex-end" }}
        direction={{ base: "column", md: "row" }}
        pt={{ base: 8, md: 0, lg: 0 }}
      >
        {Datanav.map((item) => (
          <MenuItem
            key={item.id}
            _hover={{ color: "purple", transition: "300ms" }}
            to={item.link}
          >
            {item.text}
          </MenuItem>
        ))}
        <ButtonPrimary
          href={
            "https://drive.google.com/file/d/1yVkxlNI5xSJLFPRY5CW10KOLibACLlEV/view?usp=sharing"
          }
          rounded={"full"}
          bg={"purple"}
          color={"white"}
          fontWeight={"bold"}
          boxShadow="rgb(99 51 255 / 19%) 5px 5px 15px 5px"
          _hover={{
            opacity: 0.8,
            transform: "translateY(-5px)",
          }}
          _active={{ opacity: 0.5 }}
        >
          Download CV
        </ButtonPrimary>
      </Stack>
    </Box>
  );
};
export default MenuLinks;
