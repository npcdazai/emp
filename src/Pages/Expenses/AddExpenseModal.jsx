import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useRef, useState } from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputLeftElement, InputRightElement, Select, Textarea } from "@chakra-ui/react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import invoiceGradiant from '../../assets/invoice_gradiant.svg';
import moneyBack from '../../assets/money_back.svg';
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { CheckIcon } from "@chakra-ui/icons";
import { LuCalendar } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const AddExpenseModal = ({ isOpen, onClose }) => {

  const navigate = useNavigate();
  // States for controlling each modal
  const [isAdvanceOpen, setAdvanceOpen] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    issueType: '',
    subtype: '',
    description: '',
    file: null,
  });

  const inputRef = useRef(null);

  // Open file dialog
  const handleFileUpload = () => inputRef.current.click();

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      file: file,
    }));
  };

  // Submit form (example handler)
  const handleSubmit = () => {
    console.log('Form data:', formData);
    // Add your submit logic here, e.g., API call
  };

  return (
    <>
      {/* Main Add Expense Modal */}
      <Modal size={'xl'} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"} fontSize={"md"}>
            Add Expense
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            gap={3}
            p={4}
          >
            <VStack gap={4} px={4}>
              {/* Request Expense Advance Button */}
              <Button
                onClick={() => setAdvanceOpen(true)} // Open Advance Modal
                colorScheme="purple"
                variant={"outline"}
                display={"flex"}
                gap={4}
                justifyContent={"start"}
                w={"100%"}
                h={24}
              >
                <Image w={30} src={invoiceGradiant} />
                <Box
                  display={"flex"}
                  alignItems={"start"}
                  flexDirection={"column"}
                  flexWrap={"wrap"}
                  gap={2}
                  color={'#6311CB'}
                  borderColor={'#6311CB'}
                >
                  <Text as={"span"} fontWeight={600}>
                    Request Expense Advance
                  </Text>
                  <Text
                    as={"span"}
                    fontSize={"xs"}
                    fontWeight={400}
                    textAlign={'start'}
                    whiteSpace={"normal"}
                    wordBreak={"break-word"}
                  >
                    Lorem ipsum dolor sit amet,ed nulla orci psum dolor sit amet,ed nulla orci psum dolor sit amet,ed nulla orci psum dolor sit amet,ed nulla orci
                  </Text>
                </Box>
              </Button>

              {/* Request Reimbursement Button */}
              <Button
              onClick={()=>navigate("/request-reimbursement")}
                colorScheme="purple"
                variant={"outline"}
                display={"flex"}
                gap={4}
                justifyContent={"start"}
                w={"100%"}
                h={24}
              >
                <Image w={30} src={moneyBack} />
                <Box
                  display={"flex"}
                  alignItems={"start"}
                  flexDirection={"column"}
                  flexWrap={"wrap"}
                  gap={2}
                  color={'#6311CB'}
                  borderColor={'#6311CB'}
                >
                  <Text as={"span"} fontWeight={600}>
                    Request Reimbursement
                  </Text>
                  <Text
                    as={"span"}
                    fontSize={"xs"}
                    fontWeight={400}
                    textAlign={'start'}
                    whiteSpace={"normal"}
                    wordBreak={"break-word"}
                  >
                    Lorem ipsum dolor sit amet,ed nulla orci psum dolor sit amet,ed nulla orci psum dolor sit amet,ed nulla orci psum dolor sit amet,ed nulla orci
                  </Text>
                </Box>
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Request Expense Advance Modal */}
      <Modal size={'xl'} isOpen={isAdvanceOpen} onClose={() => setAdvanceOpen(false)} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Advanced Expense Request
            <Text mb={1} fontWeight={"400"} fontSize={"xs"} color={"#606060"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box bg={"#FFFFFF"} borderRadius={"md"} boxShadow={"sm"} p={3} mb={4}>

              <Box mb={4}>
                <Text mb={1} fontWeight={"500"} fontSize={"xs"} color={"#313039"}>
                  Expense type
                </Text>
                <Select
                  size="sm"
                  borderRadius={"md"}
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleInputChange}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>


              <Box mb={4}>
                <Text mb={1} fontWeight={"500"} fontSize={"xs"} color={"#313039"}>
                  Add Amount
                </Text>

                <InputGroup>
                  <InputLeftElement pointerEvents='none' color='#363636' fontWeight={500} fontSize='sm'>
                    ₹
                  </InputLeftElement>
                  <Input 
                  borderRadius={"md"}
                  size="sm"
                  name="subject"
                  value={formData.subject}
                  />
                </InputGroup>
              </Box>



              <Box mb={4}>
                <Text mb={1} fontWeight={"500"} fontSize={"xs"} color={"#313039"}>
                  Date
                </Text>

                <HStack>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none' color='#313039' fontWeight={500} fontSize='xs' top={"-1"}>
                      From
                    </InputLeftElement>
                    <Input size={"sm"} borderRadius={"md"} pl={10} />
                    <InputRightElement  top={"-1"}>
                      <LuCalendar color="#3725EA" />
                    </InputRightElement>
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none' color='#313039' fontWeight={500} fontSize='xs'  top={"-1"}>
                      To
                    </InputLeftElement>
                    <Input size={"sm"} borderRadius={"md"} />
                    <InputRightElement  top={"-1"}>
                      <LuCalendar color="#3725EA" />
                    </InputRightElement>
                  </InputGroup>
                </HStack>
              </Box>



              <Box mb={4}>
                <Text mb={1} fontWeight={"500"} fontSize={"xs"} color={"#313039"}>
                  Evidence of Appointment
                </Text>

                <Input ref={inputRef} type="file" display="none" onChange={handleFileChange} />
                <Button
                  borderRadius={"md"}
                  size="sm"
                  onClick={handleFileUpload}
                  border={"1px solid #e2e8f0"}
                  w={"100%"}
                  bg="transparent"
                  color="#3725EA"
                  textDecoration={"underline"}
                  display={"flex"}
                  justifyContent={"start"}
                >
                  Upload File
                </Button>
              </Box>


              <Box mt={4}>
                <Text mb={1} fontWeight={"500"} fontSize={"xs"} color={"#313039"}>
                  Comments
                </Text>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your issue here"
                  size="sm"
                  borderRadius={"md"}
                  resize={"none"}
                />
              </Box>
              <HStack mt={6} justifyContent={"center"}>
                <SecondaryButton title={"Cancel"} />
                <PrimaryButton title={"Request Expense"} />
              </HStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddExpenseModal;
