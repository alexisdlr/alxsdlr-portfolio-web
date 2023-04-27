import { Link, Text } from "@chakra-ui/react";

const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <Link href={to} p={2} textAlign={'center'} w={{base: 200, md:'auto'}} _hover={{textDecor: 'none'}} >
      <Text fontSize={{base: 25, md: '1rem'}} fontWeight={'bold'} display="block"  {...rest}>
        {children}
      </Text>
    </Link>
  );
}
export default MenuItem