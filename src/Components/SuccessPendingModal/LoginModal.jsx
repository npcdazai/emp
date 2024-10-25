import React from 'react';
import {
    Box, HStack, Text, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalContent, Button, Image,
    VStack,
    Link
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CiMobile3 } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import bell from "../../assets/bell.svg"
import { Navigate, useNavigate } from 'react-router-dom';

// Define motion components
const MotionBox = motion(Box);
const MotionImage = motion(Image); // Motion component for Image

const LoginModal = ({ isOpen, onClose }) => {

    const navigate = useNavigate();

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <HStack justifyContent={"center"} mb={2}>
                            <Image
                                src={bell}
                                alt="bell"
                                w={10}
                                h={12}
                            ></Image>
                        </HStack>
                        <Text
                            color={"#100F14"}
                            fontSize={"xl"}
                            fontWeight={"600"}
                            textAlign={"center"}
                            mb={2}
                        >
                            Register to get free access
                            to all our recourses
                        </Text>
                        <Text
                            color={"#100F14"}
                            fontSize={"sm"}
                            fontWeight={"500"}
                            textAlign={"center"}
                        >
                            Sign up to see more
                        </Text>
                        <VStack>
                            <Button
                                onClick={() => navigate("/login-email-address")}
                                _hover={{ opacity: 0.8 }}
                                borderRadius={"full"}
                                bg={"#100F14"}
                                color={"#fff"}
                                border={"1px solid #9794AA"}
                                fontSize={"sm"}
                                fontWeight={"500"}
                                w={"100%"}
                                px={4}
                                py={6}
                            >Continue with email</Button>
                            <Button
                                onClick={() => navigate("/login-phone-number")}
                                _hover={{ opacity: 0.8 }}
                                borderRadius={"full"}
                                color={"#100F14"}
                                bg={"transparent"}
                                border={"1px solid #9794AA"}
                                fontSize={"sm"}
                                fontWeight={"500"}
                                w={"100%"}
                                px={4}
                                py={6}
                            >
                                <CiMobile3 style={{ marginRight: "8px", color: "#6311CB" }} size={20} />
                                Mobile number
                            </Button>
                            <Button
                                _hover={{ opacity: 0.8 }}
                                borderRadius={"full"}
                                color={"#100F14"}
                                bg={"transparent"}
                                border={"1px solid #9794AA"}
                                fontSize={"sm"}
                                fontWeight={"500"}
                                w={"100%"}
                                px={4}
                                py={6}
                            >
                                <FcGoogle style={{ marginRight: "8px", color: "#6311CB" }} size={20} />
                                Continue with Google
                            </Button>
                        </VStack>

                        <Text
                            color={"#686677"}
                            fontSize={"xs"}
                            fontWeight={500}
                            textAlign={"center"}
                            mt={4}
                            mb={0}
                        >
                            By continuing, you agree to the <Link
                                color={"#100F14"}
                                textDecoration={"underline"}
                                fontWeight={600}
                            >Terms of Service </Link>
                        </Text>
                        <Text
                            color={"#686677"}
                            fontSize={"xs"}
                            fontWeight={500}
                            textAlign={"center"}
                        >
                            and acknowledge you’ve read our <Link
                                color={"#100F14"}
                                textDecoration={"underline"}
                                fontWeight={600}
                            >Privacy Policy.</Link>
                        </Text>
                        <Text
                            color={"#686677"}
                            fontSize={"sm"}
                            fontWeight={500}
                            textAlign={"center"}
                            mt={4}
                        >
                            Already a member?
                            <Button
                                onClick={() => navigate("/ekyc")}
                                _hover={{ opacity: 0.8 }}
                                px={0}
                                fontSize={"sm"}
                                color={"#100F14"}
                                textDecoration={"underline"}
                                fontWeight={600}
                                bg={"transparent"}
                            >Log in</Button>
                        </Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default LoginModal;
