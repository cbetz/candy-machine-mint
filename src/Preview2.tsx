import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { createRef, useEffect } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import Footer from "./Footer";
import Roadmap from "./Roadmap";

export default function CallToActionWithVideo() {
  const cursor = createRef<HTMLElement>();
  const handleMouseMove = (event: any) => {
    console.log(event);
    const position = { x: event.clientX, y: event.clientY };
    const element = document.getElementById("cursor");
    console.log(element);
    if (element) {
      element.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      if (cursor.current) {
        cursor.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Container maxW={"7xl"} onMouseMove={(event) => handleMouseMove(event)}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
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
              Solana Letters
            </Text>
            <br />
          </Heading>
          <Text>
            1,198 unique Solana NFTs. Each is a unique 3 letter word with a
            custom background color corresponding to the hex equivalent of the
            letters.
          </Text>
          <Text>
            Get your letters today and work together with the Solana Letters
            Community to solve letter and word games in the future.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"lg"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"blue"}
              bg={"blue.400"}
              _hover={{ bg: "blue.500" }}
            >
              Mint 9/23/2021 6PM UTC
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("blue.50", "blue.400")}
          />
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src="/big-grid.png"
            />
          </Box>
        </Flex>
      </Stack>
      <div id={"roadmap"}></div>
      <Roadmap />
      <DarkModeSwitch />
      <Footer />
      <Cursor />
    </Container>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

export const Cursor = () => {
  return (
    <div
      id="cursor"
      className="cursor"
      style={{
        transform:
          "translate3d(487.28404017857144px, 159.96341463414635px, 0px)",
        display: "flex",
        position: "absolute",
        fontFamily: "Inter, sans-serif",
        fontSize: "11px",
        lineHeight: "1em",
        cursor: "pointer",
        transition: "opacity 0.3s ease",
        willChange: "transform",
        overflow: "visible",
      }}
    >
      <div>
        <svg
          width="33"
          height="33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)" opacity="1">
            <path
              d="M9.63 6.9a1 1 0 011.27-1.27l11.25 3.75a1 1 0 010 1.9l-4.68 1.56a1 1 0 00-.63.63l-1.56 4.68a1 1 0 01-1.9 0L9.63 6.9z"
              fill="#ff0080"
            ></path>
            <path
              d="M11.13 4.92a1.75 1.75 0 00-2.2 2.21l3.74 11.26a1.75 1.75 0 003.32 0l1.56-4.68a.25.25 0 01.16-.16L22.4 12a1.75 1.75 0 000-3.32L11.13 4.92z"
              stroke="#fff"
              strokeWidth="1.5"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_d"
              x=".08"
              y=".08"
              width="32.26"
              height="32.26"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="4"></feGaussianBlur>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              ></feBlend>
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              ></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
      <div className="user-info">
        <div
          className="message empty"
          style={{ backgroundColor: "rgb(255, 0, 128)" }}
        >
          <img
            src="https://avatars.githubusercontent.com/alexanderson1993?s=56"
            className="avatar"
            alt="avatar"
            style={{ color: "rgb(255, 0, 128)" }}
          />
          <div
            className="collaborator_content__3ADbj"
            style={{ width: "0px", height: "0px" }}
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
