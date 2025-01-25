import React, { useContext, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Portal,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import { MdOutlineHeadsetMic, MdNotificationsNone } from "react-icons/md";
import { RiWallet3Line } from "react-icons/ri";
import { SearchIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import GlobalStateContext from "../Contexts/GlobalStateContext";
import mainLogo from "../assets/optifii_logo.svg";
import PrimaryButton from "./Buttons/PrimaryButton";
import Notifications from "../Pages/Notifications/Notifications";
import { FaRegUser } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import Cookies from "js-cookie"; // Import the Cookies library

const HeaderMain = ({
  slideDirecttion,
  isDrawerOpen,
  toggleDrawer,
}) => {
  const navigate = useNavigate();
  const { image, setIsAuthenticate } = useContext(GlobalStateContext);
  const [searchTerm, setSearchTerm] = useState("");


  const logOutHandler = () => {
    setIsAuthenticate(false);
    Cookies.remove("isAuthenticated");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshTokenExp");
    navigate("/");
  };

  // For controlling the modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w={"100%"}
      h={{ base: "8%", xl: "9%" }}
      position={"relative"}
      className={`pt-2 pb-2 fw-400 border-bottom d-flex ${slideDirecttion ? "ps-2" : ""
        } justify-content-between align-items-center`}
      zIndex={999}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Box
          w={"230px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box className={`d-flex ${true ? "justify-content-start" : "justify-content-center"} p-4 pt-0 pb-0 position-relative`}>
            <Image
              style={{ width: 95 }}
              src={mainLogo}
              alt="Logo"
              onClick={() => navigate("/home")}
              cursor={"pointer"}
            />
          </Box>
          <Button
            colorScheme={"forestGreen"}
            rounded={"lg"}
            onClick={toggleDrawer}
            style={{ width: "28px", height: "28px", minWidth: "28px", zIndex: 99, backgroundColor: "#6311CB29" }}
          >
            {isDrawerOpen ? <ArrowLeftIcon className="web-text-small" color={"#6311CB"} /> : <ArrowRightIcon className="web-text-small" color={"#6311CB"} />}
          </Button>
        </Box>

        <InputGroup width={350} size="sm" ml={5}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="search"
            placeholder="Type to search..."
            rounded="md"
            focusBorderColor="#3725EA"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} gap={2}>
          <Box className="header-icon" display={"flex"} gap={2} alignItems={"center"} me={10}>
            <NavLink
              to="/contact-us"
              style={({ isActive }) => ({
                borderBottom: isActive ? '1px solid #3725EA' : 'none',
              })}
            >
              <Button size={"sm"} bg={"none"} p={0}>
                <MdOutlineHeadsetMic fontSize={"18px"} />
              </Button>
            </NavLink>
            <NavLink
              to="/your-wallet"
              style={({ isActive }) => ({
                borderBottom: isActive ? '1px solid #3725EA' : 'none',
              })}
            >
              <Button size={"sm"} bg={"none"} p={0}>
                <RiWallet3Line fontSize={"18px"} />
              </Button>
            </NavLink>
            <Button size={"sm"} bg={"none"} p={0} onClick={onOpen}>
              <MdNotificationsNone fontSize={"20px"} />
            </Button>
          </Box>
          <Box me={4} gap={2} className="d-flex justify-content-center">
            <Popover placement="bottom-start">
              <Portal>
                <PopoverContent mt={6} maxW="450px">
                  <PopoverArrow />
                  <PopoverBody
                    py={6}
                    gap={2}
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Avatar size="2xl" name="Segun Adebayo" src={image} />
                    <Text as={"span"} fontSize={"md"} fontWeight={600}>
                      Kartikey Gautam
                    </Text>
                    <PrimaryButton onClick={() => navigate("/profile")} title={"View Profile"} />
                  </PopoverBody>
                  <PopoverFooter border={"none"} pt={0} mb={4}>
                    <HStack pl={6} spacing={1} cursor={"pointer"} w="fit-content" >
                      <FaRegUser size={"16"} color="#666666" />
                      <Text as={"span"} fontSize={"sm"} color={"#666666"} fontWeight={500} mb={0}>
                        View as Admin
                      </Text>
                    </HStack>
                    <HStack
                      mt={2}
                      pl={6}
                      spacing={1}
                      onClick={logOutHandler}
                      cursor={"pointer"}
                      w="fit-content" 
                    >
                      <BiLogOut size={"16"} color="#666666" />
                      <Text as={"span"} fontSize={"sm"} color={"#666666"} fontWeight={500} mb={0}>
                        Logout
                      </Text>
                    </HStack>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>

              <PopoverTrigger>
                <Box className="d-flex pointer align-items-center">
                  <Avatar src={image} size={"sm"} bg={"#210a33"} />
                  <Box style={{ display: "flex" }} className="overflow-hidden ms-3 flex-column">
                    <Text fontWeight={600} as={"span"} fontSize={"md"}>
                      Kartikey Gautam
                    </Text>
                    <Text as={"span"} fontSize={"xs"}>
                      Optifii
                    </Text>
                  </Box>
                </Box>
              </PopoverTrigger>
            </Popover>
          </Box>
        </Box>
      </Box>

      {/* Include the Notifications modal */}
      <Notifications isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default HeaderMain;
