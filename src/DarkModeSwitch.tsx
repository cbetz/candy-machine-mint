/* eslint-disable eqeqeq */
import { useColorMode, IconButton } from "@chakra-ui/react";
import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      position="fixed"
      top="1rem"
      right="1rem"
      size={"sm"}
      variant={"ghost"}
      aria-label={"Toggle Color Mode"}
      onClick={toggleColorMode}
      icon={colorMode == "light" ? <IoMoon size={18} /> : <IoSunny size={18} />}
    />
  );
};
