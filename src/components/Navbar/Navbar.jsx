import { List, ListItem, Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "./Header";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavContainer from "./NavContainer";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <motion.div animate={{ y: [-50, 0] }} transition={{ duration: 0.3 }}>
      <Header>
        <NavContainer>
          <Logo open={open} />
          <MenuLinks open={open} />
          <MenuToggle toggle={toggle} isOpen={open} />
        </NavContainer>
      </Header>
    </motion.div>
  );
}

export default Navbar;
