import React from 'react';
import {
    Box, HStack, Text, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalContent,
    useDisclosure, Button, Image
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PendingSvg from '../../assets/pending.svg'; // Assuming the pending.svg is in your assets folder

// Define motion components
const MotionBox = motion(Box);
const MotionImage = motion(Image); // Motion component for Image

const PendingModal = ({ isOpen, onClose }) => {

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
                            <HStack justifyContent={"center"} mb={8}>
                                <MotionImage
                                    src={PendingSvg}
                                    alt="Pending SVG"
                                    boxSize="100px"
                                    initial={{ scale: 0.8, rotate: 0 }}
                                    animate={{ scale: 1, rotate: 360 }}
                                    transition={{ duration: 1.9, type: "spring", bounce: 0.5 }}
                                />
                            </HStack>

                            <Text
                                color={"#100F14"}
                                fontSize={"md"}
                                fontWeight={"600"}
                                textAlign={"center"}
                                mb={2}
                            >
                               Your KYC is in pending stage. Please wait while verification is completed.
                            </Text>
                        </MotionBox>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default PendingModal;
