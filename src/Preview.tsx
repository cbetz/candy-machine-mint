import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  Container,
  List,
  ListItem,
  ListIcon,
  Center,
} from "@chakra-ui/react";
//import { DarkModeSwitch } from "../components/DarkModeSwitch";
import React from "react";
import { TimeIcon } from "@chakra-ui/icons";

const Preview = () => {
  return (
    <Container maxW={"7xl"} flex={"1 0 auto"} py={8} mt={2}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 15, md: 30 }}
        pt={50}
      >
        <Center>
          <Image src="/solana-letters.png" boxSize="300px" align="center" />
        </Center>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={" %"}
          id={"mint"}
        >
          Letter Letter Letter
        </Heading>
        <Text fontSize={{ md: "xl" }}>
          1,198 unique Solana NFTs. Each is a unique 3 letter word with a custom
          background color corresponding to the hex equivalent of the letters.
          <br /> For example: ONE {"=>"}{" "}
          <Text as={"span"} color="#4f4e45">
            #4f4e45
          </Text>
          .
        </Text>
        <Text fontSize={{ md: "xl" }}>
          Get your letters today and work together with the Solana Letters
          Community to solve letter and word games in the future.
        </Text>
        <Stack
          direction={"row"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            colorScheme={"blue"}
            bg={"blue.400"}
            rounded={"md"}
            px={6}
            _hover={{
              bg: "blue.500",
            }}
          >
            Mint coming soon...
          </Button>
        </Stack>

        <Heading as={"h2"} fontSize={{ md: "xl" }}>
          Roadmap
        </Heading>

        <List spacing={3} id={"roadmap"}>
          <ListItem>
            <ListIcon as={TimeIcon} color="gray.500" />
            <Text as={"span"} fontWeight="bold">
              100% sold -
            </Text>{" "}
            Word Match games begin. If you have the matching word, win SOL. It's
            that easy.
          </ListItem>
          <ListItem>
            <ListIcon as={TimeIcon} color="gray.500" />
            <Text as={"span"} fontWeight="bold">
              Sold Out + ~60 Days -{" "}
            </Text>
            Word Search games begin. Circle your word in the puzzle. If all
            words are found, all participating players equally split the prize
            in SOL.
          </ListItem>
          <ListItem>
            <ListIcon as={TimeIcon} color="gray.500" />
            <Text as={"span"} fontWeight="bold">
              Sold Out + ~90 Days -{" "}
            </Text>
            Crossword Puzzle games begin. Help solve the crossword puzzle. If
            its completed, all participating players equally split the prize in
            SOL.
          </ListItem>
          <ListItem>
            <ListIcon as={TimeIcon} color="gray.500" />
            <Text as={"span"} fontWeight="bold">
              Sold Out + 90+ Days -{" "}
            </Text>
            Combine your word with other words to create new word and sentence NFTs.
          </ListItem>
        </List>
      </Stack>

      {/*<DarkModeSwitch />*/}
    </Container>
  );
};

export default Preview;
