import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
    Box,
    HStack,
    Icon,
} from '@chakra-ui/react';
import { FaRegUser } from "react-icons/fa";

// data for notifications
const notifications = [
    { id: 1, title: "Notification 1", description: "Description for notification 1", time: "10:00 AM" },
    { id: 2, title: "Notification 2", description: "Description for notification 2", time: "10:30 AM" },
    { id: 3, title: "Notification 3", description: "Description for notification 3", time: "11:00 AM" },
    { id: 4, title: "Notification 4", description: "Description for notification 4", time: "11:30 AM" },
];

const Notifications = ({ isOpen, onClose }) => {

    return (
        <Modal size={'xl'} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Notifications</ModalHeader>
                <ModalCloseButton />
                <ModalBody px={0} pt={2} pb={6}>
                    {notifications.map((notification) => (
                        <Box
                            key={notification.id}
                            display={"flex"}
                            justifyContent={"space-between"}
                            px={4}
                            py={2}
                            _hover={{ backgroundColor: "#DFDCFF" }}
                            transition={"background-color 0.3s ease"}
                        >
                            <HStack w={"85%"}>
                                <Box
                                    py={2}
                                    px={2}
                                    bg={"linear-gradient(180deg, #6211CB 0%, #C33FAD 100%)"}
                                    borderRadius={"full"}
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                >
                                    <Icon color={"#fff"} as={FaRegUser} />
                                </Box>

                                <Box>
                                    <Text
                                        fontSize={"sm"}
                                        fontWeight={600}
                                        mb={0}
                                    >
                                        {notification.title}
                                    </Text>
                                    <Text
                                        fontSize={"xs"}
                                        fontWeight={500}
                                        mb={0}
                                        color={"#868686"}
                                    >
                                        {notification.description}
                                    </Text>
                                </Box>
                            </HStack>
                            <Box>
                                <Text
                                    fontSize={"xs"}
                                    fontWeight={600}
                                    mb={0}
                                >
                                    {notification.time}
                                </Text>
                            </Box>
                        </Box>
                    ))}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default Notifications;
