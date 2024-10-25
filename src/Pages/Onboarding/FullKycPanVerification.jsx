import React, { useState, useCallback } from 'react';
import FullKycPanVerificationFrame from './FullKycPanVerificationFrame';
import {
    Box, HStack, Image, Text, VStack, useDisclosure,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import { SlCloudUpload } from "react-icons/sl";
import { useDropzone } from 'react-dropzone';
// import SuccessModal from '../../Components/SuccessPendingModal/SuccessModal';
import PendingModal from '../../Components/SuccessPendingModal/PendingModal';

const FullKycPanVerification = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    // Dropzone setup
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*',
    });

    return (
        <>
            <FullKycPanVerificationFrame>
                <Box bg={"#F8F3FF"} borderRadius={"md"} p={4}>
                    <Text color={'#100F14'} fontWeight={600} fontSize={'sm'} mb={1}>
                        Upload PAN Card
                    </Text>

                    <Text color={'#49475A'} fontWeight={500} fontSize={'xs'} mb={2}>
                        Please upload a clear image of your PAN card.
                    </Text>

                    <Box my={2} h={300} p={4}>
                        <VStack
                            {...getRootProps()}
                            border={"1px dashed #100F14"}
                            boxShadow={"md"}
                            borderRadius={"md"}
                            bg={"#fff"}
                            p={4}
                            h={"280px"}
                            justifyContent={"center"}
                            cursor="pointer"
                        >
                            <input {...getInputProps()} />
                            {selectedImage ? (
                                <Image src={selectedImage} alt="Uploaded PAN Card" maxH="240px" objectFit="cover" />
                            ) : (
                                <>
                                    <SlCloudUpload color={"#6311CB"} size={100} />
                                    <Text
                                        color={"#6311CB"}
                                        fontWeight={"600"}
                                        fontSize={"sm"}
                                        mt={'4'}
                                        mb={0}
                                    >
                                        {isDragActive ? 'Drop the image here...' : 'Upload from gallery'}
                                    </Text>
                                </>
                            )}
                        </VStack>
                    </Box>
                </Box>

                <HStack justifyContent={"center"} mt={4}>
                    <PrimaryButton title={"Next"} w={"80%"} onClick={onOpen} /> 
                </HStack>
            </FullKycPanVerificationFrame>

            {/* Success modal */}
            <PendingModal isOpen={isOpen} onClose={onClose} /> 
        </>
    );
};

export default FullKycPanVerification;
