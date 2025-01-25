import React, { useState } from 'react'
import WelcomeFrame from './WelcomeFrame'
import { Box, Grid, GridItem, Input, FormControl, FormLabel, InputGroup, InputRightElement, Button, Text, Checkbox, HStack, Link, UnorderedList, ListItem, Container, useDisclosure, } from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import { Navigate, useNavigate } from 'react-router-dom';
import LoginModal from '../../Components/SuccessPendingModal/LoginModal';

const WelcomeToOptifii = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    const navigate = useNavigate();

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <WelcomeFrame>

            <Container maxW={'container.xl'}>
                <Box
                    w={"100%"}
                    my={5}
                    boxShadow={"md"}
                >
                    <Box bg={'#fff'} p={4} borderRadius={"md"}>
                        <Text
                            color={'#100F14'}
                            fontWeight={600}
                            fontSize={'xl'}
                            textAlign={"center"}
                            mb={2}
                        >
                            Welcome to OptiFii
                        </Text>
                        <Text
                            color={'#49475A'}
                            fontWeight={500}
                            fontSize={'sm'}
                            textAlign={"center"}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. <br /> Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
                        </Text>


                        <Box maxW="7xl" mx="auto" px={4} py={6}>
                            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                                {/* Company */}
                                <GridItem colSpan={{ base: 4, md: 2 }}>
                                    <FormControl>
                                        <FormLabel fontSize="sm">Company</FormLabel>
                                        <Input fontSize="xs" fontWeight={500} value="Optifii Pvt Ltd" />
                                    </FormControl>
                                </GridItem>

                                {/* Name */}
                                <GridItem colSpan={{ base: 4, md: 2 }}>
                                    <FormControl>
                                        <FormLabel fontSize="sm">Name</FormLabel>
                                        <Input fontSize="xs" fontWeight={500} placeholder="Enter your name" />
                                    </FormControl>
                                </GridItem>

                                {/* Email */}
                                <GridItem colSpan={{ base: 4, md: 2 }}>
                                    <FormControl>
                                        <FormLabel fontSize="sm">Email</FormLabel>
                                        <Input fontSize="xs" fontWeight={500} value="admin@optifii.com" readOnly />
                                    </FormControl>
                                </GridItem>

                                {/* Date of Birth */}
                                <GridItem colSpan={{ base: 4, md: 2 }}>
                                    <FormControl>
                                        <FormLabel fontSize="sm">Date of birth</FormLabel>
                                        <Input type="date" fontSize="xs" fontWeight={500} value="2024-06-14" />
                                    </FormControl>
                                </GridItem>

                                {/* Phone Number */}
                                <GridItem colSpan={{ base: 4, md: 2 }}>
                                    <FormControl>
                                        <FormLabel fontSize="sm">Phone number</FormLabel>
                                        <Input fontSize="xs" fontWeight={500} value="9854247586" readOnly />
                                    </FormControl>
                                </GridItem>

                                {/* Roles */}
                                <GridItem colSpan={{ base: 4, md: 2 }}>
                                    <FormControl>
                                        <FormLabel fontSize="sm">Roles</FormLabel>
                                        <Input fontSize="xs" fontWeight={500} value="Sr. Accountant" readOnly />
                                    </FormControl>
                                </GridItem>

                                {/* Department */}
                                <GridItem colSpan={{ base: 4, md: 2 }}>
                                    <FormControl>
                                        <FormLabel fontSize="sm">Department</FormLabel>
                                        <Input fontSize="xs" fontWeight={500} value="Finance" readOnly />
                                    </FormControl>
                                </GridItem>

                                {/* Grade/Level */}
                                <GridItem colSpan={{ base: 4, md: 2 }}>
                                    <FormControl>
                                        <FormLabel fontSize="sm">Grade/Level</FormLabel>
                                        <Input fontSize="xs" fontWeight={500} placeholder="Enter grade/level" />
                                    </FormControl>
                                </GridItem>

                                {/* Password */}
                                <GridItem colSpan={{ base: 4, md: 2 }}>
                                    <FormControl>
                                        <FormLabel fontSize="sm">Password</FormLabel>
                                        <InputGroup size="md">
                                            <Input
                                                fontSize="xs"
                                                fontWeight={500}
                                                pr="4.5rem"
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Enter password"
                                            />
                                            <InputRightElement width="4.5rem">
                                                <Button
                                                    h="1.75rem"
                                                    size="sm"
                                                    bg={"transparent"}
                                                    _hover={{ opacity: 0.7 }}

                                                    onClick={handlePasswordVisibility}>
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        <HStack>
                                            <UnorderedList
                                                ml={0}
                                                display={"flex"}
                                                alignItems={"start"}
                                                flexWrap={"wrap"}
                                                columnGap={10}
                                                rowGap={0}
                                            >
                                                <ListItem
                                                    style={{
                                                        color: "#737373",
                                                    }}
                                                >
                                                    <Text fontSize={"xs"} fontWeight={500} mb={0}>
                                                        Use 8 or more characters
                                                    </Text>
                                                </ListItem>
                                                <ListItem
                                                    style={{
                                                        color: "#737373",
                                                    }}
                                                >
                                                    <Text fontSize={"xs"} fontWeight={500} mb={0}>
                                                        One Uppercase character
                                                    </Text>
                                                </ListItem>
                                                <ListItem
                                                    style={{
                                                        color: "#737373",
                                                    }}
                                                >
                                                    <Text fontSize={"xs"} fontWeight={500} mb={0}>
                                                        One lowercase character
                                                    </Text>
                                                </ListItem>
                                                <ListItem
                                                    style={{
                                                        color: "#737373",
                                                    }}
                                                >
                                                    <Text fontSize={"xs"} fontWeight={500} mb={0}>
                                                        One special character
                                                    </Text>
                                                </ListItem>
                                                <ListItem
                                                    style={{
                                                        color: "#737373",
                                                    }}
                                                >
                                                    <Text fontSize={"xs"} fontWeight={500} mb={0}>
                                                        One number
                                                    </Text>
                                                </ListItem>
                                            </UnorderedList>
                                        </HStack>
                                        {/* <Text fontSize="xs" mt={2} fontWeight={500}>
                                        Use 8 or more characters including at least one uppercase, one lowercase, one special character, and one number.
                                    </Text> */}
                                    </FormControl>
                                </GridItem>

                                {/* Confirm Password */}
                                <GridItem colSpan={{ base: 4, md: 2 }}>
                                    <FormControl>
                                        <FormLabel fontSize="sm">Confirm Password</FormLabel>
                                        <InputGroup size="md">
                                            <Input
                                                fontSize="xs"
                                                fontWeight={500}
                                                pr="4.5rem"
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                placeholder="Confirm password"
                                            />
                                            <InputRightElement width="4.5rem">
                                                <Button
                                                    h="1.75rem"
                                                    size="sm"
                                                    bg={"transparent"}
                                                    _hover={{ opacity: 0.7 }}

                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                    </FormControl>
                                </GridItem>
                            </Grid>

                            <Box mt={10}>
                                <HStack justifyContent={"center"}>
                                    <Checkbox colorScheme='purple' defaultChecked>
                                        <Text mb={0} fontSize={"sm"} fontWeight={500}>
                                            <Text as={'span'} color={'#FE3F25'}>*</Text>
                                            I agree to the Terms of Service and acknowledge you’ve read our Privacy Policy.
                                        </Text>
                                    </Checkbox>
                                </HStack>
                                <HStack justifyContent={"center"} mt={6} >
                                    <PrimaryButton
                                        onClick={() => navigate("/register-otp")}
                                        w={"300px"} title={"Register with us"} />
                                </HStack>
                                <HStack justifyContent={"center"} mt={4} spacing={1}>
                                    <Text fontSize={"xs"} fontWeight={500} mb={0}>Already have an account?</Text>
                                    <Button
                                        onClick={onOpen}
                                        _hover={{ opacity: 0.8 }}
                                        px={0}
                                        fontSize={"xs"}
                                        color={"#3725EA"}
                                        textDecoration={"underline"}
                                        fontWeight={600}
                                        bg={"transparent"}
                                    >Log in</Button>
                                </HStack>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <LoginModal  isOpen={isOpen} onClose={onClose} />
            </Container>
        </WelcomeFrame>
    )
}

export default WelcomeToOptifii