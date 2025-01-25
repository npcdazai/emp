import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Box,
    HStack,
    Image,
} from '@chakra-ui/react'


const Card = ({ title, designation, lastActiveTime, position }) => {
    return (
        <Box display={'flex'} flexDirection={'column'} gap={0} mb={4}>
            <Box
                border={"1px solid #DFDCFF"}
                borderRadius={"md"}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                p={2}
            >
                <HStack justify={"space-between"}>
                    <HStack>
                        <Image width={"30px"} src="https://www.optifii.com/public/img/black_logo.svg" alt="logo" />
                        <Text fontSize={"sm"} fontWeight={600} mb={0}>{title}</Text>
                    </HStack>
                    <Box>
                        <Text color={"#FF5454"} fontSize={"xs"} mb={0}>
                            {position}
                        </Text>
                    </Box>
                </HStack>

                <HStack mt={4}>
                    <Text color={"#787878"} fontSize={"xs"} fontWeight={500} mb={1}>
                        Designation
                    </Text>
                    <Text color={"#000000"} fontSize={"xs"} fontWeight={500} mb={1}>
                        {designation}
                    </Text>
                </HStack>
                <HStack>
                    <Text color={"#787878"} fontSize={"xs"} fontWeight={500}>
                        Last active on
                    </Text>
                    <Text color={"#000000"} fontSize={"xs"} fontWeight={500}>
                        {lastActiveTime}
                    </Text>
                </HStack>
            </Box >
            <Button
                bg={"linear-gradient(90deg, #3725EA 0%, #5E0FCD 100%)"}
                color={"#FFFFFF"}
                fontSize={"xs"}
                w={"100%"}
                size={"sm"}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                _hover={{ opacity: 0.9 }}
                transition={"0.3s ease"}
            >
                Switch Account
            </Button>
        </Box>

    )
}

const SwitchProfileModal = ({ isOpen, onOpen, onClose }) => {



    return (

        <Modal size={'xl'} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Switch Profile</ModalHeader>
                <ModalCloseButton />
                <ModalBody>


                    <Card title={"Optifii Pvt Ltd."} designation={"Architect"} lastActiveTime={"02/05/2023"} position={"Ex-employee"} />


                    <Card title={"Developers Pvt Ltd."} designation={"Developer"} lastActiveTime={"05/05/2024"} position={"Cr-employee"} />



                </ModalBody>

            </ModalContent>
        </Modal>
    )
}

export default SwitchProfileModal