import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";

const Switcher = () => {
  return (
    <ChakraProvider>
      <Switch size="md" />
    </ChakraProvider>
  );
};

export default Switcher;
