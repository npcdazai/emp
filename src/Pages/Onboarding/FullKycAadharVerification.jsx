import React, { useState, useCallback } from 'react';
import FullKycAadharVerificationFrame from './FullKycAadharVerificationFrame';
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import { SlCloudUpload } from "react-icons/sl";
import { useDropzone } from 'react-dropzone';

const FullKycAadharVerification = () => {
    const [selectedImage, setSelectedImage] = useState(null);
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
        <FullKycAadharVerificationFrame>
            <Box bg={"#F8F3FF"} borderRadius={"md"} p={4}>
                <Text color={'#100F14'} fontWeight={600} fontSize={'sm'} mb={1}>
                    Upload Aadhar Card
                </Text>

                <Text color={'#49475A'} fontWeight={500} fontSize={'xs'} mb={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
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
                            <Image src={selectedImage} alt="Uploaded Aadhar" maxH="240px" objectFit="cover" />
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
                <PrimaryButton title={"Next"}
                onClick={()=> navigate("/full-kyc-pan-verification")}
                 w={"80%"} />
            </HStack>
        </FullKycAadharVerificationFrame>
    );
};

export default FullKycAadharVerification;
