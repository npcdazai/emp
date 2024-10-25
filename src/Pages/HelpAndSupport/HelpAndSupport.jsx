import React, { useState, useRef } from "react";
import {
  Box,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Text,
  Input,
  Textarea,
  Select,
  Button,
  TabIndicator,
  VStack,
  Icon,
  Badge,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import MiniHeader from "../../Components/MiniHeader";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { CiCalendarDate } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import AllTicketsModal from "../AllTicketsModal/AllTicketsModal";

const HelpAndSupport = () => {
  const [value, setValue] = useState(""); // State to store the textarea value
  const handleInputChange = (event) => setValue(event.target.value); // Update the state with the textarea input value

  const inputRef = useRef(null);
  const handleFileUpload = () => inputRef.current.click(); // Trigger click on hidden input

  // For controlling the modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const faqItems = [
    { title: "How to create new account?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry' Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry'" },
    { title: "How to reset password?", content: "Description for resetting password." },
    { title: "How to manage expenses?", content: "Description for managing expenses." },
    { title: "How to redeem gift cards?", content: "Description for redeeming gift cards." },
    { title: "How to submit tickets?", content: "Description for submitting tickets." },
  ];

  return (
    <Box {...OPACITY_ON_LOAD} p={4} overflowX={"auto"}>
      <MiniHeader
        title={"Help and Support"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />

      {/* Ticket Creation Box */}
      <Box bg={"#FFFFFF"} borderRadius={"md"} boxShadow={"sm"} p={3} mb={4}>
        <Text mb={2} fontWeight={"600"} fontSize={"md"}>
          Raise a Ticket
        </Text>

        <HStack spacing={4} mb={4}>
          {/* Subject Input */}
          <Box w={"50%"}>
            <Text mb={1} fontWeight={"500"} fontSize={"sm"} color={"#313039"}>
              Subject
            </Text>
            <Input borderRadius={"md"} placeholder="Enter your subject" size="sm" />
          </Box>

          {/* Type of Issue Select */}
          <Box w={"50%"}>
            <Text mb={1} fontWeight={"500"} fontSize={"sm"} color={"#313039"}>
              Type of Issue
            </Text>
            <Select placeholder="Select option" size="sm" borderRadius={"md"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </HStack>

        <HStack spacing={4}>
          <Box w={"50%"}>
            <Text mb={1} fontWeight={"500"} fontSize={"sm"} color={"#313039"}>
              Add Screenshot
            </Text>

            <Input ref={inputRef} type="file" display="none" />
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

          {/* Subtype Select */}
          <Box w={"50%"}>
            <Text mb={1} fontWeight={"500"} fontSize={"sm"} color={"#313039"}>
              Subtype
            </Text>
            <Select placeholder="Select option" size="sm" borderRadius={"md"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </HStack>

        <Box mt={4}>
          <Text mb={1} fontWeight={"500"} fontSize={"sm"} color={"#313039"}>
            Summarize your issue
          </Text>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Describe your issue here"
            size="sm"
            borderRadius={"md"}
            resize={"none"}
          />
        </Box>
        <Box mt={4}>
          <PrimaryButton title={"Submit Ticket"} />
        </Box>
      </Box>

      {/* Tabs for FAQ */}
      <Box mt={4}>
        <HStack spacing={4} alignItems={"baseline"}>
          <Box bg={"#FFFFFF"} borderRadius={"md"} boxShadow={"sm"} p={3} w={"50%"}>
            <Text mb={2} fontWeight={"600"} fontSize={"md"}>
              FAQ
            </Text>
            <Tabs variant="unstyled">
              <TabList h={10} gap={4}>
                <Tab
                  _selected={{ color: "#fff", bg: "linear-gradient(90deg, #3725EA 0%, #5E0FCD 100%)" }}
                  py={1}
                  px={8}
                  borderRadius={"md"}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  border={"1px solid #7D7D7D"}
                  bg="transparent"
                  color="#7D7D7D"
                >
                  All
                </Tab>
                <Tab
                  _selected={{ color: "#fff", bg: "linear-gradient(90deg, #3725EA 0%, #5E0FCD 100%)", border: "none" }}
                  py={1}
                  px={4}
                  border={"1px solid #7D7D7D"}
                  borderRadius={"md"}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  color={"#7D7D7D"}
                  bg="transparent"
                >
                  Expense
                </Tab>
                <Tab
                  _selected={{ color: "#fff", bg: "linear-gradient(90deg, #3725EA 0%, #5E0FCD 100%)", border: "none" }}
                  py={1}
                  px={4}
                  border={"1px solid #7D7D7D"}
                  borderRadius={"md"}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  color={"#7D7D7D"}
                  bg="transparent"
                >
                  Benefits
                </Tab>
                <Tab
                  _selected={{ color: "#fff", bg: "linear-gradient(90deg, #3725EA 0%, #5E0FCD 100%)", border: "none" }}
                  py={1}
                  px={4}
                  border={"1px solid #7D7D7D"}
                  borderRadius={"md"}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  color={"#7D7D7D"}
                  bg="transparent"
                >
                  Gift Cards
                </Tab>
              </TabList>


              {/* Tab Panels */}
              <TabPanels>
                <TabPanel py={4} pl={0} pr={0}>
                  <Accordion defaultIndex={[0]} allowMultiple>
                    {faqItems.map((item, index) => (
                      <AccordionItem
                        key={index}
                        borderTop="none"
                        borderBottom="none"
                      >
                        {({ isExpanded }) => (
                          <>
                            <AccordionButton
                              bg={
                                isExpanded
                                  ? "linear-gradient(0deg, rgba(94, 15, 205, 0.05), rgba(94, 15, 205, 0.05))"
                                  : "transparent"
                              }
                              border={"1px solid #DCDCDC"}
                              borderRadius={"md"}
                              mt={2}
                            >
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                color={"#313039"}
                                fontWeight={500}
                                fontSize={"sm"}
                              >
                                {item.title}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel
                              pb={4}
                              bg={
                                isExpanded
                                  ? "linear-gradient(0deg, rgba(94, 15, 205, 0.05), rgba(94, 15, 205, 0.05))"
                                  : "transparent"
                              }
                              borderRadius={"md"}
                              color={"#313039"}
                              fontWeight={500}
                              fontSize={"xs"}
                            >
                              {item.content}
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabPanel>
                <TabPanel py={4} pl={0} pr={0}>
                  Reimbursement content
                </TabPanel>
                <TabPanel py={4} pl={0} pr={0}>
                  <Accordion defaultIndex={[0]} allowMultiple>
                    {faqItems.map((item, index) => (
                      <AccordionItem
                        key={index}
                        borderTop="none"
                        borderBottom="none"
                      >
                        {({ isExpanded }) => (
                          <>
                            <AccordionButton
                              bg={
                                isExpanded
                                  ? "linear-gradient(0deg, rgba(94, 15, 205, 0.05), rgba(94, 15, 205, 0.05))"
                                  : "transparent"
                              }
                              border={"1px solid #DCDCDC"}
                              borderRadius={"md"}
                              mt={2}
                            >
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                color={"#313039"}
                                fontWeight={500}
                                fontSize={"sm"}
                              >
                                {item.title}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel
                              pb={4}
                              bg={
                                isExpanded
                                  ? "linear-gradient(0deg, rgba(94, 15, 205, 0.05), rgba(94, 15, 205, 0.05))"
                                  : "transparent"
                              }
                              borderRadius={"md"}
                              color={"#313039"}
                              fontWeight={500}
                              fontSize={"xs"}
                            >
                              {item.content}
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabPanel>
                <TabPanel py={4} pl={0} pr={0}>
                  Reimbursement content
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          <Box bg={"#FFFFFF"} borderRadius={"md"} boxShadow={"sm"} p={3} w={"50%"}>
            <Text mb={3} fontWeight={"600"} fontSize={"md"}>
              All Tickets
            </Text>
            <HStack>
              <Text
                color={"#667085"}
                fontSize={"xs"}
                mb={0}
                fontWeight={500}
              >
                Date
              </Text>
              <Icon as={CiCalendarDate} color="#5E0FCD" w={4} h={4} />
            </HStack>
            <HStack alignItems={"baseline"}>
              <Box>
                <Tabs position='relative' variant='unstyled'>
                  <TabList justifyContent={"end"}>
                    <Tab
                      color={"#313039"}
                      fontSize={"sm"}
                      fontWeight={500}
                      _selected={{
                        color: "#5E0FCD",
                      }}
                    >
                      In Progress
                    </Tab>
                    <Tab
                      color={"#313039"}
                      fontSize={"sm"}
                      fontWeight={500}
                      _selected={{
                        color: "#5E0FCD",
                      }}
                    >
                      Completed
                    </Tab>
                    <Tab
                      color={"#313039"}
                      fontSize={"sm"}
                      fontWeight={500}
                      _selected={{
                        color: "#5E0FCD",
                      }}
                    >
                      Terminated
                    </Tab>
                  </TabList>
                  <TabIndicator mt='-1.5px' height='2px' bg='#5E0FCD' borderRadius='1px' />
                  <TabPanels>
                    <TabPanel px={0} py={4}>
                      <Box
                        p={4}
                        borderWidth="1px"
                        borderRadius="lg"
                        boxShadow="sm"
                        borderColor="#EDEDED"
                        maxW="600px"
                        mx="auto"
                      >
                        <Box>
                          <Box>
                            <HStack justifyContent={"space-between"} alignItems={"start"} mb={2}>
                              <Text color="#667085"
                                fontSize="xs"
                                fontWeight="500"
                                mb={0}
                                onClick={onOpen}
                                cursor={"pointer"}>
                                TA-97868
                              </Text>
                              <Icon as={HiOutlineMail} color="#5E0FCD" w={5} h={5} />
                            </HStack>
                            <Box>
                              <HStack>
                                <Text
                                  fontWeight="500"
                                  fontSize="sm"
                                  color="#363636"
                                  mb={2}
                                >
                                  App loading issue
                                </Text>
                                <Text
                                  fontWeight="500"
                                  fontSize="sm"
                                  color="#363636"
                                  mb={2}
                                >
                                  {" "}
                                  &#x276F; Lorem ipsum dolor
                                </Text>
                                <Text color="#858585" fontSize="xs" mb={2}>
                                  17 Jan 2023
                                </Text>
                              </HStack>
                              <HStack>
                                <Text fontSize="xs" color="#667085">
                                  Aenean et elit vehicula, aliquet libero vitae, tempus massa.
                                  Maecenas dapibus molestie arcu vitae tincidunt. Vivamus ac risus
                                  sollicitudin, ultrices quam eget, dapibus elit.
                                </Text>
                                <Badge
                                  bg={"#FCF8E9"}
                                  color="#E5C862"
                                  border={"1px solid #E5C862"}
                                  px={1}
                                  py={2}
                                  borderRadius="full"
                                  fontSize="xs"
                                  fontWeight="500"
                                >
                                  In Progress
                                </Badge>
                              </HStack>
                            </Box>
                          </Box>

                        </Box>
                      </Box>
                    </TabPanel>
                    <TabPanel px={0} py={4}>
                      <Box
                        p={4}
                        borderWidth="1px"
                        borderRadius="lg"
                        boxShadow="sm"
                        borderColor="#EDEDED"
                        maxW="600px"
                        mx="auto"
                      >
                        <Box>
                          <Box>
                            <HStack justifyContent={"space-between"} alignItems={"start"} mb={2}>
                              <Text color="#667085"
                                fontSize="xs"
                                fontWeight="500"
                                mb={0}
                                onClick={onOpen}
                                cursor={"pointer"}>
                                TA-97868
                              </Text>
                              <Icon as={HiOutlineMail} color="#5E0FCD" w={5} h={5} />
                            </HStack>
                            <Box>
                              <HStack>
                                <Text
                                  fontWeight="500"
                                  fontSize="sm"
                                  color="#363636"
                                  mb={2}
                                >
                                  App loading issue
                                </Text>
                                <Text
                                  fontWeight="500"
                                  fontSize="sm"
                                  color="#363636"
                                  mb={2}
                                >
                                  {" "}
                                  &#x276F; Lorem ipsum dolor
                                </Text>
                                <Text color="#858585" fontSize="xs" mb={2}>
                                  17 Jan 2023
                                </Text>
                              </HStack>
                              <HStack>
                                <Text fontSize="xs" color="#667085">
                                  Aenean et elit vehicula, aliquet libero vitae, tempus massa.
                                  Maecenas dapibus molestie arcu vitae tincidunt. Vivamus ac risus
                                  sollicitudin, ultrices quam eget, dapibus elit.
                                </Text>
                                <Badge
                                  bg={"#E0FFE5"}
                                  color="#159F2B"
                                  border={"1px solid #159F2B"}
                                  px={1}
                                  py={2}
                                  borderRadius="full"
                                  fontSize="xs"
                                  fontWeight="500"
                                >
                                  Completed
                                </Badge>
                              </HStack>
                            </Box>
                          </Box>

                        </Box>
                      </Box>
                    </TabPanel>
                    <TabPanel px={0} py={4}>
                      <Box
                        p={4}
                        borderWidth="1px"
                        borderRadius="lg"
                        boxShadow="sm"
                        borderColor="#EDEDED"
                        maxW="600px"
                        mx="auto"
                      >
                        <Box>
                          <Box>
                            <HStack justifyContent={"space-between"} alignItems={"start"} mb={2}>
                              <Text color="#667085"
                                fontSize="xs"
                                fontWeight="500"
                                mb={0}
                                onClick={onOpen}
                                cursor={"pointer"}>
                                TA-97868
                              </Text>
                              <Icon as={HiOutlineMail} color="#5E0FCD" w={5} h={5} />
                            </HStack>
                            <Box>
                              <HStack>
                                <Text
                                  fontWeight="500"
                                  fontSize="sm"
                                  color="#363636"
                                  mb={2}
                                >
                                  App loading issue
                                </Text>
                                <Text
                                  fontWeight="500"
                                  fontSize="sm"
                                  color="#363636"
                                  mb={2}
                                >
                                  {" "}
                                  &#x276F; Lorem ipsum dolor
                                </Text>
                                <Text color="#858585" fontSize="xs" mb={2}>
                                  17 Jan 2023
                                </Text>
                              </HStack>
                              <HStack>
                                <Text fontSize="xs" color="#667085">
                                  Aenean et elit vehicula, aliquet libero vitae, tempus massa.
                                  Maecenas dapibus molestie arcu vitae tincidunt. Vivamus ac risus
                                  sollicitudin, ultrices quam eget, dapibus elit.
                                </Text>
                                <Badge
                                  bg={"#FFD8D8"}
                                  color="#D40202"
                                  border={"1px solid #D40202"}
                                  px={1}
                                  py={2}
                                  borderRadius="full"
                                  fontSize="xs"
                                  fontWeight="500"
                                >
                                  Terminated
                                </Badge>
                              </HStack>
                            </Box>
                          </Box>

                        </Box>
                      </Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
      {/* Include the Notifications modal */}
      <AllTicketsModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default HelpAndSupport;
