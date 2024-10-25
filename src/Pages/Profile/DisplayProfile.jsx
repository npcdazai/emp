import { Icon } from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, HStack, Text } from "@chakra-ui/layout";
import React, { useContext, useRef, useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import GlobalStateContext from "../../Contexts/GlobalStateContext";

const DisplayProfile = () => {
  const inputRef = useRef();
  const { image, setImage } = useContext(GlobalStateContext);


    // Trigger the hidden file input
    const handleFileUploadClick = () => {
        inputRef.current.click();
    };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Box>
      <Image
        borderRadius="full"
        boxSize="200px"
        src={image}
        alt="Profile Picture"
        objectFit={"cover"}
      />

      <Input
        type="file"
        ref={inputRef}
        display="none"
        onChange={handleFileChange}
      />
      <HStack
        justify={"center"}
        mt={4}
        cursor="pointer"
        onClick={handleFileUploadClick}
      >
        <Icon as={BiCloudUpload} color={"#6311CB"} boxSize={6} />
        <Text color={"#6311CB"} fontSize={"sm"} fontWeight={"600"} mb={0}>
          Upload
        </Text>
      </HStack>
    </Box>
  );
};

export default DisplayProfile;
