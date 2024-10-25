
import React from 'react'
import { Box, Text, HStack, Image, Input, Icon, Button, Textarea } from '@chakra-ui/react';
import MiniHeader from '../../Components/MiniHeader';
import { OPACITY_ON_LOAD } from '../../Layout/animations';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import contactLogo from '../../assets/contact.webp'

const ContactUs = () => {
    return (
        <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>
            <MiniHeader
                title={"Contact Us"}
                subTitle={"lorem ipsum dolor sit amet"}
            />
            <Box
                bg={'#FFFFFF'}
                borderRadius={'md'}
                boxShadow={'sm'}
                p={8}
            >
                <HStack gap={12} alignItems={"center"} flexWrap={"wrap"} justify={"center"}>

                    <Box>
                        <Box
                            border={"1px solid #D9BCFF"}
                            borderRadius="full"
                            p={4}
                        >
                            <Image
                                borderRadius="full"
                                boxSize="200px"
                                src={contactLogo}
                                alt="Profile Picture"
                                objectFit={"cover"}
                                border={"1px solid #D9BCFF"}
                                p={4}
                            />
                        </Box>
                    </Box>

                    <Box w={"50%"} pl={16}>
                    <Text fontWeight={600} fontSize={"xl"} textAlign={"center"} mb={6}>Get in touch</Text>
                        <ContactUsField label="Subject" placeholder="Subject" defaultValue="" />
                        <ContactUsField label="Email ID" placeholder="Email ID" defaultValue="" />
                        <ContactUsField label="Your Message" placeholder="Type your message here..." defaultValue="" isTextarea />
                        <PrimaryButton title={'Send'} width="100%" />
                    </Box>
                </HStack>
            </Box>
        </Box>
    )
};
const ContactUsField = ({
    label,
    placeholder,
    defaultValue,
    labelColor = "#363636",
    isTextarea = false,
    placeholderColor = "#9D9D9D", 
  }) => (
    <Box width="100%" mb={4}>
      <Text color={labelColor} fontSize="xs" fontWeight="500" mb={1}>
        {label}
      </Text>
      {isTextarea ? (
        <Textarea
          placeholder={placeholder}
          defaultValue={defaultValue}
          size="sm"
          borderColor="#9D9D9D"
          borderRadius="md"
          color="#363636"
          fontWeight={500}
          fontSize="sm"
          resize="none"
          _placeholder={{ color: placeholderColor,fontWeight:400,fontSize:"xs" }}
        />
      ) : (
        <Input
          placeholder={placeholder}
          defaultValue={defaultValue}
          size="sm"
          borderColor="#9D9D9D"
          borderRadius="md"
          color="#363636"
          fontWeight={500}
          fontSize="sm"
          _placeholder={{ color: placeholderColor,fontWeight:400,fontSize:"xs" }}
        />
      )}
    </Box>
  );
  

export default ContactUs