import { Link } from "@chakra-ui/react";

const NavLink = ({ sectionId, label, onNavigate }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onNavigate(sectionId);
  };

  return (
    <Link
      href={`#${sectionId}`}
      color="gray.200"
      onClick={handleClick}
      fontSize={{ base: "xl", md: "md" }}
      fontWeight="bold"
      _hover={{ color: "purple" }}
      transition="color 200ms, transform 200ms"
    >
      {label}
    </Link>
  );
};

export default NavLink;
