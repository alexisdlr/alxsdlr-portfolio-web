import { Box, Flex } from "@chakra-ui/react";

const ProjectBadge = ({ status, statusColor }) => (
  <Flex
    align="center"
    gap={2}
    px={3}
    py={1.5}
    borderRadius="full"
    bg="whiteAlpha.100"
    border="1px solid"
    borderColor="whiteAlpha.200"
    fontSize="xs"
    fontWeight="medium"
    color="white"
    whiteSpace="nowrap"
  >
    <Box w="6px" h="6px" borderRadius="full" bg={statusColor} />
    {status}
  </Flex>
);

export default ProjectBadge;
