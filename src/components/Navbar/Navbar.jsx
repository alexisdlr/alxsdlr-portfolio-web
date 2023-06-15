import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavContainer from "./NavContainer";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const sectionPosition = section.offsetTop;

      window.scrollTo({
        top: sectionPosition,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.3 }}
    >
      <Header>
        <NavContainer>
          <Logo open={open} />
          <MenuLinks
            open={open}
            toggle={toggle}
            scrollToSection={scrollToSection}
          />

          <MenuToggle toggle={toggle} isOpen={open} />
        </NavContainer>
      </Header>
    </motion.div>
  );
}

export default Navbar;
