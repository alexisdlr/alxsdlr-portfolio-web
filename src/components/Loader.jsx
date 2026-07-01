import { Flex } from "@chakra-ui/react";
import { Cardio } from "ldrs/react";
import "ldrs/react/Cardio.css";

const Loader = () => {
  return (
    <Flex h={"100dvh"} w={"100%"} justifyContent="center" alignItems="center">
      <Cardio size={40} stroke={3.5} speed={1} color="#5800FF" />
    </Flex>
  );
};

export default Loader;
