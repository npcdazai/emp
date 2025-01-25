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
import AddExpenseModal from "../Expenses/AddExpenseModal";
import { FaCirclePause } from "react-icons/fa6";
import { LuInfo } from "react-icons/lu";
import Food from "../Expenses/Food";

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
          $50,000
        </Text>

        <Text as={"span"} fontSize={"xs"} fontWeight={500} color={"gray.600"}>
          Available spend limit
        </Text>
      </VStack>

      <VStack gap={0} alignItems={"start"} w={"100%"} p={2}>
        <Text as={"span"} fontSize={"md"} fontWeight={600}>
          1234 5678 1234 5678
        </Text>

        <Text as={"span"} fontSize={"xs"} fontWeight={500} color={"gray.600"}>
          Account Number
        </Text>
      </VStack>
    </VStack>
  );
};

const Benefit = () => {
  const tiltRef = useRef(null);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
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

  const tabData = [
    {
      title: "Sales Call",
      emoji: "☎️",
      panel: <Food />,
    },
    {
      title: "Client Visits",
      emoji: "👩🏼‍💻",
      panel: <Food />,
    },
  ];

  const miniCardData = [
    {
      title: "Available spend limit ",
      value: "$ 50,000",
    },
    {
      title: "Account Number",
      value: "**** **** **** 5678",
    },
    {
      title: "Account name",
      value: "Yami Gautam",
    },
    {
      title: "Validity",
      value: "01/12",
    },
  ];
  return (
    <Box as={"span"} {...OPACITY_ON_LOAD} p={4} pb={3} overflowX={"scroll"}>
      <MiniHeader
        title={"Manage Benefits"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />

      <HStack justifyContent={"start"} w={"100%"} h={"372px"} gap={4} mb={4}>
        <VStack
          ref={tiltRef} // Attach tilt to this ref
          // bg="linear-gradient(230deg, #6311CB, #481566, #851d70, #a71c71, #df2274)"
          bg="linear-gradient(230deg, purple, #390A74, #390A74, #390A74, #390A74)"
          alignItems={"start"}
          justifyContent={"space-between"}
          height={"100%"}
          w={240}
          h={"372px"}
          rounded={"xl"}
          p={4}
          boxShadow={"md"}
          position={"relative"}
        >
          <Box
            width={"100%"}
            cursor={"grab"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Image w={20} src={logo_card} />
            <Image w={24} src={TRANSCORP_LOGO} me={0.5} />
          </Box>

          <VStack
            width={"100%"}
            display={"flex"}
            alignItems={"start"}
            justifyContent={"space-between"}
          >
            <Text color={"#fff"} fontSize={"sm"}>
              1234 5678 1234 5678
            </Text>
            <Button
              size={"sm"}
              rounded={"full"}
              bg={"#ffffff30"}
              fontSize={"sm"}
              px={6}
              border={"1px solid #fff"}
              _hover={{ opacity: 0.8 }}
              _active={{ opacity: 1 }}
              color={"#fff"}
              fontWeight={500}
            >
              Tap to view details
            </Button>
          </VStack>

          <Box width={"100%"} display={"flex"} justifyContent={"end"}>
            {/* <Image w={32} src={logo_card} /> */}
            <Image w={24} src={RuPay} me={0.5} />
          </Box>

          <Text
            position={"absolute"}
            top={24}
            right={-6}
            transform="rotate(270deg)"
            fontSize={"xs"}
            color={"#9E9E9E"}
          >
            Valid in india
          </Text>
        </VStack>

        <VStack
          bg={"#fff"}
          boxShadow={"md"}
          height={"100%"}
          flexGrow={1}
          gap={4}
          rounded={"xl"}
          p={4}
        >
          <VStack
            h={"100%"}
            gap={0}
            w={"100%"}
            rounded={"lg"}
            justifyContent={"center"}
            bg={"gray.50"}
            p={6}
          >{miniCardData?.map(({ title, value }, index) => (
            <HStack
              key={index}
              borderBottom={index === miniCardData.length - 1 ? "none" : "1px solid #ccc"}
              gap={0}
              justifyContent={"start"}
              alignItems={"center"}
              h={"25%"}
              w={"100%"}
              p={2}
            >
              <Text
                w={"47%"}
                color={"gray.500"}
                as={"span"}
                fontSize={"sm"}
                fontWeight={600}
              >
                {title}
              </Text>
              <Text
                w={"6%"}
                as={"span"}
                color={"gray.500"}
                fontSize={"lg"}
                fontWeight={600}
              >
                :
              </Text>
          
              <Text
                w={"47%"}
                color={"gray.900"}
                as={"span"}
                fontSize={"sm"}
                fontWeight={600}
              >
                {value}
              </Text>
            </HStack>
          ))}
          </VStack>
        </VStack>

        <VStack height={"100%"} w={"30%"} rounded={"xl"} gap={3}>
          <Box
            onClick={onOpen}
            cursor={"pointer"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"start"}
            position={"relative"}
            // border={"1px solid purple"}
            bg={"#FFF"}
            boxShadow={"md"}
            rounded={"xl"}
            height={"100%"}
            w={"100%"}
            p={4}
            gap={3}
            overflow={"scroll"}
          >
            <Text
              bgGradient="linear(to-l, #3725EA, #5E0FCD)"
              bgClip="text"
              fontSize={"md"}
              as={"span"}
              fontWeight={600}
            >
              About Benefits
            </Text>

            <Text
              fontSize={"xs"}
              as={"span"}
              fontWeight={500}
              color={"gray.600"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat
              massa, malesuada id ligula vel, scelerisque efficitur sapien.
              Aliquam erat volutpat. Aliquam suscipit eros at augue sollicitudin
              sagittis. Mauris varius erat ac quam sagittis, nec dignissim
              sapien commodo. Nam a lacinia tortor.  Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit
              amet,consectetur adipiscing elit. Vestibulum erat massa, malesuada
              id ligula vel, scelerisque efficitur sapien. Aliquam erat
              volutpat. Aliquam suscipit eros at augue sollicitudin sagittis.
              Mauris varius erat ac quam sagittis.Aliquam erat
              volutpat. Aliquam suscipit eros at augue sollicitudin sagittis.
              Mauris varius erat ac quam sagittis.{" "}
            </Text>
          </Box>
        </VStack>
      </HStack>

      <VStack w={"100%"} bg={"#fff"} rounded={"lg"} boxShadow={"lg"} h={"auto"}>
        <Text
          w={"100%"}
          fontSize={"lg"}
          fontWeight={600}
          p={4}
          as={"span"}
          borderBottom={"1px solid #ccc"}
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
          <VStack alignItems={"end"}>
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
            <Text display={"flex"} gap={1} alignItems={"star"} fontSize={"xs"}>
              How to Use? - Where I can use the card? <LuInfo />
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Benefit;
