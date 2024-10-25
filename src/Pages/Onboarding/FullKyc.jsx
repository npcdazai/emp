import React, { useState } from 'react';
import FullKycFrame from './FullKycFrame';
import { Box, Container, Text, HStack, Stack, Stepper, Step, StepIndicator, StepStatus, StepSeparator, useSteps, StepIcon, List, ListItem, ListIcon } from '@chakra-ui/react';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';

const FullKyc = () => {

    const steps = [
        { description: 'Location' },
        { description: 'Q and A' },
        { description: 'Face verification' },
        { description: 'Aadhar Verification' },
        { description: 'Pan Verification' },
    ];

    const navigate = useNavigate();


    // Stepper configuration
    const { activeStep } = useSteps({
        index: 0,
        count: steps.length,
    });

    return (
        <FullKycFrame>
            <Container maxW={'container.xl'}>
                <Box w={'100%'} my={5} boxShadow={'md'}>
                    <Box bg={'#fff'} p={4} borderRadius={'md'} display={'flex'} justifyContent={'center'}>
                        <Box maxW={700}>
                            <Text color={'#100F14'} fontWeight={600} fontSize={'xl'} textAlign={'center'} mb={2}>
                                Full KYC
                            </Text>

                            <Text color={'#49475A'} fontWeight={500} fontSize={'sm'} textAlign={'center'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                            </Text>

                            <Box mt={8}>
                                <Stack spacing={2}>
                                    <Stepper
                                        size='sm'
                                        index={activeStep}
                                        gap='0'
                                        sx={{
                                            '--stepper-accent-color': '#ddd',
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
                                    <HStack justifyContent="space-between" alignItems={"center"}>
                                        {steps.map((step, index) => (
                                            <Text
                                                key={index}
                                                fontSize="xs"
                                                fontWeight={index === activeStep ? 'normal' : 'normal'}
                                                color={index === activeStep ? 'gray.500' : 'gray.400'}
                                                textAlign="center"
                                            >
                                                {step.description}
                                            </Text>
                                        ))}
                                    </HStack>
                                </Stack>
                            </Box>

                            <Box mt={10}>
                                <Text fontWeight={600} fontSize={'md'} textAlign={'center'} mb={1}>
                                    Instructions to be followed
                                </Text>
                                <Text fontWeight={500} fontSize={'xs'} textAlign={'center'} color={"#3F3F3F"}>
                                    Build trust by verifying your identity
                                </Text>

                                <Box mt={8}>
                                    <List spacing={3}>
                                        <ListItem display={"flex"} alignItems={"start"} justifyContent={"center"}>
                                            <ListIcon as={ChevronRightIcon} color='#1E1E1E' />
                                            <Text fontWeight={500} fontSize={'xs'} color={"#373434"}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                            </Text>
                                        </ListItem>
                                        <ListItem display={"flex"} alignItems={"start"} justifyContent={"center"}>
                                            <ListIcon as={ChevronRightIcon} color='#1E1E1E' />
                                            <Text fontWeight={500} fontSize={'xs'} color={"#373434"}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                            </Text>
                                        </ListItem>
                                        <ListItem display={"flex"} alignItems={"start"} justifyContent={"center"}>
                                            <ListIcon as={ChevronRightIcon} color='#1E1E1E' />
                                            <Text fontWeight={500} fontSize={'xs'} color={"#373434"}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                            </Text>
                                        </ListItem>
                                        <ListItem display={"flex"} alignItems={"start"} justifyContent={"center"}>
                                            <ListIcon as={ChevronRightIcon} color='#1E1E1E' />
                                            <Text fontWeight={500} fontSize={'xs'} color={"#373434"}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                            </Text>
                                        </ListItem>
                                    </List>
                                </Box>

                                <Box mt={10}>
                                    <HStack justifyContent={'center'} mt={6}>
                                        <PrimaryButton
                                            onClick={() => navigate("/full-kyc-location")}
                                            w={'300px'}
                                            title={'Proceed'}
                                        />
                                    </HStack>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </FullKycFrame>
    );
};

export default FullKyc;
