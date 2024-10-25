import { Box, Text, HStack, Image, Input, Icon, useDisclosure } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import MiniHeader from '../../Components/MiniHeader';
import { OPACITY_ON_LOAD } from '../../Layout/animations';
import { AiOutlineEdit } from "react-icons/ai";
import { BiCloudUpload } from "react-icons/bi";
import { RxLockClosed } from "react-icons/rx";
import { RiArrowRightSLine, RiRotateLockLine } from "react-icons/ri";
import { GoArrowSwitch } from "react-icons/go";
import DisplayProfile from './DisplayProfile';
import SwitchProfileModal from './SwitchProfileModal';

const Profile = () => {
    const navigate = useNavigate(); 
    const { isOpen, onOpen, onClose } = useDisclosure()


    // Handle navigation to edit profile page
    const handleEditProfile = () => {
        navigate('/profile/edit-profile'); 
    };


    return (
        <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>
            <MiniHeader
                title={"Your Profile"}
                subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />

            <Box
                bg={'#FFFFFF'}
                borderRadius={'md'}
                boxShadow={'sm'}
                p={8}
            >
                <Box display={"flex"} justifyContent={"end"}>
                    <HStack
                        cursor={'pointer'}
                        rounded={'md'}
                        _hover={{ bg: "gray.100" }}
                        transition={'0.5s'}
                        py={1}
                        px={3}
                        border={"1px solid rgba(99, 17, 203, 0.25)"}
                        onClick={handleEditProfile}  // Call handleEditProfile on click
                    >
                        <AiOutlineEdit color={"#3725EA"} fontSize={"16px"} />
                        <Text
                            bgGradient="linear(to-l, #3725EA, #5E0FCD)"
                            bgClip="text"
                            fontSize={"sm"}
                            mb={0}
                            fontWeight={"500"}
                        >
                            Edit
                        </Text>
                    </HStack>
                </Box>

                <HStack gap={12} alignItems={"flex-start"} flexWrap={"wrap"}>

                    <Box>
                        <DisplayProfile />
                    </Box>

                    <Box>
                        <ProfileInfo label="Name" value="Kartikey Gautam" />
                        <ProfileInfo label="Email ID" value="ajinkyaanand@5gth.com" />
                        <ProfileInfo label="Phone number" value="9854412589" />
                        <ProfileInfo label="Designation" value="Architect" />
                    </Box>
                </HStack>
            </Box>

            <HStack
                bg={'#FFFFFF'}
                borderRadius={'md'}
                boxShadow={'sm'}
                py={5}
                px={4}
                mt={4}
                justify={"space-between"}
                border={"1px solid #fff"}
                _hover={{ border: "1px solid #6311CB", bg: "#F8F2FF" }}
                transition="all 0.3s ease"

            >
                <HStack gap={4}>
                    <HStack
                        borderRadius="full"
                        boxSize={8}
                        bg={"#fff"}
                        justify={"center"}
                    >
                        <RiRotateLockLine  color='#6311CB' />
                    </HStack>
                    <Text
                        color={"#383838"}
                        fontSize={"sm"}
                        fontWeight={500}
                        mb={0}
                    >
                        Change Password
                    </Text>
                </HStack>
                <RiArrowRightSLine color='#363636' />
            </HStack>

            <HStack
                onClick={onOpen}
                bg={'#FFFFFF'}
                borderRadius={'md'}
                boxShadow={'sm'}
                py={5}
                px={4}
                justify={"space-between"}
                border={"1px solid #fff"}
                _hover={{ border: "1px solid #6311CB", bg: "#F8F2FF" }}
                transition="all 0.3s ease"
            >
                <HStack  gap={4}>
                    <HStack
                        borderRadius="full"
                        boxSize={8}
                        bg={"#fff"}
                        justify={"center"}
                    >
                        <GoArrowSwitch color='#6311CB' />
                    </HStack>

                    <Text
                        color={"#383838"}
                        fontSize={"sm"}
                        fontWeight={500}
                        mb={0}
                    >
                        Switch Profile
                    </Text>
                </HStack>
                <RiArrowRightSLine color='#363636' />
            </HStack>

            <SwitchProfileModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
        </Box>
    );
};

const ProfileInfo = ({ label, value }) => (
    <>
        <Text color={"#868686"} fontSize={"xs"} fontWeight={"500"} mb={1}>
            {label}
        </Text>
        <Text color={"#363636"} fontSize={"sm"} fontWeight={"600"} mb={3}>
            {value}
        </Text>
    </>
);

export default Profile;
