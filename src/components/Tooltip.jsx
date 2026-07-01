import { Tooltip as ChakraTooltip, Portal } from "@chakra-ui/react";
import * as React from "react";

export const Tooltip = React.forwardRef(function Tooltip(props, ref) {
  const {
    showArrow = true,
    children,
    disabled,
    portalled = true,
    content,
    contentProps,
    portalRef,
    positioning = { placement: "top", offset: { mainAxis: 10 } },
    ...rest
  } = props;

  if (disabled) return children;

  return (
    <ChakraTooltip.Root
      {...rest}
      positioning={positioning}
      openDelay={150}
      closeDelay={100}
    >
      <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraTooltip.Positioner>
          <ChakraTooltip.Content
            ref={ref}
            bg="#00C68D"
            color="#1A1A1A"
            fontSize="sm"
            fontWeight="semibold"
            px={4}
            py={2.5}
            borderRadius="xl"
            whiteSpace="nowrap"
            boxShadow="0 10px 30px rgba(0, 0, 0, 0.35)"
            zIndex={9999}
            {...contentProps}
          >
            {showArrow && (
              <ChakraTooltip.Arrow>
                <ChakraTooltip.ArrowTip bg={contentProps?.bg ?? "#00C68D"} />
              </ChakraTooltip.Arrow>
            )}
            {content}
          </ChakraTooltip.Content>
        </ChakraTooltip.Positioner>
      </Portal>
    </ChakraTooltip.Root>
  );
});
