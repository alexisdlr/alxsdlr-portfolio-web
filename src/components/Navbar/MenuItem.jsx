import { Link, Text } from "@chakra-ui/react";

const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <Link href={to} _hover={{textDecor: 'none'}} >
      <Text display="block"  {...rest}>
        {children}
      </Text>
    </Link>
  );
}
export default MenuItem