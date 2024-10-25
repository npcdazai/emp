import React from 'react'
import { Box, Text, HStack, VStack, Link, Image, Divider, Stack, Container } from '@chakra-ui/react';
import o_logo from '../../assets/o_logo.svg';
import { FaDribbble, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
    return (
        <Box
            bgGradient="linear-gradient(96.4deg, #C33FAD -20.43%, #3725EA 43.23%, #6311CB 103.29%)"
            py={6}
            color="#fff"
        >
            <Container maxW='container.xl' py={2}>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    justifyContent={"space-between"}
                    align="start"
                   
                >
                    {/* Left Section */}
                    <HStack align="start" spacing={4}>
                        <Image src={o_logo} alt="Optifii Logo" />
                        <Text fontSize="xxl" fontWeight="500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut et massa mi.
                        </Text>
                    </HStack>

                    {/* Center Navigation */}
                    <HStack spacing={16} alignItems={"start"}>
                        <VStack align="start">
                            <Link fontSize={"sm"} fontWeight={500}>Home</Link>
                            <Link fontSize={"sm"} fontWeight={500}>About Us</Link>
                            <Link fontSize={"sm"} fontWeight={500}>Products</Link>
                            <Link fontSize={"sm"} fontWeight={500}>Solutions</Link>
                            <Link fontSize={"sm"} fontWeight={500}>Resources</Link>
                        </VStack>

                        {/* Address & Contact */}
                        <VStack align="start">
                            <Text mb={1} fontSize={"sm"} fontWeight={500}>Address</Text>
                            <Text mb={0} fontSize={"xs"}>Piazza Santa Maria in Via Lata 16128 Genova, Italy <br /> <Link textDecoration={"underline"}>Get Directions</Link></Text>

                            <Text mb={0} fontSize={"sm"} fontWeight={500}>Contact</Text>
                            <Text mb={0} fontSize={"xs"}>7851251259</Text>
                            <Text mb={0} fontSize={"xs"}>optifii@gmail.com</Text>
                        </VStack>
                    </HStack>

                    {/* Social Links */}
                    <VStack align="start" >
                        <Text mb={1} fontSize={"sm"}>Social</Text>
                        <HStack>
                            <FaDribbble size={14} />
                            <Link href="#" fontSize={"xs"}>Dribble</Link>
                        </HStack>
                        <HStack>
                            <FaLinkedinIn size={14} />
                            <Link href="#" fontSize={"xs"}>LinkedIn</Link>
                        </HStack>
                        <HStack>
                            <GrInstagram size={14} />
                            <Link href="#" fontSize={"xs"}>Instagram</Link>
                        </HStack>
                    </VStack>
                </Stack>
            </Container>
            <Divider mt={6} />
            <Container maxW='container.xl'>
                {/* Footer Bottom */}
                <HStack justify="start" pt={2} spacing={6}
                  
                >
                    <Text fontSize="sm" mb={0}>All rights reserved.</Text>
                    <Link fontSize="sm" href="#">Privacy Policy</Link>
                    <Link fontSize="sm" href="#">Terms & Conditions</Link>
                </HStack>
            </Container>
        </Box>
    );
};

export default Footer;
