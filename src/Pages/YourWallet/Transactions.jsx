import React from 'react';
import { Box, VStack, Text, HStack, Button, Divider } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import NormalTable from "../../Components/DataTable/NormalTable";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

const Transactions = ({ tableHeadRow, extractedArray, isLoading, onOpen }) => {
    return (
        <Box
            rounded={"xl"}
            py={3}
            display={"flex"}
            flexDirection={"column"}
            bg={"#fff"}
            shadow={"md"}
            minH={"100%"}
        >
            <VStack mb={0} px={3} alignItems={"start"} gap={0}>
                <Text fontSize={"lg"} fontWeight={600} color={'#000000'}>
                    Transactions
                </Text>
                <HStack w={"100%"} justifyContent={"space-between"}>
                    <HStack>
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
                        <Button
                            as={"a"}
                            fontWeight={500}
                            size={"sm"}
                            color="#667085"
                            fontSize={"xs"}
                            bg={"transparent"}
                            _hover={"none"}
                            cursor={"pointer"}
                            textDecoration={"underline"}
                        >
                            Select all
                        </Button>
                    </HStack>
                    <PrimaryButton onClick={onOpen} title={"Add to Report"} />
                </HStack>
            </VStack>
            <Divider />
            <NormalTable
                emptyMessage={`We don't have any transactions`}
                tableHeadRow={tableHeadRow}
                data={extractedArray}
                isLoading={isLoading}
            />
        </Box>
    );
};

export default Transactions;
