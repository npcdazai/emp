import { Button } from "@chakra-ui/button";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, HStack, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import MyVoucher from "./MyVoucher";
import BuyVoucher from "./BuyVoucher";

import gap from '../../assets/gap.svg'
import optifii_white from '../../assets/optifii_white.svg'
import optifii_purple from '../../assets/optifii_purple.svg'
import bewakoof from '../../assets/bewakoof.svg'
import nyka from '../../assets/nyka.svg'
import hAndm from '../../assets/h&m.svg'
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { LuArrowDownWideNarrow, LuListFilter } from "react-icons/lu";

const VouchersTab = () => {
  const [activeTab, setActiveTab] = useState("My Voucher"); // Set default active tab


  const brandData = [
    {
      brandLogo: gap,
      brandColor: "#002A5F",
      cardWorth: "10,000",
      optifiiLogo: optifii_white,
      patternColor: ""
    },
    {
      brandLogo: bewakoof,
      brandColor: "#FFB819",
      cardWorth: "10,000",
      optifiiLogo: optifii_white,
      patternColor: ""
    },
    {
      brandLogo: nyka,
      brandColor: "#FD2679",
      cardWorth: "10,000",
      optifiiLogo: optifii_white,
      patternColor: ""
    },
    {
      brandLogo: hAndm,
      brandColor: "#ffffff",
      cardWorth: "10,000",
      optifiiLogo: optifii_purple,
      patternColor: ""
    },
    {
      brandLogo: hAndm,
      brandColor: "#ffffff",
      cardWorth: "10,000",
      optifiiLogo: optifii_purple,
      patternColor: ""
    },
    {
      brandLogo: gap,
      brandColor: "#002A5F",
      cardWorth: "10,000",
      optifiiLogo: optifii_white,
      patternColor: ""
    },
    {
      brandLogo: bewakoof,
      brandColor: "#FFB819",
      cardWorth: "10,000",
      optifiiLogo: optifii_white,
      patternColor: ""
    },
    {
      brandLogo: nyka,
      brandColor: "#FD2679",
      cardWorth: "10,000",
      optifiiLogo: optifii_white,
      patternColor: ""
    },
    {
      brandLogo: nyka,
      brandColor: "#FD2679",
      cardWorth: "10,000",
      optifiiLogo: optifii_white,
      patternColor: ""
    },
    {
      brandLogo: hAndm,
      brandColor: "#ffffff",
      cardWorth: "10,000",
      optifiiLogo: optifii_purple,
      patternColor: ""
    },
    {
      brandLogo: gap,
      brandColor: "#002A5F",
      cardWorth: "10,000",
      optifiiLogo: optifii_white,
      patternColor: ""
    },
    {
      brandLogo: bewakoof,
      brandColor: "#FFB819",
      cardWorth: "10,000",
      optifiiLogo: optifii_white,
      patternColor: ""
    },
  ]

  return (
    <VStack w={"100%"} gap={5}>
      <VStack
        justifyContent={"space-around"}
        alignItems={"start"}
        p={4}
        h={150}
        bg={"#fff"}
        w={"100%"}
        rounded={"lg"}
        shadow={"md"}
      >
        <HStack w={"fit-content"} p={2} rounded={"full"} bg={"#EDE5FB"}>
          <Button
            size={"sm"}
            rounded={"full"}
            bg={activeTab === "My Voucher" ? "#fff" : "transparent"}
            color={"#6311CB"}
            shadow={activeTab === "My Voucher" ? "md" : "none"}
            px={6}
            onClick={() => setActiveTab("My Voucher")}
            _hover={{
              bg: "#fff",
              shadow: "md",
            }}
          >
            My Voucher
          </Button>
          <Button
            size={"sm"}
            rounded={"full"}
            bg={activeTab === "Buy Voucher" ? "#fff" : "transparent"}
            color={"#6311CB"}
            shadow={activeTab === "Buy Voucher" ? "md" : "none"}
            px={6}
            onClick={() => setActiveTab("Buy Voucher")}
            _hover={{
              bg: "#fff",
              shadow: "md",
            }}
          >
            Buy Voucher
          </Button>
        </HStack>

        {activeTab === "My Voucher" ? (
          <HStack>
            <HStack>
              <InputGroup rounded={"md"} size={"sm"}>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon color="gray.300" />
                </InputLeftElement>
                <Input
                  rounded={"md"}
                  focusBorderColor="purple.500" // Border color when focused
                  // borderColor='purple.300'        // Default border color
                  placeholder="Type to search"
                />
              </InputGroup>
              <Button
                size={"sm"}
                rightIcon={<ChevronDownIcon />}
                variant={"outline"}
                rounded={"md"}
                fontWeight={500}
                color={"gray.500"}
                px={12}
              >
                Category
              </Button>
              <Button
                size={"sm"}
                rightIcon={<LuArrowDownWideNarrow color="#3725EA"/>}
                variant={"outline"}
                rounded={"md"}
                fontWeight={500}
                color={"gray.500"}
                px={12}
              >
                Date
              </Button>
            </HStack>
          </HStack>
        ) : (
          //   <HStack>
          <InputGroup w={"70%"} rounded={"md"} size={"sm"}>
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.300" />
            </InputLeftElement>
            <Input
              rounded={"md"}
              focusBorderColor="purple.500" // Border color when focused
              // borderColor='purple.300'        // Default border color
              placeholder="Type to search"
            />
          </InputGroup>
          //   </HStack>
        )}
      </VStack>

      {activeTab === "My Voucher" ? <MyVoucher brandData={brandData} /> : <BuyVoucher />}
    </VStack>
  );
};

export default VouchersTab;
