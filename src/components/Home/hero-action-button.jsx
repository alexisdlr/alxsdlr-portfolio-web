import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { Tooltip } from "../tooltip";

const actionButtonStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  w: "36px",
  h: "36px",
  borderRadius: "md",
  bg: "gray.800",
  flexShrink: 0,
  cursor: "pointer",
  border: "none",
  p: 0,
  color: "gray.400",
  transition: "background 0.2s, color 0.2s",
  _hover: {
    bg: "gray.700",
    color: "gray.200",
    textDecoration: "none",
  },
};

const HeroActionButton = ({
  icon,
  label,
  tooltip,
  href,
  onClick,
  actionIcon,
  target,
  rel,
}) => {
  const isLink = Boolean(href);

  return (
    <Flex
      align="center"
      justify="space-between"
      gap={3}
      w="full"
      p={5}
      borderRadius="xl"
      border="1px solid"
      borderColor="gray.600"
      bg="gray.900"
      color="gray.200"
    >
      <Flex align="center" gap={3} minW={0} flex={1}>
        <Icon as={icon} boxSize={6} color="gray.300" flexShrink={0} />
        <Text fontSize="lg" fontWeight="regular" color="gray.300" truncate>
          {label}
        </Text>
      </Flex>

      <Tooltip content={tooltip} showArrow positioning={{ placement: "top" }}>
        <Box
          as={isLink ? "a" : "button"}
          type={isLink ? undefined : "button"}
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          aria-label={tooltip}
          {...actionButtonStyles}
        >
          <Icon as={actionIcon} boxSize={4} />
        </Box>
      </Tooltip>
    </Flex>
  );
};

export default HeroActionButton;
