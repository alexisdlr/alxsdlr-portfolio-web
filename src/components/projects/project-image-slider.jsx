import { useState } from "react";
import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const MotionBox = motion.create(Box);

const ProjectImageSlider = ({ images, title }) => {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const goTo = (direction) => {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) return images.length - 1;
      if (next >= images.length) return 0;
      return next;
    });
  };

  return (
    <Box
      borderRadius="2xl"
      border="1px solid"
      borderColor="whiteAlpha.100"
      bg="#08080f"
      overflow="hidden"
      position="relative"
    >
      <Box
        aria-hidden
        position="absolute"
        inset={0}
        bg="#00C68D"
        opacity={0.18}
        maskImage="radial-gradient(ellipse 80% 70% at 50% 40%, black 0%, transparent 70%)"
        WebkitMaskImage="radial-gradient(ellipse 80% 70% at 50% 40%, black 0%, transparent 70%)"
      />

      <Flex
        justify="space-between"
        align="center"
        px={{ base: 4, md: 6 }}
        py={4}
        borderBottom="1px solid"
        borderColor="whiteAlpha.100"
        position="relative"
        zIndex={1}
      >
        <Text fontSize="sm" color="gray.300">
          Demo del proyecto
        </Text>
        <Text fontSize="sm" color="gray.500">
          Galería del proyecto
        </Text>
      </Flex>

      <Box position="relative" px={{ base: 4, md: 6 }} py={{ base: 5, md: 6 }} zIndex={1}>
        <Box
          position="relative"
          borderRadius="xl"
          overflow="hidden"
          border="1px solid"
          borderColor="whiteAlpha.150"
          bg="black"
          minH={{ base: "220px", md: "420px" }}
        >
          <AnimatePresence mode="wait">
            <MotionBox
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={images[index]}
                alt={`${title} - captura ${index + 1}`}
                w="full"
                h={{ base: "220px", md: "420px" }}
                objectFit="cover"
                objectPosition="top"
              />
            </MotionBox>
          </AnimatePresence>

          {hasMultiple && (
            <>
              <IconButton
                aria-label="Imagen anterior"
                position="absolute"
                top="50%"
                left={3}
                transform="translateY(-50%)"
                size="sm"
                variant="solid"
                bg="blackAlpha.700"
                color="white"
                borderRadius="full"
                onClick={() => goTo(-1)}
                _hover={{ bg: "blackAlpha.800" }}
              >
                <LuChevronLeft />
              </IconButton>
              <IconButton
                aria-label="Imagen siguiente"
                position="absolute"
                top="50%"
                right={3}
                transform="translateY(-50%)"
                size="sm"
                variant="solid"
                bg="blackAlpha.700"
                color="white"
                borderRadius="full"
                onClick={() => goTo(1)}
                _hover={{ bg: "blackAlpha.800" }}
              >
                <LuChevronRight />
              </IconButton>
            </>
          )}
        </Box>

        {hasMultiple && (
          <Flex justify="center" gap={2} mt={4}>
            {images.map((_, dotIndex) => (
              <Box
                key={dotIndex}
                as="button"
                aria-label={`Ir a imagen ${dotIndex + 1}`}
                w={dotIndex === index ? "20px" : "8px"}
                h="8px"
                borderRadius="full"
                bg={dotIndex === index ? "purple" : "whiteAlpha.300"}
                transition="all 0.2s"
                onClick={() => setIndex(dotIndex)}
              />
            ))}
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default ProjectImageSlider;
