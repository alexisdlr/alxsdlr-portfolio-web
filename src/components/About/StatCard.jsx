import { Box, Flex, Icon, Text } from "@chakra-ui/react";

const StatCard = ({ icon, value, label }) => (
  <Flex
    align="center"
    gap={4}
    flex={1}
    minW={{ base: "full", sm: "0" }}
    p={{ base: 5, md: 6 }}
    borderRadius="2xl"
    border="1px solid"
    borderColor="whiteAlpha.100"
    bg="#08080f"
  >
    <Flex
      align="center"
      justify="center"
      w="44px"
      h="44px"
      borderRadius="xl"
      bg="whiteAlpha.50"
      flexShrink={0}
    >
      <Icon as={icon} boxSize={5} color="purple" />
    </Flex>

    <Box>
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        color="purple"
        lineHeight="1.1"
      >
        + {value}
      </Text>
      <Text fontSize="sm" color="gray.500" mt={1}>
        {label}
      </Text>
    </Box>
  </Flex>
);

export default StatCard;
