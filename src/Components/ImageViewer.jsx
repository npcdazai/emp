import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ImageViewer = ({ src, isOpen, onClose }) => {
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalCloseButton /> */}
          <ModalBody p={4}>
            <Image
              rounded={6}
              w={"100%"}
              h={"100%"}
              src={"https://tanami.betadelivery.com/" + src}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageViewer;
