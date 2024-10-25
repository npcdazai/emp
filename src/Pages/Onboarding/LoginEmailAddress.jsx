import React, { useState } from 'react';
import { Box, Input, Button, Text, HStack, Link, Container, InputGroup, InputLeftElement, Divider, FormControl, FormLabel, FormErrorMessage, useToast } from '@chakra-ui/react';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import SecondaryButton from '../../Components/Buttons/SecondaryButton';
import { HiOutlineMail } from "react-icons/hi";
import { TiWarning } from 'react-icons/ti';
import LoginEmailAddressFrame from './LoginEmailAddressFrame';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

// Define your validation schema with Yup
const emailValidation = Yup.object().shape({
    emailAddress: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
});

const LoginEmailAddress = () => {
    const toast = useToast()
    const navigate = useNavigate();
    const [ isLoading, setIsLoading ] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(emailValidation),
    });

    const onSubmit = (data) => {
        setIsLoading(true)


        setTimeout(() => {
            setIsLoading(false)
            localStorage.setItem('email', data?.emailAddress);
            navigate("/login-otp");
        }, 2000); // 2-second delay



        console.log(data?.emailAddress);
    };

    return (
        <LoginEmailAddressFrame>
            <Container maxW={'container.xl'}>
                <Box
                    w={"100%"}
                    my={5}
                    boxShadow={"md"}
                >
                    <Box as='form' onSubmit={handleSubmit(onSubmit)} bg={'#fff'} p={4} borderRadius={"md"} display={"flex"} justifyContent={"center"}>
                        <Box maxW={650}>
                            <Text
                                color={'#100F14'}
                                fontWeight={600}
                                fontSize={'xl'}
                                textAlign={"center"}
                                mb={2}
                            >
                                Log In to OptiFii
                            </Text>
                            <Text
                                color={'#49475A'}
                                fontWeight={500}
                                fontSize={'sm'}
                                textAlign={"center"}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.
                            </Text>
                            <Box mt={12}>
                                <FormControl isInvalid={!!errors.emailAddress}>
                                    <FormLabel htmlFor='emailAddress' fontSize={"sm"} fontWeight={500} color={"#313039"} mb={2}>
                                        Enter e-mail address
                                    </FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents='none'>
                                            <HiOutlineMail color='#C33FAD' />
                                        </InputLeftElement>
                                        <Input
                                            id='emailAddress'
                                            placeholder='Enter your email'
                                            {...register("emailAddress")}
                                            fontSize={"sm"}
                                            fontWeight={500}
                                        />
                                    </InputGroup>
                                    <FormErrorMessage>
                                        {errors?.emailAddress && (
                                            <span className="text-danger web-text-small fw-bold ps-2 d-flex align-items-center gap-1 mt-1">
                                                <TiWarning className="fw-bold fs-5 " /> {errors?.emailAddress?.message}
                                            </span>
                                        )}
                                    </FormErrorMessage>
                                </FormControl>
                            </Box>

                            <Box px={4} py={6}>
                                <HStack justifyContent={"center"} mt={6}>
                                    <PrimaryButton
                                        isLoading={isLoading}
                                        type="submit"
                                        w={"300px"}
                                        title={"Send OTP"}
                                    />
                                </HStack>
                                <HStack justifyContent={"center"} mt={4}>
                                    <Text fontSize={"xs"} fontWeight={500} mb={0}>Don’t have an account?</Text>
                                    <Link onClick={()=> navigate('/welcome-screen')} fontSize={"xs"} fontWeight={600} mb={0} color={"#3725EA"}>Signup</Link>
                                </HStack>
                                <HStack spacing={4} my={8}>
                                    <Divider />
                                    <Text
                                        color={'#49475A'}
                                        fontWeight={500}
                                        fontSize={'sm'}
                                        textAlign={"center"}
                                        mb={0}
                                    >Or</Text>
                                    <Divider />
                                </HStack>
                                <HStack justifyContent={"center"}>
                                    <SecondaryButton
                                        w={"300px"}
                                        title={"Continue with phone"}
                                        onClick={() => navigate("/login-phone-number")}
                                    />
                                </HStack>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </LoginEmailAddressFrame>
    );
};

export default LoginEmailAddress;
