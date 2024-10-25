import React, { useState } from 'react';
import { Box, PinInput, PinInputField, Text, HStack, Container, useToast } from '@chakra-ui/react';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import LoginOtpFrame from './LoginOtpFrame';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import ToastBox from '../../Components/ToastBox';

const RegisterOtp = () => {
    
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const toast = useToast();

    const handleOtpChange = (value) => {
        setOtp(value);
    };

    // const handleLogin = () => {
    //     const email = localStorage.getItem("email");
    //     const phoneNumber = localStorage.getItem("phoneNumber");

    //     if (email === "wdi@gmail.com" && phoneNumber === "9988776655" && otp === "1234") { 

    //         setTimeout(() => {
    //             toast({
    //                 render: () => (
    //                     <ToastBox status={"success"} message={"Login Successfully"} />
    //                 ),
    //             });

    //             Cookies.set("isAuthenticated", true, { expires: 7 });
    //             navigate("/*");
    //         }, 2000); // 2-second delay
    //     } else {
    //         setTimeout(() => {
    //             toast({
    //                 render: () => (
    //                     <ToastBox status={"error"} message={"Invalid phone number or OTP"} />
    //                 ),
    //             });

    //             reset(); 
    //             navigate("/login-phone-number");
    //         }, 2000); // 2-second delay
    //     }
    // };

    return (
        <LoginOtpFrame>
            <Container maxW={'container.xl'}>
                <Box w={"100%"} my={5} boxShadow={"md"}>
                    <Box bg={'#fff'} p={4} borderRadius={"md"} display={"flex"} justifyContent={"center"}>
                        <Box maxW={650}>
                            <Text color={'#100F14'} fontWeight={600} fontSize={'xl'} textAlign={"center"} mb={2}>
                                Enter OTP
                            </Text>
                            <Text color={'#49475A'} fontWeight={500} fontSize={'sm'} textAlign={"center"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.
                            </Text>
                            <Box mt={12}>
                                <HStack justifyContent={"center"}>
                                    <PinInput value={otp} onChange={handleOtpChange} size='lg' otp>
                                        <PinInputField _focus={{ borderColor: "#3725EA", borderWidth: "1px" }} />
                                        <PinInputField _focus={{ borderColor: "#3725EA", borderWidth: "1px" }} />
                                        <PinInputField _focus={{ borderColor: "#3725EA", borderWidth: "1px" }} />
                                        <PinInputField _focus={{ borderColor: "#3725EA", borderWidth: "1px" }} />
                                    </PinInput>
                                </HStack>
                            </Box>
                            <Box py={10}>
                                <Box mt={16}>
                                    <HStack justifyContent={"center"}>
                                        <PrimaryButton w={"300px"} title={"Next"} onClick={()=>navigate("/ekyc")} />
                                    </HStack>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </LoginOtpFrame>
    );
};

export default RegisterOtp;
