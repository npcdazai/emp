import { Box, Container, HStack, Image, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SecondaryButton from '../../Components/Buttons/SecondaryButton'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import optifii_logo from '../../assets/optifii_logo.svg'
import LoginModal from '../../Components/SuccessPendingModal/LoginModal';


const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            bg={"#FFFFFF"}
        >
            <Container maxW='container.xl' py={2}>
                <HStack
                    justifyContent={"space-between"}
                >
                    <Box>
                        <Image src={optifii_logo} alt="Optifii Logo" />
                    </Box>
                    <HStack>
                        <SecondaryButton onClick={onOpen} title={"Login"} />
                        <PrimaryButton title={"Contact sales"} />
                    </HStack>
                </HStack>
                <LoginModal  isOpen={isOpen} onClose={onClose} />
            </Container>
        </Box>
    )
}

export default Header