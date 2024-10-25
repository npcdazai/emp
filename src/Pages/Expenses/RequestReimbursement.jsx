import { Box, Input, Text, HStack, Button, Icon, Tag, Divider, useToast, Radio, InputGroup, InputLeftElement, Select, InputRightElement, Textarea } from '@chakra-ui/react';
import React, { useContext } from 'react';
import MiniHeader from '../../Components/MiniHeader';
import { OPACITY_ON_LOAD } from '../../Layout/animations';
import { MdOutlineRamenDining } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegFilePdf } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import GlobalStateContext from '../../Contexts/GlobalStateContext';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import SecondaryButton from '../../Components/Buttons/SecondaryButton';
import { FiUploadCloud } from 'react-icons/fi';
import { BiScan } from 'react-icons/bi';
import { LuCalendar } from 'react-icons/lu';

const RequestReimbursement = () => {
    const { requestsTable } = useContext(GlobalStateContext);
    const toast = useToast();

    // Handle delete action
    const handleDelete = (id) => {
        toast({
            title: "Request Deleted.",
            description: "Your reimbursement request has been deleted.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
        // Add delete logic here
    };

    // Handle edit action
    const handleEdit = (id) => {
        toast({
            title: "Edit Request",
            description: "Edit functionality to be implemented.",
            status: "info",
            duration: 3000,
            isClosable: true,
        });
        // Add edit logic here
    };

    return (
        <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>
            <MiniHeader
                title={"Reimbursement Request"}
                backButton={true}
                subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />

            <Box bg={"#fff"} p={4} rounded={"md"} >

                <Box bg={"#f0e8fa"} p={4} rounded={"md"} mb={6}>
                    {requestsTable?.length > 0 ? (
                        <Box display={"flex"}
                            gap={4}
                            overflowX={"auto"}
                            pb={2}
                            sx={{
                                // Custom Scrollbar Styles
                                '&::-webkit-scrollbar': {
                                    height: '2px', // Set the height of the scrollbar (for horizontal scrolling)
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#6311cb', // Scrollbar thumb color
                                    borderRadius: '8px', // Rounded corners for the scrollbar
                                },
                                '&::-webkit-scrollbar-track': {
                                    backgroundColor: '#f9f9f9', // Scrollbar track color
                                },
                                '&:hover::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#3725EA', // Change scrollbar thumb color on hover
                                },
                            }}
                        >
                            {requestsTable.map((request, index) => (
                                <Box
                                    key={index}
                                    className='card'
                                    p={4}
                                    w={["100%", "48%", "32.35%"]}
                                    rounded={"md"}
                                    border={"none"}
                                    boxShadow={"md"}
                                    minW={"280px"}
                                >
                                    <HStack justifyContent={"space-between"}>
                                        <HStack>
                                            <Icon
                                                as={MdOutlineRamenDining}
                                                boxSize={8}
                                                p={1.5}
                                                bg={"#6311cb14"}
                                                rounded={"full"}
                                                color={"#111111"}
                                            />
                                            <Text fontSize={"sm"} color={"#363636"} fontWeight={"600"} mb={0}>
                                                {request?.transactionType || "N/A"}
                                            </Text>
                                        </HStack>
                                        <Radio size='md' name='1' colorScheme='purple'>
                                        </Radio>
                                    </HStack>

                                    <Text fontSize={"md"} color={"#363636"} fontWeight={"600"} mt={4} mb={1}>
                                        {request?.amountSpent || "0.00"}
                                    </Text>
                                    <Text fontSize={"xs"} color={"#545454"} fontWeight={"500"}>
                                        {request?.date || "Unknown Date"}
                                    </Text>

                                    <HStack gap={4} mt={2}>
                                        <Tag bg={"#F0E6FF"} size="sm" py={1} px={3}>
                                            <Text
                                                bgGradient="linear(to-l, #3725EA, #5E0FCD)"
                                                bgClip="text"
                                                fontSize={"xs"}
                                                fontWeight={600}
                                                mb={0}
                                            >
                                                {request?.category || "Food"}
                                            </Text>
                                        </Tag>
                                    </HStack>
                                </Box>
                            ))}
                        </Box>
                    ) : (
                        <Box textAlign="center" py={10} px={6}>
                            <Text fontSize="lg" color="gray.500">
                                No reimbursement requests found.
                            </Text>
                        </Box>
                    )}

                    <HStack justifyContent={"end"} my={4}>
                        <PrimaryButton title={"Select for Reimbursement"} />
                    </HStack>
                </Box>



                <Text fontSize={"md"} fontWeight={"600"}>
                    Upload new transaction
                </Text>

                <HStack justifyContent={"center"} mb={4}>
                    <PrimaryButton title={"upload file"} leftIcon={<FiUploadCloud />} />
                    <Text fontSize={"xs"} color={"#959595"} fontWeight={"400"} mb={0}>OR</Text>
                    <SecondaryButton title={"Scan Bill"} leftIcon={<BiScan />} />
                </HStack>

                {/* Wallet */}

                <Box mb={4}>
                    <Text mb={1} fontWeight={"500"} fontSize={"xs"} color={"#313039"}>
                        Wallet
                    </Text>
                    <Select
                        size="sm"
                        fontWeight={500}
                        fontSize={"sm"}
                        borderRadius={"md"}
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </Box>


                <Box mb={4}>
                    <Text mb={1} fontWeight={"500"} fontSize={"xs"} color={"#313039"}>
                        Add Amount
                    </Text>

                    <InputGroup>
                        <InputLeftElement pointerEvents='none' top={-1} color='#363636' fontWeight={500} fontSize='sm'>
                            ₹
                        </InputLeftElement>
                        <Input
                            borderRadius={"md"}
                            size="sm"
                            name="subject"
                            fontWeight={500}
                            fontSize={"sm"}
                        />
                    </InputGroup>
                </Box>

                <Box mb={4}>
                    <Text mb={1} fontWeight={"500"} fontSize={"xs"} color={"#313039"}>
                        Select category
                    </Text>
                    <Select
                        fontWeight={500}
                        fontSize={"sm"}
                        size="sm"
                        borderRadius={"md"}
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </Box>
                <Box mb={4}>
                    <Text mb={1} fontWeight={"500"} fontSize={"xs"} color={"#313039"}>
                        Purpose
                    </Text>
                    <Select
                        fontWeight={500}
                        fontSize={"sm"}
                        size="sm"
                        borderRadius={"md"}
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </Box>
                <Box mb={4}>
                    <Text mb={1} fontWeight={"500"} fontSize={"xs"} color={"#313039"}>
                        Merchant Name
                    </Text>
                    <Select
                        fontWeight={500}
                        fontSize={"sm"}
                        size="sm"
                        borderRadius={"md"}
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </Box>



                <Box mb={4}>
                    <Text mb={1} fontWeight={"500"} fontSize={"xs"} color={"#313039"}>
                        Date
                    </Text>

                    <InputGroup>
                        <InputLeftElement pointerEvents='none' color='#313039' fontWeight={500} fontSize='xs' top={"-1"}>
                            <LuCalendar color="#3725EA" />
                        </InputLeftElement>
                        <Input size={"sm"} borderRadius={"md"} pl={10} fontWeight={500}
                            fontSize={"sm"} />
                    </InputGroup>
                </Box>

                <Box mb={4}>
                    <Text mb={1} fontWeight={"500"} fontSize={"xs"} color={"#313039"}>
                        Payment Method
                    </Text>
                    <Select
                        fontWeight={500}
                        fontSize={"sm"}
                        size="sm"
                        borderRadius={"md"}
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </Box>

                <Box mt={4}>
                    <Text mb={1} fontWeight={"500"} fontSize={"xs"} color={"#313039"}>
                        Comments (Optional)
                    </Text>
                    <Textarea
                        name="description"
                        placeholder="Describe your issue here"
                        size="sm"
                        borderRadius={"md"}
                        resize={"none"}
                        fontWeight={500}
                        fontSize={"sm"}
                    />
                </Box>
                <HStack mt={6} justifyContent={"center"}>
                    <PrimaryButton title={"Request Reimbursement"} />
                </HStack>
                
            </Box>


        </Box>
    );
};

export default RequestReimbursement;
