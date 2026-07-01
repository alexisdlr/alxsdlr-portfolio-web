import { Link, Button } from "@chakra-ui/react";

export const ButtonPrimary = ({ children, href, ...rest }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      _hover={{ textDecoration: "none" }}
    >
      <Button {...rest}>{children}</Button>
    </Link>
  );
};
