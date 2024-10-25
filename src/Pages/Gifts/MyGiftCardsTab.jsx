import { Button } from "@chakra-ui/button";
import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/layout";
import React, { useContext, useEffect, useState } from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import NormalTable from "../../Components/DataTable/NormalTable";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import { useDisclosure } from "@chakra-ui/hooks";
import { Icon } from "@chakra-ui/icon";
import { MdOutlineRamenDining } from "react-icons/md";
import { Tag } from "@chakra-ui/tag";
import { FaRegFilePdf } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CalendarIcon, PhoneIcon, Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import SwiperSlider from "../../Components/Swiper/SwiperSlider";

const MyGiftCardsTab = () => {
  const { requestsTable } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Simulate loading effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);


  const InternalCard = ({ title1, subTitle1, title2, subbTitle2 }) => {
    return (
      <VStack
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


  // Table headers
  const tableHeadRow = [
    "Transaction Type",
    "Date",
    "Wallet Type",
    "Amount Spent",
  ];
  // Extracted data for table
  const extractedArray = requestsTable.map((item, index) => ({
    "Transaction Type": (
      <Text
        as={"span"}
        display={"flex"}
        fontSize={"xs"}
        gap={2}
        alignItems={"center"}
      >
        <Icon
          as={MdOutlineRamenDining}
          boxSize={8}
          p={1.5}
          bg={index % 2 === 0 ? "#6311cb14" : "#fff"}
          rounded={"full"}
        />
        {item.transactionType}
      </Text>
    ),
    Date: (
      <Text fontSize={"xs"} as={"span"} colorScheme={"#363636"}>
        {item.date}
      </Text>
    ),
    "Wallet Type": (
      <HStack flexWrap={"wrap"}>
        <Tag bg={index % 2 === 0 ? "#F0E6FF" : "#fff"} size="sm">
          <Text
            bgGradient="linear(to-l, #3725EA, #5E0FCD)"
            bgClip="text"
            fontSize={"xs"}
            as={"span"}
            fontWeight={600}
          >
            {item.walletType}
          </Text>
        </Tag>
        <Tag bg={index % 2 === 0 ? "#F0E6FF" : "#fff"} size="sm">
          <Text
            bgGradient="linear(to-l, #3725EA, #5E0FCD)"
            bgClip="text"
            fontSize={"xs"}
            as={"span"}
            fontWeight={600}
          >
            {item.walletType}
          </Text>
        </Tag>
        <Tag bg={index % 2 === 0 ? "#F0E6FF" : "#fff"} size="sm">
          <Text
            bgGradient="linear(to-l, #3725EA, #5E0FCD)"
            bgClip="text"
            fontSize={"xs"}
            as={"span"}
            fontWeight={600}
          >
            {item.walletType}
          </Text>
        </Tag>
      </HStack>
    ),

    Document: (
      <Button
        as="a"
        href={item.document}
        download="dummy-pdf"
        target="_blank"
        color="#363636"
        fontWeight={"500"}
        bg={"transparent"}
        border={"1px solid #CCCCCC"}
        borderRadius="full"
        size="xs"
        gap={"6px"}
        alignItems={"center"}
        _hover={{ bg: "inherit" }}
        fontSize={"xs"}
      >
        <FaRegFilePdf color="#B43331" />
        Receipt.pdf
      </Button>
    ),
    "Amount Spent": item.amountSpent,
    Actions: (
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button
          // _hover={{ color: "gray.800", bg: "gray.100" }}
          transition={"0.5s"}
          size={"sm"}
          bg={"none"}
          p={0}
          color="gray.600"
          fontSize={"xs"}
        >
          <AiOutlineEdit fontSize={"19px"} />
        </Button>
        <Button
          // _hover={{ color: "gray.800", bg: "gray.100" }}
          transition={"0.5s"}
          size={"sm"}
          bg={"none"}
          p={0}
          color="gray.600"
          fontSize={"xs"}
        >
          <RiDeleteBin5Line fontSize={"18px"} />
        </Button>
      </Box>
    ),
  }));

  return (
    <VStack w={'100%'} gap={5}>
      <HStack
        bg={"#fff"}
        w={'100%'}
        rounded={'lg'}
        shadow={'md'} p={6}
        spacing={2}
        flexWrap={"wrap"}
        >
        <Box w={"48%"} position={"relative"}>
          <SwiperSlider />
        </Box>
        <Box w={"50%"}>
          <VStack
            flexGrow={1}
            gap={4}
            rounded={"xl"}
            p={4}
          >
            <InternalCard
              title1={"Kartikey Gautam"}
              subTitle1={"Cardholder Name"}
              title2={"**** **** **** 5678"}
              subbTitle2={"Card Number "}
            />
            <InternalCard
              title1={"₹ 1,00,000"}
              subTitle1={"Card Balance"}
              title2={"₹ 50,000"}
              subbTitle2={"Remaining Balance"}
            />
          </VStack>
        </Box>
      </HStack>





      <Box
        rounded={"xl"}
        py={3}
        display={"flex"}
        flexDirection={"column"}
        bg={"#fff"}
        shadow={"md"}
        w={'100%'}
      >
        <VStack mb={0} px={3} alignItems={"start"} gap={0}>
          <Text fontSize={"lg"} fontWeight={600} color={"#000000"}>
            Transactions
          </Text>
          <HStack w={"100%"} justifyContent={"space-between"}>
            <HStack>
              <InputGroup rounded={"md"} size={"sm"}>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon color="gray.300" />
                </InputLeftElement>
                <Input
                  rounded={"md"}
                  focusBorderColor="purple.500" // Border color when focused
                  // borderColor='purple.300'        // Default border color
                  placeholder="Search"
                />
              </InputGroup>
            </HStack>

            <Button
              fontWeight={500}
              size={"sm"}
              leftIcon={<CalendarIcon color={"purple.800"} />}
              colorScheme="gray"
              color={"gray.700"}
              variant="outline"
              fontSize={"xs"}
            >
              Select Date Range
            </Button>
          </HStack>
        </VStack>
        <Divider />
        <NormalTable
          emptyMessage={`We don't have any Sponsors `}
          tableHeadRow={tableHeadRow}
          data={extractedArray}
          isLoading={isLoading}
        />
      </Box>
    </VStack>
  );
};

export default MyGiftCardsTab;
