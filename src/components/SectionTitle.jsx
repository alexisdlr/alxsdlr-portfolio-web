import { Heading } from "@chakra-ui/react";

const SectionTitle = ({ as = "h2", children, ...props }) => (
  <Heading as={as} fontFamily="display" fontWeight="normal" {...props}>
    {children}
  </Heading>
);

export default SectionTitle;
