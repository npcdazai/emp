import React, { useContext, useEffect, useState } from "react";
import MiniHeader from "../../Components/MiniHeader";
import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/layout";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import RupayCard from "../../Components/PayCards/RupayCard";
import Platinium from "../../Components/PayCards/Platinium";
import PlatiniumGift from "../../Components/PayCards/PlatiniumGift";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { Progress } from "@chakra-ui/progress";
import { Icon } from "@chakra-ui/icon";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";
import BarChart from "../../Components/Doughnut/BarCharts";
import { BiWalletAlt } from "react-icons/bi";
import { MdOutlineRamenDining } from "react-icons/md";
import {
  Button,
  Radio,
  Tag,
  TagLabel,
  useDisclosure,
} from "@chakra-ui/react";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import NormalTable from "../../Components/DataTable/NormalTable";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { PiScrollLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const { reportsHistoryMini } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Set isLoading to true
    setIsLoading(true);

    // Simulate a 3-second delay
    const timer = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after 3 seconds
    }, 500);

    // Cleanup the timer when the component unmounts or when the useEffect re-runs
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once after the component mounts

  // ===============================[ Table Header ]
  const tableHeadRow = [
    "Name",
    "Last Update",
    "Report type",
    "Total Expense",
    "Status",
  ];



  const extractedArray = reportsHistoryMini.map((item, index) => ({
    Name: <HStack>
      <Icon as={PiScrollLight} boxSize={8} p={1.5} bg={index % 2 === 0 ? "#6311cb14" : "#fff"} rounded={'full'} />

      <Box>
        <Text as={'span'} display={'flex'} gap={2} alignItems={'center'} fontSize={'xs'}>
          {item?.name}
        </Text>
        <Text as={'span'} display={'flex'} gap={2} alignItems={'center'} fontSize={'xs'}>
          {item?.reportFor}
        </Text>
      </Box>
    </HStack>
    ,
    "Last Update":
      item?.lastUpdated,
    "Report type": item?.reportType,
    "Total Expense": item?.totalExpense,
    Status: (
      <Tag
        my={1}
        size="sm"
        borderRadius="full"
        color={item?.status === "Approved" ? "green.500" : item?.status === "Rejected" ? "red.500" : "gray.500"}
        border={`1px solid ${item?.status === "Approved" ? "green.500" : item?.status === "Rejected" ? "red.500" : "gray.500"}`}
        bg={item?.status === "Approved" ? "green.100" : item?.status === "Rejected" ? "red.100" : "gray.100"}
        p={1}
        px={3}
      >
        <TagLabel>{item?.status}</TagLabel>
      </Tag>

    ),

  }));

  const transactions = [
    {
      id: 1,
      type: 'Dine In',
      icon: BiWalletAlt,
      date: '22 March 2024 - 01:12 PM',
      amount: '+ $500',
      color: 'green.500',
    },
    {
      id: 2,
      type: 'Takeaway',
      icon: MdOutlineRamenDining, // Replace with appropriate icon if needed
      date: '21 March 2024 - 05:45 PM',
      amount: '+ $200',
      color: 'green.500',
    },
    {
      id: 3,
      type: 'Delivery',
      icon: BiWalletAlt, // Replace with appropriate icon if needed
      date: '20 March 2024 - 11:30 AM',
      amount: '- $50',
      color: 'red.500',
    },
    {
      id: 3,
      type: 'Delivery',
      icon: BiWalletAlt, // Replace with appropriate icon if needed
      date: '20 March 2024 - 11:30 AM',
      amount: '- $50',
      color: 'red.500',
    },
    {
      id: 2,
      type: 'Takeaway',
      icon: MdOutlineRamenDining, // Replace with appropriate icon if needed
      date: '21 March 2024 - 05:45 PM',
      amount: '+ $200',
      color: 'green.500',
    },
    // Add more objects as needed
  ];


  return (
    <Box {...OPACITY_ON_LOAD} p={4} overflowX={"auto"}>
      <MiniHeader
        title={"Welcome Kartikey!"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />

      <Box>
        <HStack justifyContent={"start"} w={"100%"} h={"372px"} gap={4} mb={4}>
          <VStack
            gap={4}
            height={"100%"}
            justifyContent={"space-between"}
            p={0}
            flexGrow={1}
          >
            {/* ==================[ Balance Available ]=============== */}
            <VStack
              w={"100%"}
              p={4}
              bg={"#fff"}
              h={"65%"}
              shadow={"md"}
              rounded={"lg"}
            >
              <VStack
                w={"100%"}
                alignItems={"start"}
                justifyContent={"space-between"}
                h={"100%"}
              >
                <HStack alignSelf={"start"} bg={"#F3F3F9"} p={2} rounded={"md"}>
                  <Text
                    bgGradient="linear(to-l, #3725EA, #5E0FCD)"
                    bgClip="text"
                    as="span"
                    fontSize={"sm"}
                    fontWeight={500}
                  >
                    Balance Available
                  </Text>
                  <Text
                    color={"gray.800"}
                    as="span"
                    fontSize={"sm"}
                    fontWeight={500}
                  >
                    {" "}
                    $ 1,00,000
                  </Text>
                </HStack>

                <HStack w={"100%"} justifyContent={"space-between"}>
                  <VStack alignItems={"start"} gap={0}>
                    <Text
                      fontWeight={500}
                      as={"span"}
                      fontSize={"xs"}
                      color={"gray.500"}
                    >
                      Spend
                    </Text>
                    <Text fontWeight={500} as={"span"} fontSize={"sm"}>
                      $ 50,000
                    </Text>
                  </VStack>

                  <VStack alignItems={"end"} gap={0}>
                    <Text
                      fontWeight={500}
                      as={"span"}
                      fontSize={"xs"}
                      color={"gray.500"}
                    >
                      Money in wallet
                    </Text>
                    <Text fontWeight={500} as={"span"} fontSize={"sm"}>
                      $ 50,000
                    </Text>
                  </VStack>
                </HStack>

                <Progress
                  w={"100%"}
                  sx={{
                    "& > div": {
                      backgroundImage: "linear-gradient(90deg, #6311CB, #a71c71)",
                    },
                  }}
                  rounded={"full"}
                  size="sm"
                  value={80}
                />

                <HStack w={"100%"} justifyContent={"end"}>
                  <Text color={"gray.500"} fontSize={"sm"} fontWeight={500}>
                    80%
                  </Text>
                </HStack>
              </VStack>
            </VStack>

            {/* ==================[ Apply for physical card ]=============== */}
            <HStack
              border={"1px solid #3725EA"}
              bg={"#F8F2FF"}
              h={"35%"}
              w={"100%"}
              shadow={"md"}
              rounded={"lg"}
              p={3}
              justifyContent={"space-evenly"}
            >
              <Icon
                boxSize={12}
                p={2.5}
                backgroundImage="linear-gradient(to left, #5E0FCD, #3725EA)"
                color={"#fff"}
                rounded={"full"}
                as={HiOutlineCreditCard}
              />
              <VStack gap={0} alignItems={"start"} w={290} px={2}>
                <Text as={"span"} fontWeight={500} fontSize={"md"}>
                  Apply for physical card
                </Text>
                <Text as={"span"} color={"gray.500"} fontSize={"xs"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </VStack>

              <Icon
                boxSize={7}
                p={1}
                border={"1px solid #3725EA"}
                color={"#3725EA"}
                rounded={"full"}
                as={ArrowForwardIcon}
              />
            </HStack>
          </VStack>

          {/* ==================[ Pay Cards ]=============== */}
          <Platinium />
          <RupayCard />
          <PlatiniumGift />
        </HStack>
      </Box>

      <HStack alignItems={"start"} spacing={4}>

        <Box flex={1} rounded={"md"} mb={4} p={4} bg={"#fff"}>
          <HStack justifyContent={"space-between"}>
            <Text as={"span"} fontSize={"md"} fontWeight={600}>
              Wallet history
            </Text>
            <HStack>
              <Select placeholder="Monthly" size={"sm"} rounded={"md"}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
          </HStack>
          <BarChart />
        </Box>

        <Box w={"35%"} h={400} rounded={"md"} mb={4} p={4} bg={"#fff"}>
          <HStack justifyContent={"space-between"}>
            <Text as={"span"} fontSize={"md"} fontWeight={600}>
              Wallet history
            </Text>
            <Text as={"span"} fontSize={"sm"} fontWeight={500} color={"#818181"}>
              See All
            </Text>
          </HStack>
          <Box>
            <VStack pt={3}>
              {transactions?.map(({ id, type, icon, date, amount, color }) => <HStack id={id} bg={''} mb={2} alignItems={'center'} w={'100%'} justifyContent={'space-between'}>
                <HStack  >
                  <Icon color={'gray.800'} boxSize={10} rounded={'full'} p={2} bg={'#F6F6F6'} as={icon} />

                  <VStack alignItems={'start'} gap={0}>
                    <Text as={'span'} fontWeight={500} fontSize={'sm'} >{type}</Text>
                    <Text as={'span'} fontWeight={500} color={'gray.500'} fontSize={'xs'} >{date}</Text>
                  </VStack>
                </HStack>

                <Text me={2} fontSize={'sm'} fontWeight={500} as={'span'} color={color}>{amount}</Text>

              </HStack>)}
            </VStack>
          </Box>
        </Box>

      </HStack>

      <Box
        rounded={"md"}
        p={4}
        bg={"#fff"}
        shadow={"md"}
      >
        <HStack justifyContent={"space-between"} mb={4}>
          <Text fontSize={"lg"} fontWeight={600} mb={0}>
            Reports
          </Text>
          <Text
            onClick={() => navigate("/reports/history")}
            as={"span"} fontSize={"sm"} fontWeight={500} color={"#818181"} cursor={"pointer"}>
            See All
          </Text>
        </HStack>
        <NormalTable
          emptyMessage={`We don't have any Sponers `}
          tableHeadRow={tableHeadRow}
          data={extractedArray}
          isLoading={isLoading}
        />
      </Box>

    </Box>
  );
};

export default Home;
