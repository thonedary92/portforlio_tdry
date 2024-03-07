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
  Tag,
} from "@chakra-ui/react";

const milestones = [
  {
    id: 1,
    date: "2021",
    title: "Food Genie",
    description: `An App we built to help food ordering and describe recipes. This is the result of team-bonding.In this App, we use Kotlin, Xml, Room, Couroutine, RestApi to built the app. Backend with Php `,
    links: "https://ibb.co/f81ZSvc",
    subtitle: ["Kotlin", "Xml", "Mvvm"],
  },
  {
    id: 2,
    date: "2022",
    title: "Innovix HR app",
    description: `HR Solution to fulfill the needs of today’s businesses that are moving towards a transformation from Traditional to Digital HR. 
    Innovix HR App gives easy access to some of the main features such as ..  
    * Employee Check in and Check out
    * Attendance Overview
    * Leave Request & Approval
    * Overtime Request & Approval
    * Payslip View `,
    links: `https://play.google.com/store/apps/details?id=com.innovixhr.hrmobile&hl=en-SG`,
    subtitle: [
      "React Native",
      "RestApi",
      "Redux Toolkit",
      "Local Storage",
      "Firebase Analytics",
      "Google Maps",
    ],
  },
  {
    id: 3,
    date: "2022",
    title: "Luxura Ecommerce App",
    description:
      "LuxuraTrade, the ultimate ecommerce app. With LuxuraTrade, you can enjoy a seamless shopping experience and explore a wide range of products. Earn valuable loyalty points every time you make a purchase, and watch your points grow as you shop. Plus, with our loyalty program, you can redeem your points for exciting rewards and gifts.",
    links: `https://play.google.com/store/apps/details?id=com.luxura_native&hl=en-SG`,
    subtitle: [
      "React Native",
      "RestApi",
      "Redux Toolkit",
      "Local Storage",
      "Notification",
    ],
  },
  {
    id: 4,
    date: "2023",
    title: "Xenon Reward App",
    description: `This App help XENON member to collect points. Member can see balance points and point usage history.Member's purchase history can be seen together with invoice number and date.
      XENON want to share products and service that member can get and access.
      Member will get notified for promotion campaigns
      Member have to go to XENON shop to claim point redeem.`,
    links: `https://play.google.com/store/apps/details?id=com.xenonmobile&hl=en-SG`,
    subtitle: [
      "React Native",
      "RestApi",
      "Redux Toolkit",
      "Local Storage",
      "Notification",
    ],
  },
  {
    id: 5,
    date: "2023-2024",
    title: "Flymya Website/ Dashboard",
    description: `From the hotspots to the remote, FlyMya gives travelers the choice of flights, tours and transport rental to over 20+ destinations. And after just few clicks of the mouse, within minutes you have yourself what we hope will be the trip of a lifetime.`,
    links: `https://flymya.com/`,
    subtitle: [
      "React js",
      "Graphql",
      "Redux Toolkit",
      "Local Storage",
      "Notification",
      "Firebase Analytics",
      "Jenskin",
    ],
  },
  {
    id: 6,
    date: "2023-2024",
    title: "Flymya App",
    description: `From the hotspots to the remote, FlyMya gives travelers the choice of flights, tours and transport rental to over 20+ destinations. And after just few clicks of the mouse, within minutes you have yourself what we hope will be the trip of a lifetime.`,
    links: `https://apps.apple.com/us/app/flymya/id1241868739/`,
    subtitle: [
      "React Native",
      "Graphql",
      "Redux Toolkit",
      "Local Storage",
      "Notification",
      "Firebase Analytics",
      "Codepush",
    ],
  },
  {
    id: 7,
    date: "2023-2024",
    title: "Notion Clone",
    description: `Notion Cloned website with next js, github authentication with clark for daily management`,
    links: ``,
    subtitle: ["Next js", "Redux Toolkit", "Local Storage", "Clark"],
  },
];

const Projects = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container
      maxWidth="7xl"
      maxHeight={"3xl"}
      overflowX={"auto"}
      p={{ base: 2, sm: 10 }}
      my={2}
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

const Card = ({ id, title, description, date, links, subtitle }) => {
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
      <Box
        style={links !== "" ? { cursor: "pointer" } : {}}
        onClick={() => {
          links !== "" && window.open(links);
        }}
      >
        <Text fontSize="md" color={isEvenId ? "primary.800" : "blue.700"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1
            fontSize="xl"
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
            style={links !== "" ? { cursor: "pointer" } : {}}
            onClick={() => {
              links !== "" && window.open(links);
            }}
          >
            {title}
          </chakra.h1>
          <Text fontSize="sm">{description}</Text>
        </VStack>

        <HStack style={{ display: "flex", flexWrap: "wrap" }}>
          {subtitle.map((x) => (
            <Tag variant={"subtle"} style={{ padding: 5, margin: 5 }}>
              {x}
            </Tag>
          ))}
        </HStack>
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

export default Projects;
