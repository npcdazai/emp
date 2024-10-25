import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
// import MiniHeader from "../Components/MiniHeader";
import logo_card from "../../assets/logo_card.svg";
import TRANSCORP_LOGO from "../../assets/TRANSCORP_LOGO.svg";
import RuPay from "../../assets/rupayImg.png";
import MiniHeader from "../../Components/MiniHeader";
import VanillaTilt from "vanilla-tilt";
import wallet from "../../assets/wallet.svg";
import { PiPause, PiReceiptBold } from "react-icons/pi";
import recipt_graddient from "../../assets/recipt_graddient.svg";
import recipt from "../../assets/recipt.svg";
import { ArrowForwardIcon, CalendarIcon } from "@chakra-ui/icons";
import grapgGradient from "../../assets/grapgGradient.svg";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { useNavigate } from "react-router";
import AddExpenseModal from "./AddExpenseModal";
import Food from "./Food";
import { FaCirclePause } from "react-icons/fa6";
import { LuInfo } from "react-icons/lu";
import RupayCard from "../../Components/PayCards/RupayCard";

const InternalCard = ({ title1, subTitle1, title2, subbTitle2 }) => {
  return (
    <VStack
      h={"50%"}
      gap={0}
      w={"100%"}
      rounded={"lg"}
      justifyContent={"space-evenly"}
      bg={"gray.50"}
    >
      <VStack gap={0} alignItems={"start"} w={"100%"} p={2}>
        <Text as={"span"} fontSize={"md"} fontWeight={600}>
          {title1}
        </Text>

        <Text as={"span"} fontSize={"xs"} fontWeight={500} color={"gray.600"}>
          {subTitle1}
        </Text>
      </VStack>

      <VStack gap={0} alignItems={"start"} w={"100%"} p={2}>
        <Text as={"span"} fontSize={"md"} fontWeight={600}>
          {title2}
        </Text>

        <Text as={"span"} fontSize={"xs"} fontWeight={500} color={"gray.600"}>
          {subbTitle2}
        </Text>
      </VStack>
    </VStack>
  );
};

