import React, { useState, useEffect } from 'react';
import {
    Button,
    HStack,
    Text,
    Box,
    Radio,
    Divider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import { Checkbox } from '@chakra-ui/react'
import BuyVoucherCardComponent from './SelectDenominationComponent';
import { GiHamburger } from "react-icons/gi";

const ForWhom = () => {
    const [selectedValue, setSelectedValue] = useState('1'); // Default to 'Personal Use'

    useEffect(() => {
        // Check for the saved tab value in localStorage
        const savedValue = sessionStorage.getItem('selectedTab');
        if (savedValue) {
            setSelectedValue(savedValue);
        }
    }, []);

    // for modal 

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleChange = (value) => {
        setSelectedValue(value);
        sessionStorage.setItem('selectedTab', value); // Save the selected tab to localStorage
    };

    const [isChecked, setIsChecked] = useState(false); // Initial state is unchecked

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Toggle the checkbox state

        if (!isChecked) {
            // Functionality triggered when checkbox is checked
            console.log("Checkbox is checked, functionality triggered.");
        }
    };

    return (
        <BuyVoucherCardComponent>
            <Box w={"60%"} gap={0} pl={8} borderLeft={"1px dashed #ddd"} minH={"80vh"}>
                <Box>
                    <Text
                        fontSize={"sm"}
                        fontWeight={"600"}
                        mb={3}
                    >
                        For Whom?
                    </Text>

                    <Tabs
                        index={selectedValue === '1' ? 0 : 1} // Ensure the correct tab is selected based on the state
                        isLazy
                        onChange={(index) => handleChange((index + 1).toString())}
                    >
                        <TabList
                            sx={{
                                borderBottom: "none", // Remove bottom border from TabList
                            }}
                        >
                            <Tab borderBottom={"none"} pl={0}>
                                <Radio
                                    colorScheme='purple'
                                    value='1'
                                    isChecked={selectedValue === '1'} // Ensure radio is checked when tab is active
                                >
                                    <Text color={selectedValue === '1' ? 'purple.500' : '#535353'}
                                        mb={0}
                                        fontWeight={500}
                                        fontSize={"sm"}
                                    >
                                        Personal Use
                                    </Text>
                                </Radio>
                            </Tab>
                            <Tab borderBottom={"none"}>
                                <Radio
                                    colorScheme='purple'
                                    value='2'
                                    isChecked={selectedValue === '2'} // Ensure radio is checked when tab is active
                                >
                                    <Text color={selectedValue === '2' ? 'purple.500' : '#535353'}
                                        mb={0}
                                        fontWeight={500}
                                        fontSize={"sm"}
                                    >
                                        Gifting
                                    </Text>
                                </Radio>
                            </Tab>
                        </TabList>

                        <TabPanels>

                            {/* panel first */}

                            <TabPanel px={0} >
                                <Box>
                                    <Text
                                        fontSize={"sm"}
                                        fontWeight={"600"}
                                        mb={1}
                                    >
                                        Summary
                                    </Text>
                                    <Box
                                        rounded={"xl"}
                                        p={4}
                                        bg={"#fff"}
                                        shadow={"md"}
                                    >
                                        <HStack justifyContent={"space-between"}>
                                            <Text
                                                fontSize={"sm"}
                                                fontWeight={"500"}
                                                mb={1}
                                            >
                                                Brand card
                                            </Text>
                                            <Text
                                                fontSize={"sm"}
                                                fontWeight={"600"}
                                                mb={1}
                                            >
                                                ₹ 500
                                            </Text>
                                        </HStack>
                                        <HStack justifyContent={"space-between"} mt={1}>
                                            <Text
                                                fontSize={"sm"}
                                                fontWeight={"500"}
                                                color={"#159F2B"}
                                                mb={1}
                                            >
                                                Instant reward discount (4.0%)
                                            </Text>
                                            <Text
                                                fontSize={"sm"}
                                                fontWeight={"600"}
                                                color={"#159F2B"}
                                                mb={1}
                                            >
                                                ₹ 500
                                            </Text>
                                        </HStack>
                                        <Divider />
                                        <HStack justifyContent={"space-between"}>
                                            <Text
                                                fontSize={"sm"}
                                                fontWeight={"500"}
                                                mb={1}
                                            >
                                                You pay
                                            </Text>
                                            <Text
                                                fontSize={"sm"}
                                                fontWeight={"600"}
                                                mb={1}
                                            >
                                                ₹ 480
                                            </Text>
                                        </HStack>
                                    </Box>

                                    <Box>
                                        <Text
                                            fontSize={"sm"}
                                            fontWeight={"600"}
                                            mb={2}
                                            mt={4}
                                        >
                                            Select Wallet
                                        </Text>

                                        <Accordion allowToggle>
                                            <AccordionItem
                                                borderTop="none"
                                                borderBottom="none"
                                            >
                                                <h2>
                                                    <AccordionButton
                                                        border={"1px solid #DCDCDC"}
                                                        borderRadius={"md"}
                                                    >
                                                        <Box as='span' flex='1'
                                                            textAlign='left'
                                                            fontSize={"sm"}
                                                            color={"#777777"}
                                                        >
                                                            Select Wallet
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel p={0}>
                                                    <Box
                                                        border="1px solid #e2e8f0"
                                                        borderRadius="md"
                                                        p={4}
                                                        mb={2}
                                                        _hover={{ boxShadow: "lg" }}
                                                    >
                                                        {[...Array(4)].map((_, index) => (
                                                            <HStack justify="space-between" align="start" key={index} mb={4}>
                                                                <Checkbox
                                                                    colorScheme='purple'
                                                                    alignItems={"center"}
                                                                    border={"#6211CB"}
                                                                >
                                                                    <Text fontSize={"sm"} fontWeight={600} mb={0}>
                                                                        Food Wallet
                                                                    </Text>
                                                                </Checkbox>
                                                                <HStack align="center">
                                                                    <Text color="gray.500" fontSize={"xs"} mb={0}>
                                                                        Balance amount
                                                                    </Text>
                                                                    <Text fontWeight="600" fontSize={"sm"} mb={0}>
                                                                        50000
                                                                    </Text>
                                                                </HStack>
                                                            </HStack>
                                                        ))}
                                                    </Box>
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    </Box>
                                    <Box mt={6} >
                                        <Checkbox
                                            colorScheme='purple'
                                            isChecked={isChecked}
                                            onChange={handleCheckboxChange}
                                            alignItems={"start"}
                                            border={"#6211CB"}
                                        >
                                            <Text fontSize={"xs"} fontWeight={500}>
                                                Accept terms & conditions, by clicking on Pay now you accept OptiFii’s terms & conditions
                                            </Text>
                                        </Checkbox>
                                    </Box>

                                    <Box display={"flex"} justifyContent={"center"} mt={2} w={"100%"}>
                                        <Button
                                            isDisabled={!isChecked} // Disable button when unchecked
                                            onClick={() => console.log("Preview button clicked")}
                                            color={"#fff"}
                                            bg={isChecked ? "linear-gradient(90deg, #3725EA 0%, #5E0FCD 100%)" : "#d4c5f4"}
                                            _hover={{ opacity: 0.8 }}
                                            fontSize={"sm"}
                                            fontWeight={400}
                                            px={16}
                                            h={12}
                                            w={"100%"}
                                        >
                                            Pay Now
                                        </Button>
                                    </Box>
                                </Box>
                            </TabPanel>

                            {/* panel second */}

                            <TabPanel px={0} >
                                <Box>

                                    <Text
                                        fontSize={"sm"}
                                        fontWeight={"600"}
                                        mb={3}
                                    >
                                        User Details
                                    </Text>

                                    <Box mb={4}>
                                        <Text
                                            fontSize={"xs"}
                                            fontWeight={"500"}
                                            color={"#363636"}
                                            mb={1}
                                        >
                                            Name
                                        </Text>
                                        <Input size='sm' borderRadius={"md"} />
                                    </Box>
                                    <Box mb={4}>
                                        <Text
                                            fontSize={"xs"}
                                            fontWeight={"500"}
                                            color={"#363636"}
                                            mb={1}
                                        >
                                            Email ID
                                        </Text>
                                        <Input size='sm' borderRadius={"md"} />
                                    </Box>
                                    <Box mb={4}>
                                        <Text
                                            fontSize={"xs"}
                                            fontWeight={"500"}
                                            color={"#363636"}
                                            mb={1}
                                        >
                                            Phone number
                                        </Text>
                                        <Input size='sm' borderRadius={"md"} />
                                    </Box>


                                    <Box>
                                        <Text
                                            fontSize={"sm"}
                                            fontWeight={"600"}
                                            mb={2}
                                            mt={4}
                                        >
                                            Select Wallet
                                        </Text>

                                        <Accordion allowToggle>
                                            <AccordionItem
                                                borderTop="none"
                                                borderBottom="none"
                                            >
                                                <h2>
                                                    <AccordionButton
                                                        border={"1px solid #DCDCDC"}
                                                        borderRadius={"md"}
                                                    >
                                                        <Box as='span' flex='1'
                                                            textAlign='left'
                                                            fontSize={"sm"}
                                                            color={"#777777"}
                                                        >
                                                            Select Wallet
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel p={0}>
                                                    <Box
                                                        border="1px solid #e2e8f0"
                                                        borderRadius="md"
                                                        p={4}
                                                        mb={2}
                                                        _hover={{ boxShadow: "lg" }}
                                                    >
                                                        {[...Array(4)].map((_, index) => (
                                                            <HStack justify="space-between" align="start" key={index} mb={4}>
                                                                <Checkbox
                                                                    colorScheme='purple'
                                                                    alignItems={"center"}
                                                                    border={"#6211CB"}
                                                                >
                                                                    <Text fontSize={"sm"} fontWeight={600} mb={0}>
                                                                        Food Wallet
                                                                    </Text>
                                                                </Checkbox>
                                                                <HStack align="center">
                                                                    <Text color="gray.500" fontSize={"xs"} mb={0}>
                                                                        Balance amount
                                                                    </Text>
                                                                    <Text fontWeight="600" fontSize={"sm"} mb={0}>
                                                                        50000
                                                                    </Text>
                                                                </HStack>
                                                            </HStack>
                                                        ))}
                                                    </Box>
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    </Box>
                                    <Box mt={4}>
                                        <Text
                                            fontSize={"sm"}
                                            fontWeight={"600"}
                                            mb={1}
                                        >
                                            Summary two
                                        </Text>
                                        <Box
                                            rounded={"xl"}
                                            p={4}
                                            bg={"#fff"}
                                            shadow={"md"}
                                        >
                                            <HStack justifyContent={"space-between"}>
                                                <Text
                                                    fontSize={"sm"}
                                                    fontWeight={"500"}
                                                    mb={1}
                                                >
                                                    Brand card
                                                </Text>
                                                <Text
                                                    fontSize={"sm"}
                                                    fontWeight={"600"}
                                                    mb={1}
                                                >
                                                    ₹ 500
                                                </Text>
                                            </HStack>
                                            <HStack justifyContent={"space-between"} mt={1}>
                                                <Text
                                                    fontSize={"sm"}
                                                    fontWeight={"500"}
                                                    color={"#159F2B"}
                                                    mb={1}
                                                >
                                                    Instant reward discount (4.0%)
                                                </Text>
                                                <Text
                                                    fontSize={"sm"}
                                                    fontWeight={"600"}
                                                    color={"#159F2B"}
                                                    mb={1}
                                                >
                                                    ₹ 500
                                                </Text>
                                            </HStack>
                                            <Divider />
                                            <HStack justifyContent={"space-between"}>
                                                <Text
                                                    fontSize={"sm"}
                                                    fontWeight={"500"}
                                                    mb={1}
                                                >
                                                    You pay
                                                </Text>
                                                <Text
                                                    fontSize={"sm"}
                                                    fontWeight={"600"}
                                                    mb={1}
                                                >
                                                    ₹ 480
                                                </Text>
                                            </HStack>
                                        </Box>
                                    </Box>
                                    <Box mt={6} >
                                        <Checkbox
                                            colorScheme='purple'
                                            isChecked={isChecked}
                                            onChange={handleCheckboxChange}
                                            alignItems={"start"}
                                            border={"#6211CB"}
                                        >
                                            <Text fontSize={"xs"} fontWeight={500}>
                                                Accept terms & conditions, by clicking on Pay now you accept OptiFii’s terms & conditions
                                            </Text>
                                        </Checkbox>
                                    </Box>

                                    <Box display={"flex"} justifyContent={"center"} mt={2} w={"100%"}>
                                        <Button
                                            onClick={onOpen}
                                            isDisabled={!isChecked} // Disable button when unchecked
                                            color={"#fff"}
                                            bg={isChecked ? "linear-gradient(90deg, #3725EA 0%, #5E0FCD 100%)" : "#d4c5f4"}
                                            _hover={{ opacity: 0.8 }}
                                            fontSize={"sm"}
                                            fontWeight={400}
                                            px={16}
                                            h={12}
                                            w={"100%"}
                                        >
                                            Preview
                                        </Button>
                                    </Box>
                                </Box>
                            </TabPanel>

                        </TabPanels>
                    </Tabs>
                </Box>
                <Modal size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent >
                        <ModalHeader>Make Payment</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box>

                                <Text
                                    fontSize={"sm"}
                                    fontWeight={"600"}
                                    mb={3}
                                >
                                    User Details
                                </Text>

                                <Box mb={4}>
                                    <Text
                                        fontSize={"xs"}
                                        fontWeight={"500"}
                                        color={"#363636"}
                                        mb={1}
                                    >
                                        Name
                                    </Text>
                                    <Input
                                        size='sm'
                                        borderRadius={"md"}
                                        value={"Yami Gautam"}
                                        color={"#000"}
                                        fontWeight={"500"}
                                        fontSize={"sm"}
                                        bg={"#F3F2FF"}
                                    />
                                </Box>
                                <Box mb={4}>
                                    <Text
                                        fontSize={"xs"}
                                        fontWeight={"500"}
                                        color={"#363636"}
                                        mb={1}
                                    >
                                        Email ID
                                    </Text>
                                    <Input size='sm' borderRadius={"md"}
                                        value={"Yamigautam@wdi.com"}
                                        color={"#000"}
                                        fontWeight={"500"}
                                        fontSize={"sm"}
                                        bg={"#F3F2FF"}
                                    />
                                </Box>
                                <Box mb={4}>
                                    <Text
                                        fontSize={"xs"}
                                        fontWeight={"500"}
                                        color={"#363636"}
                                        mb={1}
                                    >
                                        Phone number
                                    </Text>
                                    <Input size='sm' borderRadius={"md"}
                                        value={"8945487312"}
                                        color={"#000"}
                                        fontWeight={"500"}
                                        fontSize={"sm"}
                                        bg={"#F3F2FF"}
                                    />
                                </Box>


                                <Box>
                                    <Text
                                        fontSize={"sm"}
                                        fontWeight={"600"}
                                    >
                                        Paid From
                                    </Text>

                                    <HStack
                                        justifyContent={"space-between"}
                                        border={"1px solid #EFE2FF"}
                                        borderRadius={"md"}
                                        h={10}
                                        py={4}
                                        px={2}
                                    >
                                        <HStack>
                                            <GiHamburger color='#f6cb93' />
                                            <Text fontSize={"sm"} fontWeight={500} mb={0}>
                                                Food Wallet
                                            </Text>
                                        </HStack>
                                        <HStack align="center">
                                            <Text color="gray.500" fontSize={"xs"} mb={0}>
                                                Balance amount
                                            </Text>
                                            <Text fontWeight="500" fontSize={"sm"} mb={0}>
                                                50000
                                            </Text>
                                        </HStack>
                                    </HStack>
                                </Box>
                                <Box mt={4}>
                                    <Text
                                        fontSize={"sm"}
                                        fontWeight={"600"}
                                        mb={1}
                                    >
                                        Summary two
                                    </Text>
                                    <Box
                                        rounded={"xl"}
                                        p={4}
                                        bg={"#fff"}
                                        shadow={"md"}
                                    >
                                        <HStack justifyContent={"space-between"}>
                                            <Text
                                                fontSize={"sm"}
                                                fontWeight={"500"}
                                                mb={1}
                                            >
                                                Brand card
                                            </Text>
                                            <Text
                                                fontSize={"sm"}
                                                fontWeight={"600"}
                                                mb={1}
                                            >
                                                ₹ 500
                                            </Text>
                                        </HStack>
                                        <HStack justifyContent={"space-between"} mt={1}>
                                            <Text
                                                fontSize={"sm"}
                                                fontWeight={"500"}
                                                color={"#159F2B"}
                                                mb={1}
                                            >
                                                Instant reward discount (4.0%)
                                            </Text>
                                            <Text
                                                fontSize={"sm"}
                                                fontWeight={"600"}
                                                color={"#159F2B"}
                                                mb={1}
                                            >
                                                ₹ 500
                                            </Text>
                                        </HStack>
                                        <Divider />
                                        <HStack justifyContent={"space-between"}>
                                            <Text
                                                fontSize={"sm"}
                                                fontWeight={"500"}
                                                mb={1}
                                            >
                                                You pay
                                            </Text>
                                            <Text
                                                fontSize={"sm"}
                                                fontWeight={"600"}
                                                mb={1}
                                            >
                                                ₹ 480
                                            </Text>
                                        </HStack>
                                    </Box>
                                </Box>
                                <Box mt={6} >
                                    <Checkbox
                                        colorScheme='purple'
                                        isChecked={isChecked}
                                        onChange={handleCheckboxChange}
                                        alignItems={"start"}
                                        border={"#6211CB"}
                                    >
                                        <Text fontSize={"xs"} fontWeight={500}>
                                            Accept terms & conditions, by clicking on Pay now you accept OptiFii’s terms & conditions
                                        </Text>
                                    </Checkbox>
                                </Box>

                                <Box display={"flex"} justifyContent={"center"} mt={2} w={"100%"}>
                                    <Button
                                        isDisabled={!isChecked} // Disable button when unchecked
                                        onClick={() => console.log("Preview button clicked")}
                                        color={"#fff"}
                                        bg={isChecked ? "linear-gradient(90deg, #3725EA 0%, #5E0FCD 100%)" : "#d4c5f4"}
                                        _hover={{ opacity: 0.8 }}
                                        fontSize={"sm"}
                                        fontWeight={400}
                                        px={16}
                                        h={12}
                                        w={"100%"}
                                    >
                                        Pay Now
                                    </Button>
                                </Box>
                            </Box>
                        </ModalBody>

                    </ModalContent>
                </Modal>
            </Box>
        </BuyVoucherCardComponent>
    );
    
}

export default ForWhom;
