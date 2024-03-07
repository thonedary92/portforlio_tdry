import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

const milestones = [
  {
    id: 1,
    date: "MARCH, 2017",
    title: "Completed High School",
    description: `I have completed 12th in B.E.H.S (2) Bahan in Myanmar with Myanmar, English, Math, Biology, Physics, Chemistry`,
  },
  {
    id: 2,
    date: "2019",
    title: "Third yr Computer Science",
    description: `I have learned Software Design, Software Testing and Maintenance, Discrete Mathematics, Database Management, etc`,
  },
  {
    id: 3,
    date: "2020-2022",
    title: "ANDROID DEVELOPER",
    description:
      "I have done food order app name food genie as school project with Kotlin and use MVVM architecture , Room database and other third party libraries , TV show project with view biding, room, mvvm.",
  },
  {
    id: 4,
    date: "2022 - 2023",
    title: "MOBILE DEVELOPER | INNOVIX SOLUTIONS",
    description: `-played a member in the development of a feature-rich e-commerce application using react native
          -integrated RESTful APIs to facilitate dynamic data exchange between mobile app and server
          -Leveraged Firebase Analytics to gather insights into user behavior, facilitating data-driven decision-making for continuous app improvements
          -Successfully resolved bugs and implemented enhancements based on user feedback
          Achievement:
          Mobile development projects : Zizawa eCommerce Mobile(Odoo, React Native), OK ecommerce(Odoo, React Native), Innovix HR(Odoo, React Native) which is on both play store and app stores`,
  },
  {
    id: 5,
    date: "2023 - PRESENT",
    title: "MOBILE AND FRONTEND DEVELOPER | FLYMYA",
    description: `-implement state management using Redux, contributing to the Maintainability and scalability of our applications
    -stayed abreast of the latest industry trends and technologies, consistently incorporating new tools and methodologies
    -Designed and built reusable components
    -Collaborated Closely with cross-functional teams and deliver new features Achievement : mobile: Flymya travel app on both app stores and play store , web: flymya website, flymya.com , flymya dashboard`,
  },
];

const Education = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container
      maxWidth="7xl"
      maxHeight={"3xl"}
      overflowX={"auto"}
      p={{ base: 2, sm: 10 }}
      mt={3}
      css={{
        "&::-webkit-scrollbar": {
          marginTop: "8px",
          width: "8px",
          height: "8px",
        },
        "&::-webkit-scrollbar-track": {
          marginTop: "8px",
          width: "2px",
          height: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          marginTop: "8px",
          background: "#121212",
          borderRadius: "12px",
        },
      }}
    >
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ id, title, description, date }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.300", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="md" color={isEvenId ? "primary.800" : "blue.700"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="sm">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("primary.800", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default Education;
