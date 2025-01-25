import { Box, Text, HStack, Image, Input, Icon, Button } from '@chakra-ui/react';
import React, { useRef } from 'react';
import MiniHeader from '../../Components/MiniHeader';
import { OPACITY_ON_LOAD } from '../../Layout/animations';
import { BiCloudUpload } from "react-icons/bi";
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import SecondaryButton from '../../Components/Buttons/SecondaryButton';
import DisplayProfile from './DisplayProfile';

const EditProfile = () => {
    const inputRef = useRef();

    // Trigger the hidden file input
    const handleFileUploadClick = () => {
        inputRef.current.click();
    };

    // Handle saving profile (you may add logic to actually handle form submission)
    const handleSaveProfile = () => {
        console.log('Profile saved');
        // Add actual save logic here (e.g., API call)
    };

    return (
        <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>
            <MiniHeader
                title={"Edit Your Profile"}
                subTitle={"Update your information below."}
            />

            <Box
                bg={'#FFFFFF'}
                borderRadius={'md'}
                boxShadow={'sm'}
                p={8}
            >
                <HStack alignItems={"flex-start"} flexWrap={"wrap"}>
                    {/* Profile Picture and Upload */}

                    <HStack
                        w={"30%"}
                        justify={"center"}
                    >
                        <DisplayProfile />
                    </HStack>

                    {/* Editable Profile Information */}
                    <Box w={"50%"} pl={16} borderLeft={'1px dashed #989898'}>
                        <ProfileField label="Name" placeholder="Enter your name" defaultValue="Yami Gautam" />
                        <ProfileField label="Email ID" placeholder="Enter your email" defaultValue="ajinkyaanand@5gth.com" />
                        <ProfileField label="Phone number" placeholder="Enter your phone number" defaultValue="9854412589" />
                        <ProfileField label="Designation" placeholder="Enter your designation" defaultValue="Architect" />
                    </Box>

                </HStack>
                <HStack
                    gap={4}
                    justify={"center"}
                    mt={4}
                >
                    <SecondaryButton onClick={handleSaveProfile} title={'cancel'} />
                    <PrimaryButton onClick={handleSaveProfile} title={'Save Profile'} />
                </HStack>

            </Box>

        </Box>
    );
};


// Profile Field Component
const ProfileField = ({ label, placeholder, defaultValue, labelColor = "#363636" }) => (
    <Box width="100%" mb={4}>
        <Text color={labelColor} fontSize="xs" fontWeight="500" mb={1}>
            {label}
        </Text>
        <Input
            placeholder={placeholder}
            defaultValue={defaultValue}
            size="sm"
            borderColor="#9D9D9D"
            borderRadius="md"
            color={"#363636"}
            fontWeight={500}
            fontSize={"sm"}
        />
    </Box>
);


export default EditProfile;
