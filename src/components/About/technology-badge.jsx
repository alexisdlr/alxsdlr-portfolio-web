import { Flex, Icon, Text } from "@chakra-ui/react";

const TechnologyBadge = ({ name, icon, color }) => (
  <Flex
    align="center"
    gap={2.5}
    px={4}
    py={2.5}
    borderRadius="xl"
    border="1px solid"
    borderColor="whiteAlpha.100"
    bg="#12121a"
  >
    <Icon as={icon} boxSize={4} color={color} flexShrink={0} />
    <Text fontSize="sm" color="white" whiteSpace="nowrap">
      {name}
    </Text>
  </Flex>
);

export default TechnologyBadge;