const Expenses = () => {
  const tiltRef = useRef(null);  useEffect(() => {
    const node = tiltRef.current;
    if (node) {
      VanillaTilt.init(node, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
    return () => {
      if (node && node.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    };
  }, []);

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const tabData = [
    {
      title: "Food",
      emoji: "🍔",
      panel: <Food />,
    },
    {
      title: "Fuel",
      emoji: "⛽️",
      panel: <Food />,
    },
    {
      title: "Gifts",
      emoji: "🎁",
      panel: <Food />,
    },
    {
      title: "Telecom",
      emoji: "🗼",
      panel: <Food />,
    },
    {
      title: "Book & Periodicals",
      emoji: "📚",
      panel: <Food />,
    },
    {
      title: "Learning & Developemt",
      emoji: "📖",
      panel: <Food />,
    },
    {
      title: "Gadgets & Equipments",
      emoji: "🎧",
      panel: <Food />,
    },
  ];


  return (
    <Box as={"span"} {...OPACITY_ON_LOAD} p={4} pb={3} overflowX={"scroll"}>
      <MiniHeader
        title={"Manage Expenses"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />

      <HStack justifyContent={"start"} w={"100%"} h={"372px"} gap={4} mb={4}>
        
        <RupayCard/>

        <VStack
          bg={"#fff"}
          boxShadow={"md"}
          height={"100%"}
          flexGrow={1}
          gap={4}
          rounded={"xl"}
          p={4}
        >
          <InternalCard
            title1={"$50,000"}
            subTitle1={"Available spend limit"}
            title2={"1234 5678 1234 5678"}
            subbTitle2={"Account Number"}
          />
          <InternalCard
            title1={"Kartikey Gautam"}
            subTitle1={"Account name"}
            title2={"01/12"}
            subbTitle2={"Validity"}
          />
        </VStack>

        <VStack height={"100%"} w={"30%"} rounded={"xl"} gap={3}>
          <Box
            onClick={onOpen}
            cursor={"pointer"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            position={"relative"}
            border={"1px solid purple"}
            bg={"#DBD8FF"}
            boxShadow={"md"}
            rounded={"xl"}
            height={"50%"}
            w={"100%"}
            p={4}
          >
            <Image position={"absolute"} bottom={0} right={8} src={wallet} />
            <Box
              p={3}
              w={49}
              h={49}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              rounded={"full"}
              bg={"#fff"}
              as="span"
            >
              <Image src={recipt_graddient} />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text as={"span"} fontWeight={500} fontSize={"lg"}>
                Add Expense
              </Text>

              <Icon
                zIndex={1}
                as={ArrowForwardIcon}
                boxSize={10}
                bgGradient="linear(to-b, #6211CB, #C33FAD)"
                color={"#fff"}
                p={3}
                rounded={"full"}
              />
            </Box>
          </Box>

          <Box
            onClick={() => navigate("/requests")}
            cursor={"pointer"}
            display={"flex"}
            bg={"#fff"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            position={"relative"}
            border={"1px solid purple"}
            boxShadow={"md"}
            rounded={"xl"}
            height={"50%"}
            w={"100%"}
            p={4}
          >
            <Image
              opacity={0.3}
              position={"absolute"}
              top={0}
              right={8}
              src={recipt}
            />
            <Box
              p={3}
              w={49}
              h={49}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              rounded={"full"}
              bg={"#F7F7FF"}
              as="span"
            >
              <Image src={grapgGradient} />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text as={"span"} fontWeight={500} fontSize={"lg"}>
                Add Reports
              </Text>

              <Icon
                zIndex={1}
                as={ArrowForwardIcon}
                boxSize={10}
                bgGradient="linear(to-b, #6211CB, #C33FAD)"
                color={"#fff"}
                p={3}
                rounded={"full"}
              />
            </Box>
          </Box>
        </VStack>
      </HStack>

      <VStack w={"100%"} bg={"#fff"} rounded={"lg"} boxShadow={"lg"} h={"auto"}>
        <Text
          w={"100%"}
          fontSize={"lg"}
          fontWeight={600}
          p={4}
          borderBottom={"1px solid #ccc"}
          as={'span'}
        >
          My Wallets
        </Text>

        <Tabs p={4} pb={0} w={"100%"} display={"flex"} variant="unstyled">
          <TabList
            bg={"#FFFFFF"}
            display={"flex"}
            flexDirection={"column"}
            w={"30%"}
            gap={3}
          >
            {tabData?.map(({ title, emoji }, index) => (
              <Tab
                key={index}
                _selected={{ color: "#fff", bg: "#3725EA" }}
                // _hover={{ color: "#fff", bg: "#ddd" }}
                color="black"
                bg="#F3F3F9"
                rounded={"md"}
                fontWeight={"600"}
                fontSize={"sm"}
                boxShadow={"sm"}
                display={"flex"}
                justifyContent={"start"}
              >
                <Text as={"span"} me={3} fontSize={"lg"}>
                  {emoji}
                </Text>{" "}
                {title}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {tabData?.map(({ panel }, index) => (
              <TabPanel p={0} key={index}>
                {panel}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>

        <HStack pe={4} w={"100%"} justifyContent={"end"}>
          <VStack alignItems={'end'}>
            <Button
              cursor={"pointer"}
              fontWeight={500}
              size={"xs"}
              leftIcon={<FaCirclePause color={"purple.800"} />}
              colorScheme="gray"
              color={"gray.700"}
              variant="outline"
              fontSize={"xs"}
            >
              Pause Wallet
            </Button>
            <Text display={'flex'} gap={1} alignItems={'center'} fontSize={'xs'}>How to Use? - Where I can use the card? <LuInfo/></Text>
          </VStack>
        </HStack>
      </VStack>

      <AddExpenseModal onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Expenses;
