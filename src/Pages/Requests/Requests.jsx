import React, { useContext, useState, useEffect } from "react";
import {
  Box, Tabs, Tab, TabList, TabPanels, TabPanel,
  Button,
  Divider,
  Icon,
  Tag,
  TagLabel,
  Text,
  VStack,
  HStack,
  Checkbox,
  useDisclosure
} from "@chakra-ui/react";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import Reimbursement from "./Reimbursement";
import AdvanceExpense from "./AdvanceExpense";
import { MdOutlineRamenDining } from "react-icons/md";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import MiniHeader from "../../Components/MiniHeader";
import { FaRegFilePdf } from "react-icons/fa";
import AddReportModal from "./AddReportModal";

const Requests = () => {
  const { requestsTable } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Simulate loading effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Table headers
  const tableHeadRow = [
    "Transaction Type",
    "Date",
    "Wallet Type",
    "Document",
    "Amount Spent",
    "Actions",
  ];

  // Extracted data for table
  const extractedArray = requestsTable.map((item, index) => ({
    "Transaction Type": (
      <Checkbox colorScheme="purple">
        <Text as={"span"} display={"flex"} fontSize={'xs'} gap={2} alignItems={"center"}>
          <Icon
            as={MdOutlineRamenDining}
            boxSize={8}
            p={1.5}
            bg={index % 2 === 0 ? "#6311cb14" : "#fff"}
            rounded={"full"}
          />
          {item.transactionType}
        </Text>
      </Checkbox>
    ),
    "Date": (
      <Text fontSize={'xs'} as={"span"} colorScheme={"#363636"} >
        {item.date}
      </Text>
    ),
    "Wallet Type": (


      <Tag bg={index % 2 === 0 ? "#F0E6FF" : "#fff"}
        size="sm"><Text
          bgGradient="linear(to-l, #3725EA, #5E0FCD)"
          bgClip="text"
          fontSize={"xs"}
          as={"span"}
          fontWeight={600}
        >{item.walletType}</Text></Tag>
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
        fontSize={'xs'}
      >
        <FaRegFilePdf color="#B43331" />
        Receipt.pdf
      </Button>
    ),
    "Amount Spent": item.amountSpent
    ,
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
          fontSize={'xs'}
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
          fontSize={'xs'}
        >
          <RiDeleteBin5Line fontSize={"18px"} />
        </Button>
      </Box>
    ),
  }));

  return (
    <Box {...OPACITY_ON_LOAD} p={4} overflowX={"auto"}>
      {/* Mini header component */}
      <MiniHeader
        title={"My Requests"}
        subTitle={"Manage your expense and reimbursement requests."}
        backButton={true}
      />

      {/* Tabs for switching between AdvanceExpense and Reimbursement */}
      <Box color={"black"}>
        <Tabs variant="unstyled">
          <TabList bg={'#FFFFFF'} borderRadius={'md'} boxShadow={'sm'} h={12}>
            <Tab
              _selected={{ color: "#fff", bg: "#3725EA" }}
              py={3}
              px={16}
              borderLeftRadius={'md'}
              fontWeight={'600'}
              fontSize={'sm'}
            >
              Advance Expense
            </Tab>
            <Tab
              _selected={{ color: "#fff", bg: "#3725EA" }}
              py={3}
              px={16}
              fontWeight={'600'}
              fontSize={'sm'}
            >
              Reimbursement
            </Tab>
          </TabList>

          {/* Tab panels */}
          <TabPanels>
            <TabPanel py={4} pl={0} pr={0}>
              <AdvanceExpense
                tableHeadRow={tableHeadRow}
                extractedArray={extractedArray}
                isLoading={isLoading}
                onOpen={onOpen}
              />
            </TabPanel>
            <TabPanel py={4} pl={0} pr={0}>
              <Reimbursement
                tableHeadRow={tableHeadRow}
                extractedArray={extractedArray}
                isLoading={isLoading}
                onOpen={onOpen}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <AddReportModal isOpen={isOpen} onClose={onClose} />

    </Box>
  );
};

export default Requests;
