import React, { useEffect, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  HStack,
  VStack,
  Text,
  Box,
  Image,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import gap from "../../assets/gap.svg";
import optifii_white from "../../assets/optifii_white.svg";
import VanillaTilt from "vanilla-tilt";

const MyVoucherViewModal = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const node = tiltRef.current;
    if (node) {
      VanillaTilt.init(node, {
        max: 25,
        speed: 400,
        glare: true,
        scale: 1.05,
        "max-glare": 1.5,
        onEnter: () => {
          node.style.zIndex = 10; // Bring to top on hover
        },
        onLeave: () => {
          node.style.zIndex = 1; // Reset zIndex after hover
        },
      });
    }
    return () => {
      if (node && node.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    };
  }, [tiltRef]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg={"#fff"}
        mt={2}
        px={5}
        py={1}
        border={"1px solid purple"}
        size={"xs"}
      >
        View Voucher
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"1000px"} minH={"500px"} w={"90%"}>
          <ModalHeader pb={0}>My Voucher</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <HStack h={'100%'} w={"100%"}>
              <VStack pt={2} h={'470px'} w={"40%"} gap={6} justifyContent={'start'} >
                <Box
                  cursor={"grab"}
                  ref={tiltRef}
                  overflow={"hidden"}
                  shadow={"md"}
                  w={{ base: "70%" }}
                  h={160}
                  bg={"#002A5F"}
                  rounded={20}
                >
                  <HStack
                    pb={1}
                    justifyContent={"space-between"}
                    pt={3}
                    ps={3}
                    pe={3}
                  >
                    <Image src={gap} />
                  </HStack>
                  <VStack color={gap !== gap ? "#E2231A" : "#fff"} gap={1}>
                    <Text as={"span"} fontSize={"md"}>
                      Card Worth
                    </Text>
                    <Text as={"span"} fontWeight={700} fontSize={"md"}>
                      $ 10000
                    </Text>
                    <HStack
                      w={"100%"}
                      pb={4}
                      justifyContent={"end"}
                      pt={3}
                      ps={3}
                      pe={3}
                    >
                      <Image src={optifii_white} />
                    </HStack>
                  </VStack>
                </Box>

                <VStack mt={3} gap={1} w={'100%'} alignItems={'start'}>
                  <Text as={'span'} fontWeight={500} fontSize={'sm'}>Voucher code</Text>
                  <HStack justifyContent={'space-between'} py={2} w={'100%'} bg={'#E0EEFF'}>
                    <Box transform={'translateX(-1px)'} bg={'#fff'} w={3} h={3} rounded={'full'} />
                    <Text as={'span'} fontSize={'sm'} fontWeight={500}>OPT787593</Text>
                    <Box transform={'translateX(1px)'} bg={'#fff'} w={3} h={3} rounded={'full'} />
                  </HStack>
                  <Text as={'span'} color={'gray.500'} fontWeight={500} fontSize={'sm'}>Validity : 2 July 2034</Text>


                </VStack>
                <FormControl mt={3}>
                  <FormLabel fontSize={'sm'}>PIN</FormLabel>
                  <Input type='number' size={'sm'} />
                </FormControl>
              </VStack>

              {/* =======================[ How to use ]=========== */}
              <VStack w={"60%"} gap={0}>
                <VStack w={"100%"} gap={0}>
                  <Text
                    ps={3}
                    w={"100%"}
                    as={"span"}
                    fontSize={"md"}
                    fontWeight={600}
                  >
                    How to use
                  </Text>

                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0,
                    }}
                  >
                    <li
                      style={{
                        color: "#737373",
                      }}
                    >
                      <Text fontSize={"sm"} fontWeight={500}>
                        How to use Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua
                      </Text>
                    </li>
                    <li
                      style={{
                        color: "#737373",
                      }}
                    >
                      <Text fontSize={"sm"} fontWeight={500}>
                        How to use Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua
                      </Text>
                    </li>
                    <li
                      style={{
                        color: "#737373",
                      }}
                    >
                      <Text fontSize={"sm"} fontWeight={500}>
                        How to use Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua
                      </Text>
                    </li>
                  </ul>
                </VStack>

                <VStack w={"100%"} gap={0}>
                  <Text
                    ps={3}
                    w={"100%"}
                    as={"span"}
                    fontSize={"md"}
                    fontWeight={600}
                  >
                    Terms & condition
                  </Text>

                  <ul>
                    <li
                      style={{
                        color: "#737373",
                      }}
                    >
                      <Text fontSize={"sm"} fontWeight={500}>
                        How to use Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua
                      </Text>
                    </li>
                    <li
                      style={{
                        color: "#737373",
                      }}
                    >
                      <Text fontSize={"sm"} fontWeight={500}>
                        How to use Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua
                      </Text>
                    </li>
                    <li
                      style={{
                        color: "#737373",
                      }}
                    >
                      <Text fontSize={"sm"} fontWeight={500}>
                        How to use Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua
                      </Text>
                    </li>
                  </ul>
                </VStack>
              </VStack>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyVoucherViewModal;
