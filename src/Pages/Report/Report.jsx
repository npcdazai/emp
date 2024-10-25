import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  Tag,
  TagLabel,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import MiniHeader from "../../Components/MiniHeader";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import NormalTable from "../../Components/DataTable/NormalTable";
import { CalendarIcon, EmailIcon, SearchIcon, ViewIcon } from "@chakra-ui/icons";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { MdNotificationsNone, MdOutlineHeadsetMic } from "react-icons/md";
import { RiDeleteBin5Line, RiWallet3Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { PiReceipt, PiScrollLight } from "react-icons/pi";
import AddReportModal from "../Requests/AddReportModal";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

const Report = () => {
  const { reportsHistory } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchTerm, setSearchTerm] = useState("");


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
    "Actions",
  ];

  // const extractedArray = reportsHistory.map((item)=>({ }))

  const extractedArray = reportsHistory.map((item, index) => ({
    Name: <Radio colorScheme='purple' value='1'>
      <Text as={'span'} display={'flex'} gap={2} alignItems={'center'} fontSize={'xs'}>

        <Icon as={PiScrollLight} boxSize={8} p={1.5} bg={index % 2 === 0 ? "#6311cb14" : "#fff"} rounded={'full'} />{item?.name}</Text>
    </Radio>
    ,
    "Last Update":
      item?.lastUpdated,
    "Report type": item?.reportType,
    "Total Expense": item?.totalExpense,
    Status: (
      <Tag
        my={1}
        size={"sm"}
        borderRadius="full"
        colorScheme={
          item?.status === "Approved"
            ? "green"
            : item?.status === "Fully Reimbursed"
              ? "purple"
              : item?.status === "Disapproved"
                ? "red"
                : item?.status === "Saved"
                  ? "yellow"
                  : item?.status === "Partially Reimbursed"
                    ? "orange"
                    : "gray" // default color scheme if status doesn't match any condition
        }
        border={`1px solid ${item?.status === "Approved"
          ? "green"
          : item?.status === "Fully Reimbursed"
            ? "purple"
            : item?.status === "Disapproved"
              ? "red"
              : item?.status === "Saved"
                ? "orange"
                : item?.status === "Partially Reimbursed"
                  ? "orange"
                  : "gray" // default border color if status doesn't match any condition
          }`}
        p={1}
        px={3}
      >
        <TagLabel>{item?.status}</TagLabel>
      </Tag>
    ),
    Actions: (
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button _hover={{ color: "gray.800", bg: "gray.100" }} transition={'0.5s'} size={"sm"} bg={"none"} p={0} color="gray.600">
          <FaRegEye fontSize={"18px"} />
        </Button>
        <Button _hover={{ color: "gray.800", bg: "gray.100" }} transition={'0.5s'} size={"sm"} bg={"none"} p={0} color="gray.600">
          <AiOutlineEdit fontSize={"19px"} />
        </Button>
        <Button _hover={{ color: "gray.800", bg: "gray.100" }} transition={'0.5s'} size={"sm"} bg={"none"} p={0} color="gray.600">
          <RiDeleteBin5Line fontSize={"18px"} />
        </Button>
      </Box>
    ),
  }));

  return (
    <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>
      <MiniHeader
        title={"Reports History"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        backButton={true}
      />

      <Box
        rounded={"xl"}
        py={3}
        // pb={0}
        display={"flex"}
        flexDirection={"column"}
        bg={"#fff"}
        shadow={"md"}
        minH={"100%"}
      >
        <VStack mb={0} px={3} alignItems={"start"} gap={0}>
          <Text fontSize={"lg"} fontWeight={600}>
            Reports
          </Text>
          <HStack w={"100%"} justifyContent={"space-between"}>


            <HStack>
              <InputGroup width={300} size="sm" >
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="search"
                  placeholder="Type to search..."
                  rounded="md"
                  focusBorderColor="#3725EA"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
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
            <PrimaryButton title={'Add to Report'} onClick={onOpen} />
          </HStack>
        </VStack>
        <Divider />
        <NormalTable
          emptyMessage={`We don't have any Sponers `}
          tableHeadRow={tableHeadRow}
          data={extractedArray}
          isLoading={isLoading}
        />
      </Box>

      <AddReportModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Report;
