import React, { useState } from 'react'
import { OPACITY_ON_LOAD } from '../../Layout/animations'
import MiniHeader from '../../Components/MiniHeader'
import {
    HStack,
    VStack,
    Text,
    Box,
    Image,
} from "@chakra-ui/react";
import gap from "../../assets/gap.svg";
import optifii_white from "../../assets/optifii_white.svg";
const SelectDenominationComponent = ({children}) => {

    return (
        <Box {...OPACITY_ON_LOAD} p={4} overflowX={"auto"}>
            <MiniHeader
                title={"Buy Vouchers"}
                subTitle={"Manage your expense and reimbursement requests."}
                backButton={true}
            />
            <Box
                rounded={"xl"}
                p={8}
                bg={"#fff"}
                shadow={"md"}
                minH={"100%"}
            >
                <Text
                    fontSize={"md"}
                    fontWeight={"600"}
                    mb={2}
                >
                    Gap Voucher
                </Text>
                <HStack spacing={8} alignItems={"start"}>
                    <Box pt={2} w={"35%"} gap={6} justifyContent={'start'} minH={"80vh"}>
                        <Box
                            cursor={"grab"}
                            overflow={"hidden"}
                            shadow={"md"}
                            w={{ base: "100%" }}
                            h={160}
                            bg={"#002A5F"}
                            rounded={20}
                        >
                            <HStack
                                pb={1}
                                justifyContent={"space-between"}
                                pt={3}
                                ps={3}
                                pe={3}
                            >
                                <Image src={gap} />
                            </HStack>
                            <VStack color={gap !== gap ? "#E2231A" : "#fff"} gap={1}>
                                <Text as={"span"} fontSize={"md"}>
                                    Card Worth
                                </Text>
                                <Text as={"span"} fontWeight={700} fontSize={"md"}>
                                    $ 10000
                                </Text>
                                <HStack
                                    w={"100%"}
                                    pb={4}
                                    justifyContent={"end"}
                                    pt={3}
                                    ps={3}
                                    pe={3}
                                >
                                    <Image src={optifii_white} />
                                </HStack>
                            </VStack>
                        </Box>
                        <VStack w={"100%"} gap={0} mt={3}>
                            <Text
                                ps={3}
                                w={"100%"}
                                as={"span"}
                                fontSize={"md"}
                                fontWeight={600}
                            >
                                How to use
                            </Text>

                            <ul
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 0,
                                }}
                            >
                                <li
                                    style={{
                                        color: "#737373",
                                    }}
                                >
                                    <Text fontSize={"xs"} fontWeight={500} mb={0}>
                                        How to use Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua
                                    </Text>
                                </li>
                                <li
                                    style={{
                                        color: "#737373",
                                    }}
                                >
                                    <Text fontSize={"xs"} fontWeight={500} mb={1}>
                                        How to use Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua
                                    </Text>
                                </li>
                            </ul>
                        </VStack>

                        <VStack w={"100%"} gap={0}>
                            <Text
                                ps={3}
                                w={"100%"}
                                as={"span"}
                                fontSize={"md"}
                                fontWeight={600}
                            >
                                Terms & condition
                            </Text>

                            <ul>
                                <li
                                    style={{
                                        color: "#737373",
                                    }}
                                >
                                    <Text fontSize={"xs"} fontWeight={500} mb={0}>
                                        How to use Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua
                                    </Text>
                                </li>
                                <li
                                    style={{
                                        color: "#737373",
                                    }}
                                >
                                    <Text fontSize={"xs"} fontWeight={500}>
                                        How to use Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua
                                    </Text>
                                </li>
                            </ul>
                        </VStack>

                    </Box>

                    {/* =======================[ Select denomination ]=========== */}
                    {children}
                </HStack>
            </Box>
        </Box>
    )
}

export default SelectDenominationComponent