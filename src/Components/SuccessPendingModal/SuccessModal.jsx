import React from 'react';
import {
    Box, HStack, Text, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalContent,
    useDisclosure, Button
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Define motion components
const MotionBox = motion(Box);
const MotionSvg = motion("svg");
const MotionCircle = motion.circle;
const MotionPolyline = motion.polyline;

const SuccessModal = ({isOpen,onClose}) => {

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <MotionBox
                            textAlign="center"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                            mb={8}
                        >
                            {/* svg with Framer Motion animation */}
                            <HStack justifyContent={"center"} mb={8}>
                                <MotionSvg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 130.2 130.2"
                                    width="100px"
                                    height="100px"
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                                >
                                    <MotionCircle
                                        cx="65.1"
                                        cy="65.1"
                                        r="62.1"
                                        fill="#65F37C"
                                        stroke="#159F2B"
                                        strokeWidth="0"
                                        strokeDasharray="1000"
                                        strokeDashoffset="1000"
                                        initial={{ strokeDashoffset: 1000 }}
                                        animate={{ strokeDashoffset: 0 }}
                                        transition={{ duration: 1 }}
                                    />
                                    <MotionPolyline
                                        points="100.2,40.2 51.5,88.8 29.8,67.5"
                                        fill="none"
                                        stroke="#159F2B"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        strokeDasharray="1000"
                                        strokeDashoffset="-100"
                                        initial={{ strokeDashoffset: 1000 }}
                                        animate={{ strokeDashoffset: 0 }}
                                        transition={{ duration: 0.7, delay: 1 }}
                                    />
                                </MotionSvg>
                            </HStack>

                            <Text
                                color={"#100F14"}
                                fontSize={"md"}
                                fontWeight={"600"}
                                textAlign={"center"}
                                mb={2}
                            >
                                KYC is done successfully!
                            </Text>
                            <Text
                                color={"#686677"}
                                fontSize={"xs"}
                                fontWeight={"500"}
                                textAlign={"center"}
                            >
                                You’re all set and ready to start
                            </Text>

                            <HStack justifyContent={"center"}>
                                <Button
                                    onClick={onClose}
                                    _hover={{ opacity: 0.8 }}
                                    px={0}
                                    fontSize={"sm"}
                                    color={"#3725EA"}
                                    textDecoration={"underline"}
                                    fontWeight={600}
                                    bg={"transparent"}
                                >
                                    Continue
                                </Button>
                            </HStack>

                        </MotionBox>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default SuccessModal;
