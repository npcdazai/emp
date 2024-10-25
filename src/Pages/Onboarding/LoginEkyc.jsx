import React, { useState } from 'react';
import LoginEkycFrame from './LoginEkycFrame';
import { Box, Container, Radio, RadioGroup, Text, HStack, Checkbox, Link } from '@chakra-ui/react';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import { BsPatchExclamation } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const LoginEkyc = () => {
    const [selectedKyc, setSelectedKyc] = useState('1'); // on change of radio box
    const navigate = useNavigate();

    // Which radio is checked navigate to that page 

    const handleProceed = () => {
        if (selectedKyc === '1') {
            navigate('/maximum-kyc');
        } else if (selectedKyc === '2') {
            navigate('/minimum-kyc');
        }
    };

    return (
        <LoginEkycFrame>
            <Container maxW={'container.xl'}>
                <Box w={'100%'} my={5} boxShadow={'md'}>
                    <Box bg={'#fff'} p={4} borderRadius={'md'} display={'flex'} justifyContent={'center'}>
                        <Box maxW={650}>
                            <Text color={'#100F14'} fontWeight={600} fontSize={'xl'} textAlign={'center'} mb={2}>
                                eKYC
                            </Text>

                            <Text color={'#49475A'} fontWeight={500} fontSize={'sm'} textAlign={'center'}>
                                Automatically verifies your documents needed for KYC and account opening on OptiFii
                            </Text>

                            <Box mt={10}>
                                <Text fontWeight={600} fontSize={'md'} textAlign={'center'}>
                                    Choose your KYC
                                </Text>

                                <Box>
                                    <RadioGroup
                                        value={selectedKyc}
                                        onChange={setSelectedKyc}
                                        display={'flex'}
                                        flexDirection={'column'}
                                        gap={6}
                                    >
                                        <Box
                                            border={selectedKyc === '1' ? '1px solid #e8ddf7' : '1px solid #e8e8e8'}
                                            bg={'#fff'}
                                            p={4}
                                            borderRadius={'xl'}
                                            boxShadow={selectedKyc === '1' ? '0px 4px 4px rgba(232, 221, 247, 0.9)' : 'sm'}
                                        >
                                            <Radio value='1' colorScheme='purple'>
                                                <Text fontSize={'md'} fontWeight={500} mb={0}>
                                                    Full KYC
                                                </Text>
                                            </Radio>
                                            <Text color={'#555555'} fontSize={'sm'} fontWeight={500}>
                                                Maximum wallet limit is
                                                <Text as={'span'} color={'#222222'} fontSize={'sm'} fontWeight={600} ml={1}>
                                                    ₹ 200000
                                                </Text>
                                            </Text>
                                            <HStack alignItems={'start'}>
                                                <BsPatchExclamation color={'#AAAAAA'} fontSize={14} />
                                                <Text color={'#AAAAAA'} fontSize={'xs'} fontWeight={500} mb={1}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                                                </Text>
                                            </HStack>
                                        </Box>

                                        <Box
                                            border={selectedKyc === '2' ? '1px solid #e8ddf7' : '1px solid #e8e8e8'}
                                            bg={'#fff'}
                                            p={4}
                                            borderRadius={'xl'}
                                            boxShadow={selectedKyc === '2' ? '0px 4px 4px rgba(232, 221, 247, 0.9)' : 'sm'}
                                        >
                                            <Radio value='2' colorScheme='purple'>
                                                <Text fontSize={'md'} fontWeight={500} mb={0}>
                                                    Minimum KYC
                                                </Text>
                                            </Radio>
                                            <Text color={'#555555'} fontSize={'sm'} fontWeight={500}>
                                                Minimum wallet limit is
                                                <Text as={'span'} color={'#222222'} fontSize={'sm'} fontWeight={600} ml={1}>
                                                    ₹ 10000
                                                </Text>
                                            </Text>
                                            <HStack alignItems={'start'}>
                                                <BsPatchExclamation color={'#AAAAAA'} fontSize={14} />
                                                <Text color={'#AAAAAA'} fontSize={'xs'} fontWeight={500} mb={1}>
                                                    Enter the Aadhar or PAN number and then request for the OTP. This will complete the minimum KYC.
                                                </Text>
                                            </HStack>
                                        </Box>
                                    </RadioGroup>
                                </Box>

                                <Box mt={10}>
                                    <HStack justifyContent={'center'}>
                                        <Checkbox colorScheme='purple' alignItems={'start'} defaultChecked>
                                            <Text mb={0} fontSize={'xs'} fontWeight={500}>
                                                <Text as={'span'} color={'#FE3F25'}>
                                                    *
                                                </Text>
                                                I hereby consent to provide my Aadhaar Number, Biometric and/or One Time Pin (OTP) data for Aadhaar based authentication for the purpose of establishing my identity
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                    <HStack justifyContent={'center'} mt={6}>
                                        <PrimaryButton onClick={handleProceed} w={'300px'} title={'Proceed'} />
                                    </HStack>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </LoginEkycFrame>
    );
};

export default LoginEkyc;
