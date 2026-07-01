import { Box, Icon, useBreakpointValue } from "@chakra-ui/react";
import { Tooltip } from "../Tooltip";

const tooltipContentProps = {
  bg: "rgba(30, 30, 30, 0.92)",
  color: "gray.200",
  fontWeight: "medium",
  px: 3,
  py: 2,
  borderRadius: "lg",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.45)",
};

const NavIconButton = ({ icon, label, isActive, onClick }) => {
  const tooltipPlacement = useBreakpointValue({ base: "top", md: "right" });

  return (
    <Tooltip
      content={label}
      showArrow
      positioning={{ placement: tooltipPlacement, offset: { mainAxis: 14 } }}
      contentProps={tooltipContentProps}
    >
      <Box
        as="button"
        type="button"
        aria-label={label}
        aria-current={isActive ? "page" : undefined}
        onClick={onClick}
        display="flex"
        alignItems="center"
        justifyContent="center"
        w={{ base: "40px", md: "44px" }}
        h={{ base: "40px", md: "44px" }}
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
        <Icon as={icon} boxSize={{ base: 6, md: 7 }} />
      </Box>
    </Tooltip>
  );
};

export default NavIconButton;
