import { Text } from "@chakra-ui/react";

export const formatBoldText = (text) => {
  if (!text) return null;

  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <Text as="span" key={index} fontWeight="bold" color="white">
          {part.slice(2, -2)}
        </Text>
      );
    }

    return part;
  });
};
