import React from 'react'
import { Box, Input, Text,  HStack,  Container, } from '@chakra-ui/react';
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import MinimumKycFrame from './MinimumKycFrame';
import { useNavigate } from 'react-router-dom';

const MinimumKyc = () => {

    const navigate = useNavigate();

    return (
        <MinimumKycFrame>
            <Container maxW={'container.xl'}>
                <Box
                    w={"100%"}
                    my={5}
                    boxShadow={"md"}
                >
                    <Box bg={'#fff'} p={4} borderRadius={"md"} display={"flex"} justifyContent={"center"}  minH={"70vh"}>
                        <Box maxW={650} >
                            <Text
                                color={'#100F14'}
                                fontWeight={600}
                                fontSize={'xl'}
                                textAlign={"center"}
                                mb={2}
                            >
                                Minimum KYC
                            </Text>
                            <Text
                                color={'#49475A'}
                                fontWeight={500}
                                fontSize={'sm'}
                                textAlign={"center"}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.
                            </Text>
                            <Box mt={16}>
                                <Text
                                    fontSize={"sm"}
                                    fontWeight={500}
                                    color={"#313039"}
                                    mb={2}
                                >
                                    Enter Aadhaar/PAN number
                                </Text>

                                <Input  />
                            </Box>

                            <Box px={4} py={6}>
                                <Box mt={16}>
                                    <HStack justifyContent={"center"} mt={6} >
                                        <PrimaryButton
                                            onClick={() => navigate("/login-otp")}
                                            w={"300px"} title={"Request For OTP"} />
                                    </HStack>
                                </Box>
                            </Box>
                        </Box>



                    </Box>
                </Box>
            </Container>
        </MinimumKycFrame>
    )
}

export default MinimumKyc