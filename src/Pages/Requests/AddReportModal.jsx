import { Button } from "@chakra-ui/button";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import React from "react";
import SeccondaryButton from "../../Components/Buttons/SecondaryButton";
import { AddIcon, EmailIcon } from "@chakra-ui/icons";
import { PiReceipt, PiReceiptBold } from "react-icons/pi";
import { useNavigate } from "react-router";

const AddReportModal = ({isOpen, onClose}) => {
    const navigate = useNavigate()
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={'center'} fontSize={'md'}>Add Report</ModalHeader>
        <ModalCloseButton />
        <ModalBody display={'flex'} justifyContent={'center'}  flexDirection={'column'} gap={3} p={6} >
            <SeccondaryButton onClick={()=> navigate('/reports/add-new-report')} leftIcon={<AddIcon />} title={"Add to New Report"}/>
            <SeccondaryButton onClick={()=> navigate('/reports')} leftIcon={<PiReceiptBold />} title={"Add To Existing Report"}/>
            
        </ModalBody>

      </ModalContent>
    </Modal>
  );
};

export default AddReportModal;
