import { Box, Icon } from "@chakra-ui/react";
import { Tooltip } from "../Tooltip";

const navTooltipProps = {
  positioning: { placement: "right", offset: { mainAxis: 14 } },
  contentProps: {
    bg: "rgba(30, 30, 30, 0.92)",
    color: "gray.200",
    fontWeight: "medium",
    px: 3,
    py: 2,
    borderRadius: "lg",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.45)",
  },
};

const NavIconButton = ({ icon, label, isActive, onClick }) => (
  <Tooltip content={label} showArrow {...navTooltipProps}>
    <Box
      as="button"
      type="button"
      aria-label={label}
      aria-current={isActive ? "page" : undefined}
      onClick={onClick}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="44px"
      h="44px"
      borderRadius="full"
      border="none"
      cursor="pointer"
      bg={isActive ? "gray.200" : "transparent"}
      color={isActive ? "gray.900" : "gray.400"}
      transition="background 0.2s, color 0.2s"
      _hover={{
        bg: isActive ? "gray.200" : "whiteAlpha.150",
        color: isActive ? "gray.900" : "gray.200",
      }}
    >
      <Icon as={icon} boxSize={7} />
    </Box>
  </Tooltip>
);

export default NavIconButton;
