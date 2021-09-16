import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Roadmap() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Heading
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        <Text
          as={"span"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: "20%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "blue.400",
            zIndex: -1,
          }}
        >
          Roadmap
        </Text>
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"100% sold"}
          stat={
            "Word Match games begin. If you have the matching word, win SOL. It's that easy."
          }
        />
        <StatsCard title={"+ ~60 Days"} stat={"Word Search games begin. Circle your word in the puzzle. If all words are found, all participating players equally split the prize in SOL."} />
        <StatsCard title={"+ ~90 Days"} stat={"Crossword Puzzle games begin. Help solve the crossword puzzle. If its completed, all participating players equally split the prize in SOL."} />
        <StatsCard title={"+ 90+ Days"} stat={"Combine your word with other words to create new word and sentence NFTs."} />
      </SimpleGrid>
    </Box>
  );
}
