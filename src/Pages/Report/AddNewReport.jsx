import { Box, Input, Text, HStack, Button, Icon, Tag, Divider, flexbox, useToast, } from '@chakra-ui/react'
import React, { useContext } from 'react'
import MiniHeader from '../../Components/MiniHeader'
import { OPACITY_ON_LOAD } from '../../Layout/animations'
import { MdOutlineRamenDining } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegFilePdf } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import GlobalStateContext from '../../Contexts/GlobalStateContext';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import ToastBox from '../../Components/ToastBox';

const AddNewReport = () => {
    const toast = useToast()
    const { requestsTable } = useContext(GlobalStateContext);
    const toastTrigger = () =>{
        toast({
            position:"bottom-right",
            render: () => (
              <ToastBox
                status={"success"}
                message={"Report successfully added!"}
              />
            ),
          });
    }
    return (
        <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>
            <MiniHeader
                title={"Add New Report"}
                backButton={true}
                subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
            <Box>
                <HStack gap={7} align={"end"}>
                    <Box flex={"1"}>
                        <Text mb='6px' fontSize={"sm"} color={"#313039"} fontWeight={"600"}>Name of the Report</Text>
                        <Input size={'sm'} rounded={'md'} border={"1px solid #6311CB"}
                            _hover={"inherit"} />
                    </Box>
                    <PrimaryButton onClick={toastTrigger} title={'Send for Approval'}/>
                </HStack>
            </Box>
            <Box display={"flex"} gap={"4"} flexWrap={"wrap"} my={"8"}>
                {requestsTable?.map((request, index) =>
                    <Box key={index} className='card' p={"4"} w={"32.35%"} rounded={"md"} border={"none"} boxShadow={"md"}
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
                                <Text
                                    fontSize={"sm"}
                                    color={"#363636"}
                                    fontWeight={"600"}
                                    mb={"0"}
                                >
                                    {request?.transactionType}
                                </Text>
                            </HStack>
                            <RiDeleteBin5Line fontSize={"18px"} />
                        </HStack>
                        <Text
                            fontSize={"md"}
                            color={"#363636"}
                            fontWeight={"600"}
                            mt={"4"}
                            mb={"1"}
                        >
                            {request?.amountSpent}
                        </Text>
                        <Text
                            fontSize={"xs"}
                            color={"#545454"}
                            fontWeight={"500"}
                        >
                            {request?.date}
                        </Text>

                        <HStack gap={"4"}>
                            <Tag
                                bg={"#F0E6FF"}
                                color={"#fff"}
                                size="sm"
                                py={"1"}
                                px={"3"}
                            >
                                <Text
                                    bgGradient="linear(to-l, #3725EA, #5E0FCD)"
                                    bgClip="text"
                                    fontSize={"xs"}
                                    as={"span"}
                                    fontWeight={600}
                                >Food</Text>
                            </Tag>
                            <Button
                                as="a"
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
                                py={"3"}
                                px={"4"}
                            >
                                <FaRegFilePdf color="#B43331" />
                                Receipt.pdf
                            </Button>
                        </HStack>
                        <Divider />
                        <HStack justify={'space-between'}>
                            <Text
                                color={"#159F2B"}
                                fontWeight={"600"}
                                fontSize={"sm"}
                                mb={"0"}
                            >
                                Approved
                            </Text>

                            <HStack cursor={'pointer'}  rounded={'md'} _hover={{bg:"gray.100"}} transition={'0.5s'} py={0.5} px={2}>
                                <AiOutlineEdit color={"#3725EA"}
                                    fontSize={"16px"} />
                                <Text
                                    bgGradient="linear(to-l, #3725EA, #5E0FCD)"
                                    bgClip="text"
                                    fontSize={"sm"}
                                    mb={"0"}
                                    fontWeight={"500"}
                                >
                                    Edit
                                </Text>
                            </HStack>

                        </HStack>


                    </Box>
                )}</Box >


        </Box >
    )
}

export default AddNewReport