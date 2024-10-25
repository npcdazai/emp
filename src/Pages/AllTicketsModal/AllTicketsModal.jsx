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
    Divider,
    Badge,
    Button,
    Image,
    ModalFooter
} from '@chakra-ui/react';
import { FiDownload } from "react-icons/fi";
import NoInternet from "../../assets/noInternet.jpg";
import { HiOutlineMail } from 'react-icons/hi';

// FileButton component
const FileButton = ({ fileName, fileSize, imageUrl }) => {
    return (
        <Button
            variant="outline"
            border="1px solid #3725EA"
            borderRadius="md"
            px={3}
            p={2}
            justifyContent="space-between"
            boxShadow="sm"
            bg={"rgba(94, 15, 205, 0.05)"}
            _hover={{ opacity: "0.8" }}
        >
            <HStack me={6}>
                <Image boxSize="24px" src={imageUrl} alt={fileName} />
                <Box textAlign="left">
                    <Text
                        fontSize="xs"
                        fontWeight="600"
                        color="#313039"
                        mb={1}
                    >
                        {fileName}
                    </Text>
                    <Text
                        fontSize="xs"
                        color="#6F6E77"
                        fontWeight={500}
                        mb={0}
                    >
                        {fileSize}
                    </Text>
                </Box>
            </HStack>
            <Icon as={FiDownload} boxSize={5} color="#5E0FCD" />
        </Button>
    );
};

// AllTicketsModal component
const AllTicketsModal = ({ isOpen, onClose }) => {
    return (
        <Modal size={'xl'} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <Text
                    color="#667085"
                    fontSize="xs"
                    fontWeight="500"
                    mb={0}
                    px={6}
                    pt={4}
                >
                    TA-97868
                </Text>
                <ModalHeader
                    pt={1}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    pe={12}
                >
                    App loading issue
                    <Badge
                        bg={"#FCF8E9"}
                        color="#E5C862"
                        border={"1px solid #E5C862"}
                        px={2}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="500"
                    >
                        In Progress
                    </Badge>
                </ModalHeader>
                <ModalCloseButton />
                <Divider mt={0} />
                <ModalBody>
                    <Text fontSize="sm" fontWeight="600" mb={2}>
                        Subtype of the ticket
                    </Text>
                    <Text fontSize="xs" fontWeight="500" mb={2}>
                        Aenean et elit vehicula, aliquet libero vitae, tempus massa. Maecenas dapibus molestie arcu vitae tincidunt. Vivamus ac risus sollicitudin, ultrices quam eget, dapibus elit. Fusce lorem arcu, auctor id efficitur sed, ultrices vel orci.
                    </Text>
                    <Text fontSize="xs" fontWeight="500" mb={2}>
                        Aenean et elit vehicula, aliquet libero vitae, tempus massa. Maecenas dapibus molestie arcu vitae tincidunt. Vivamus ac risus sollicitudin, ultrices quam eget, dapibus elit. Fusce lorem arcu, auctor id efficitur sed, ultrices vel orci.
                    </Text>
                    <Text color="#667085" fontSize="sm" fontWeight="600" mb={2}>
                        2 Attachments
                    </Text>
                    <HStack spacing={4}>
                        <FileButton fileName="No Internet" fileSize="28 kb" imageUrl={NoInternet} />
                        <FileButton fileName="No Internet" fileSize="28 kb" imageUrl={NoInternet} />
                    </HStack>
                </ModalBody>

                <ModalFooter flexDirection={"column"} alignItems={"start"} px={0}>
                    <Divider mt={0} />
                    <Box px={6} w={"100%"} >
                        <HStack  justifyContent={"space-between"}>
                            <HStack>
                                <Text color="#667085" fontSize="sm" fontWeight="600" mb={0}>
                                    Assigned to:
                                </Text>
                                <Text color="#363636" fontSize="sm" fontWeight="600" mb={0}>
                                    Siddhesh
                                </Text>
                            </HStack>
                            <Box>
                                <Button
                                    px={2}
                                    variant="outline"
                                    transition={"0.5s all"}
                                    colorScheme='purple'
                                    display={"flex"}
                                    gap={2}
                                    h={8}
                                >
                                    <Text
                                        fontSize={"xs"}
                                        fontWeight={600}
                                        size={"sm"}
                                        mb={0}
                                    >
                                        Mail
                                    </Text>
                                    <Icon as={HiOutlineMail} color="#5E0FCD" w={4} h={4} />
                                </Button>
                            </Box>
                        </HStack>
                    </Box>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AllTicketsModal;
