import React from 'react'
import { OPACITY_ON_LOAD } from '../../Layout/animations'
import { Box, Container, Text, HStack, Stack, Stepper, Step, StepIndicator, StepStatus, StepSeparator, useSteps, StepIcon, List, ListItem, ListIcon, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { BiSolidMicrophone } from "react-icons/bi";
import { MdVideocam } from "react-icons/md";
import { MdCallEnd } from "react-icons/md";
import call_first from "../../assets/call_first.svg"
import call_sec from "../../assets/call_sec.svg"

const FullKycAadharVerificationFrame = ({ children }) => {

    const steps = [
        { description: 'Location' },
        { description: 'Q and A' },
        { description: 'Face verification' },
        { description: 'Aadhar Verification' },
        { description: 'Pan Verification' },
    ];

    // Stepper configuration
    const { activeStep } = useSteps({
        index: 3,
        count: steps.length,
    });

    return (

        <Box {...OPACITY_ON_LOAD} overflowX={"auto"}>
            <Header />
            <Box
                w={'100%'}
                minH={'60vh'}
                bg={'#f3f3f9'}
                px={6}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"start"}
            >
                <Box w={'100%'} my={5} boxShadow={'md'}>
                    <Box bg={'#fff'} p={4} borderRadius={'md'} >
                        <Text color={'#100F14'} fontWeight={600} fontSize={'xl'} textAlign={'center'} mb={2}>
                            Full KYC
                        </Text>

                        <Text color={'#49475A'} fontWeight={500} fontSize={'sm'} textAlign={'center'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                        </Text>
                        <Box>
                            <Box mt={8}>
                                <Stack spacing={2}>
                                    <Stepper
                                        size='sm'
                                        index={activeStep}
                                        gap='0'
                                        sx={{
                                            '--stepper-accent-color': '#6311CB',
                                        }}
                                    >
                                        {steps.map((step, index) => (
                                            <Step key={index} gap='0'>
                                                <StepIndicator>
                                                    <StepStatus complete={<StepIcon />} />
                                                </StepIndicator>
                                                <StepSeparator _horizontal={{ ml: '0' }} />
                                            </Step>
                                        ))}
                                    </Stepper>
                                    <HStack justifyContent="space-between" alignItems={"center"} >
                                        {steps.map((step, index) => (
                                            <Text
                                                key={index}
                                                fontSize="xs"
                                                fontWeight={index === activeStep ? 'bold' : 'normal'}
                                                color={index === activeStep ? 'purple.500' : 'gray.400'}
                                                textAlign="center"
                                            >
                                                {step.description}
                                            </Text>
                                        ))}
                                    </HStack>
                                </Stack>
                            </Box>


                            <Box>
                                <HStack spacing={6} mt={8} alignItems={"start"} justifyContent={"space-between"} >
                                    <Box mb={4} w={"35%"}>
                                        <HStack spacing={4}>
                                            <Image
                                                boxSize='240px'
                                                objectFit='cover'
                                                src={call_first}
                                                alt='Dan Abramov'
                                            />
                                            <Image
                                                boxSize='240px'
                                                objectFit='cover'
                                                src={call_sec}
                                                alt='Dan Abramov'
                                            />
                                        </HStack>
                                        <Box mt={4} w={"52%"}>
                                            <HStack
                                                bg={"#484848"}
                                                borderRadius={"full"}
                                                py={2}
                                                px={2}
                                                spacing={4}
                                                justifyContent={"center"}
                                            >
                                                <Box
                                                    bg="#6A6A6A"
                                                    p="2"
                                                    borderRadius="full"
                                                    display="inline-flex"
                                                >
                                                    <BiSolidMicrophone color="white" size="14px" />
                                                </Box>
                                                <Box
                                                    bg="#6A6A6A"
                                                    p="2"
                                                    borderRadius="full"
                                                    display="inline-flex"
                                                >
                                                    <MdVideocam color="white" size="14px" />
                                                </Box>
                                                <HStack
                                                    bg="rgba(237, 12, 12, 0.68)"
                                                    py="1"
                                                    px={2}
                                                    borderRadius="full"
                                                    display="inline-flex"
                                                >
                                                    <MdCallEnd color="white" size="14px" />
                                                    <Text mb={0} fontSize={"xs"} fontWeight={500} color={"#fff"}>End</Text>
                                                </HStack>
                                            </HStack>
                                        </Box>
                                    </Box>

                                    <Box
                                        w={"62%"}
                                    >
                                        {children}
                                    </Box>
                                </HStack>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Footer />
        </Box>

    )
}

export default FullKycAadharVerificationFrame