import React, { useState } from 'react'
import {
    Button,
    HStack,
    VStack,
    Text,
    Box,
    Input,
} from "@chakra-ui/react";
import { MdCardGiftcard } from "react-icons/md";
import SelectDenominationComponent from './SelectDenominationComponent';
import { useNavigate } from 'react-router-dom';

const SelectDenomination = () => {

    const navigate = useNavigate()

    const [selectedAmount, setSelectedAmount] = useState(50); // default selected amount
    const amounts = [50, 100, 500, 1000, 2000];

    return (
        <SelectDenominationComponent>
            <Box w={"60%"} gap={0} pl={8} borderLeft={"1px dashed #ddd"} minH={"80vh"}>
                <Box>
                    <Text
                        fontSize={"sm"}
                        fontWeight={"600"}
                        mb={3}
                    >
                        Select denomination
                    </Text>

                    <HStack spacing={4} mb={4}>
                        {amounts.map((amount) => (
                            <Button
                                key={amount}
                                bg={selectedAmount === amount ? "linear-gradient(90deg, #3725EA 0%, #5E0FCD 100%)" : "white"}
                                color={selectedAmount === amount ? "white" : "gray.500"}
                                border="1px solid"
                                borderColor="#3725EA"
                                _hover={{ bg: selectedAmount === amount ? "" : "gray.100" }}
                                onClick={() => setSelectedAmount(amount)}
                                rounded="lg"
                                colorScheme='#535353'
                                fontWeight={500}
                                fontSize={"xs"}
                                px={5}
                                h={7}
                            >
                                {amount}
                            </Button>
                        ))}
                    </HStack>
                    <Text
                        colorScheme='#777777'
                        fontWeight={500}
                        fontSize={"xs"}
                        mb={3}
                    >
                        OR
                    </Text>
                    <Text
                        fontSize={"sm"}
                        fontWeight={"600"}
                        mb={1}
                    >
                        Enter denomination
                    </Text>
                    <Input
                        type="number"
                        placeholder='Enter Value'
                        size='sm'
                        borderRadius={"md"}
                    />
                    <Text
                        fontSize={"xs"}
                        color={"#777777"}
                        mt={1}
                    >
                        Min: 50, Max: 100000
                    </Text>
                </Box>

                <Box display={"flex"} justifyContent={"center"} mt={16}>
                    <Button
                        leftIcon={<MdCardGiftcard />}
                        _hover={{
                            opacity: 0.8,
                        }}
                        color={"#fff"}
                        bg={"linear-gradient(90deg, #3725EA 0%, #5E0FCD 100%)"}
                        fontSize={"xs"}
                        fontWeight={400}
                        px={16}
                        h={8}
                        onClick={() => navigate('/for-whom-card')}
                    >
                        Get this voucher
                    </Button>

                </Box>

            </Box>
        </SelectDenominationComponent>
    )
}

export default SelectDenomination