import React, { useState } from 'react';
import FullKycFaceVerificationFrame from './FullKycFaceVerificationFrame';
import { Box, HStack, Image, Input, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import face_verification from '../../assets/face_verification.svg'


const FullKycFaceVerification = () => {

    const navigate = useNavigate();

    return (
        <FullKycFaceVerificationFrame>
            <Box
                bg={"#F8F3FF"}
                borderRadius={"md"}
                p={4}
            >
                <Text color={'#100F14'} fontWeight={600} fontSize={'sm'} mb={1}>
                    Position your face in the oval
                </Text>

                <Text color={'#49475A'} fontWeight={500} fontSize={'xs'}  mb={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                </Text>

                <Box my={2} boxSize="xxl" p={4}>
                    <Image src={face_verification} width="100%" alt="Face Verification" />
                </Box>

            </Box>
            <HStack justifyContent={"center"} mt={4} >
                <PrimaryButton title={"Next"}
                     onClick={()=> navigate("/full-kyc-aadhar-verification")}
                    w={"80%"} />
            </HStack>

        </FullKycFaceVerificationFrame>
    );
};

export default FullKycFaceVerification;
