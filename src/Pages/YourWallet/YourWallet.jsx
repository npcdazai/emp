import React, { useState, useEffect, useContext } from 'react';
import { Box, Divider, Text, Icon, useDisclosure } from '@chakra-ui/react';
import MiniHeader from '../../Components/MiniHeader';
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import { TbSquareRoundedPercentage } from "react-icons/tb";
import Transactions from './Transactions';

const YourWallet = () => {
    const { walletTable } = useContext(GlobalStateContext); // Use walletTable instead of requestsTable
    const [isLoading, setIsLoading] = useState(false);
    const { onOpen } = useDisclosure();

    // Simulate loading effect
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    // Table headers
    const tableHeadRow = ["TransactionType", "Date", "Amount"];

    // Extracted data for table
    const extractedArray = walletTable.map((item, index) => ({
        "TransactionType": (
            <Text as={"span"} display={"flex"} fontSize={'xs'} gap={2} alignItems={"center"}>
                <Icon
                    as={TbSquareRoundedPercentage}
                    boxSize={8}
                    p={1.5}
                    bg={index % 2 === 0 ? "#6311cb14" : "#fff"}
                    rounded={"full"}
                />
                {item.transactionType}
            </Text>
        ),
        "Date": (
            <Text fontSize={'xs'} as={"span"} colorScheme={"#363636"}>
                {item.date}
            </Text>
        ),
        "Amount": (
            <Text fontSize={'xs'} fontWeight={600}>
                {item.amountSpent}
            </Text>
        )
    }));

    return (
        <Box p={4} overflowX={"scroll"}>
            <MiniHeader title={"Your Wallet"} 
            subTitle={"Overview of your wallet transactions"}
            backButton={true}
             />
            <Box bg={'#FFFFFF'} borderRadius={'md'} boxShadow={'sm'} p={3}>
                <Box>
                    <Text color={'#5E0FCD'} fontSize={"sm"} fontWeight={600} mb={2}>
                        Wallet Balance
                    </Text>
                    <Text color={'#000'} fontSize={"sm"} fontWeight={700} mb={1}>
                        ₹ 10,000
                    </Text>
                </Box>
            </Box>
            <Divider />
            <Transactions
                tableHeadRow={tableHeadRow}
                extractedArray={extractedArray}
                isLoading={isLoading}
                onOpen={onOpen}
            />
        </Box>
    );
};

export default YourWallet;
