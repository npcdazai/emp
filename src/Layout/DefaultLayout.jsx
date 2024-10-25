import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  TbArrowBadgeLeftFilled,
  TbListDetails,
  TbReportMoney,
  TbTransactionDollar,
} from "react-icons/tb";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { RouteLink } from "../Routes/Routes";
import NotFound from "../Pages/NotFound";
import { nav } from "../Routes/Nav";
import {
  Avatar,
  Box,
  Text,
  WrapItem,
  Popover,
  Tag,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Image,
  Alert,
  AlertIcon,
  Breadcrumb,
  Divider,
  Button,
} from "@chakra-ui/react";
import GlobalStateContext from "../Contexts/GlobalStateContext";
import Cookies from "js-cookie"; // Import the Cookies library
import HeaderMain from "../Components/HeaderMain";
import {
  RiBankLine,
  RiExchangeBoxLine,
  RiFileUserLine,
  RiMoneyDollarBoxLine,
} from "react-icons/ri";
import {
  MdNotificationsNone,
  MdOutlineAddChart,
  MdOutlineTaskAlt,
} from "react-icons/md";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { GrManual, GrNotification } from "react-icons/gr";
import { LuContact } from "react-icons/lu";
import SplashScreen from "../Pages/SplashScreen";

const DashboardLayout = ({ isOnline }) => {
  const navigate = useNavigate();
  const dispach = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const {
    setIsAuthenticate,
    colorMode,
    toggleColorMode,
    setSlideFormRight,
    slideFromRight,
  } = useContext(GlobalStateContext);
  const [isSplashVisible, setSplashVisible] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const savedIndex = localStorage.getItem("openAccordionIndex");
    if (savedIndex !== null) {
      setOpenIndex(parseInt(savedIndex));
    }
  }, []);

  const handleAccordionChange = (index) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);
    localStorage.setItem("openAccordionIndex", newIndex);
  };

  useEffect(() => {
    // Set a timer to hide the splash screen after 3 seconds
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 1000); // 3000ms = 3 seconds

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const logOutHandler = () => {
    // dispach(loginUser(false));
    setIsAuthenticate(false);
    Cookies.remove("isAuthenticated");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshTokenExp");
    navigate("/");
  };

  // // Function to get the title based on the route
  const getTitle = () => {
    switch (true) {
      case "/":
        return "👋🏻 Hi, Developers";
      case path.startsWith("/task"):
        return (
          <span className="d-flex align-items-center gap-2">
            <MdOutlineTaskAlt className="h4 m-0" /> Tasks
          </span>
        );
      case path.startsWith("/notification"):
        return (
          <span className="d-flex align-items-end gap-2">
            <GrNotification className="h5 m-0" /> Notification
          </span>
        );
      case path.startsWith("/exchange-rate"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiExchangeBoxLine className="h4 m-0 fw-normal" />
            Echange rate
          </span>
        );
      case path.startsWith("/create-io"):
        if (/^\/create-io\/[A-Za-z0-9_-]+$/.test(path)) {
          return (
            <span className="d-flex align-items-end gap-2">
              <MdOutlineAddChart className="h4 m-0 fw-normal" />
              Edit IO
            </span>
          );
        }
        return (
          <span className="d-flex align-items-end gap-2">
            <MdOutlineAddChart className="h4 m-0 fw-normal" />
            Create IO
          </span>
        );
      case path.startsWith("/view-io"):
        return (
          <span className="d-flex align-items-end gap-2">
            <HiOutlineChartSquareBar className="h4 m-0 fw-normal" />
            View IO
          </span>
        );
      case path.startsWith("/investor-details"):
        return (
          <span className="d-flex align-items-end gap-2">
            <TbListDetails className="h4 m-0 fw-normal" />
            Investor Details
          </span>
        );
      case path.startsWith("/investor-transactions"):
        return (
          <span className="d-flex align-items-end gap-2">
            <TbTransactionDollar className="h4 m-0 fw-normal" />
            Investor Transactions
          </span>
        );
      case path.startsWith("/deposit-request"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiMoneyDollarBoxLine className="h4 m-0 fw-normal" />
            Deposite pending request
          </span>
        );
      case path.startsWith("/deposit-history"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiExchangeBoxLine className="h4 m-0 fw-normal" />
            Deposite withdrawal request
          </span>
        );
      case path.startsWith("/withdraw-request"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiMoneyDollarBoxLine className="h4 m-0 fw-normal" />
            Withdrawal pending request
          </span>
        );
      case path.startsWith("/withdraw-history"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiExchangeBoxLine className="h4 m-0 fw-normal" />
            Withdrawal request
          </span>
        );
      case path.startsWith("/investor-request"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiMoneyDollarBoxLine className="h4 m-0 fw-normal" />
            Investor pending request
          </span>
        );
      case path.startsWith("/investor-history"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiExchangeBoxLine className="h4 m-0 fw-normal" />
            Investor request
          </span>
        );
      case path.startsWith("/deletion-request"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiMoneyDollarBoxLine className="h4 m-0 fw-normal" />
            Deletion pending request
          </span>
        );
      case path.startsWith("/deletion-history"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiExchangeBoxLine className="h4 m-0 fw-normal" />
            Deletion request
          </span>
        );
      case path.startsWith("/bank-investor"):
        return (
          <span className="d-flex align-items-end gap-2">
            <TbReportMoney className="h4 m-0 fw-normal" />
            Ban / Unban Investor
          </span>
        );
      case path.startsWith("/academy"):
        return (
          <span className="d-flex align-items-end gap-2">
            <GrManual className="h4 m-0 fw-normal" />
            Academy
          </span>
        );
      case path.startsWith("/notification"):
        return (
          <span className="d-flex align-items-end gap-2">
            <MdNotificationsNone className="h4 m-0 fw-normal" />
            Notification
          </span>
        );
      case path.startsWith("/contact"):
        return (
          <span className="d-flex align-items-end gap-2">
            <LuContact className="h4 m-0 fw-normal" />
            Contact Details
          </span>
        );
      case path.startsWith("/users"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiFileUserLine className="h4 m-0 fw-normal" />
            Users
          </span>
        );
      case path.startsWith("/bank-details"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiBankLine className="h4 m-0 fw-normal" />
            Bank Details
          </span>
        );
      case path.startsWith("/deletion-request"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiMoneyDollarBoxLine className="h4 m-0 fw-normal" />
            Deletion pending request
          </span>
        );
      case path.startsWith("/deletion-history"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiExchangeBoxLine className="h4 m-0 fw-normal" />
            Deletion request
          </span>
        );
      case path.startsWith("/deletion-request"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiMoneyDollarBoxLine className="h4 m-0 fw-normal" />
            Deletion pending request
          </span>
        );
      case path.startsWith("/deletion-history"):
        return (
          <span className="d-flex align-items-end gap-2">
            <RiExchangeBoxLine className="h4 m-0 fw-normal" />
            Deletion request
          </span>
        );

      default:
        return <span className="d-flex align-items-end  gap-2">Home</span>;
    }
  };

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return (
    <Box height={"100vh"}>
      <HeaderMain
        isDrawerOpen={isDrawerOpen}
        logOutHandler={logOutHandler}
        toggleDrawer={toggleDrawer}
        icon
        title={getTitle()}
      />
      <Box
        h={{ base: "92%", xl: "94%" }}
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
        className="d-flex"
        // pe={0.5}
      >
        <Alert
          transition={"0.5s"}
          h={53}
          transform={isOnline ? "translateY(-100px)" : "translateY(0px)"}
          position={"absolute"}
          zIndex={999}
          status="info"
          variant="solid"
          bgGradient="linear(to-r, #C33FAD, #C33FAD, #C33FAD)"
          // bgGradient='linear(to-r, #1EBCA3, #E0EEFF)'
          color={"white"}
          fontWeight={600}
          fontSize={"md"}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <AlertIcon color={"white"} />
          No Internet !
        </Alert>

        <Box
          className="h-100 position-relative sideBar"
          style={{
            width: isDrawerOpen ? 230 : 0,
            transition: "width 0.3s ease-in-out, transform 0.3s ease-in-out", // Smooth transition for width and transform
            backgroundColor: "#210A33",
            position: "relative",
            color: "#fff",
            transform: isDrawerOpen ? "translateX(0)" : "translateX(-230px)", // Move box to the left when closed
          }}
        >
          <Box
            className="ps-0 scroll-bar pe-0 pt-3"
            style={{
              height: "100%",
              overflowY: "scroll",
              overflowX: "hidden",
              paddingBottom: "5rem",
            }}
          >
            <Accordion
              m={0}
              // p={2}
              allowToggle
              defaultIndex={-1}
              index={openIndex}
              onChange={handleAccordionChange}
            >
              {nav.map(
                ({ title, type, Icon, submenu, path, colorCode }, index) => {
                  if (type === "accordion") {
                    return (
                      <AccordionItem
                        key={index}
                        border={"none"}
                        style={{ borderRadius: "2px", marginBottom: "8px" }}
                      >
                        <AccordionButton
                          style={{ height: "auto", borderRadius: "2px" }}
                          _hover={{ bg: "#ced8e6a2" }}
                          className={`${
                            true
                              ? "p-2 web-text-medium ps-3 justify-content-between"
                              : "p-2 ps-1 web-text-xlarge justify-content-center"
                          }  link d-flex align-items-center gap-2 w-100 mb-1`}
                        >
                          <NavLink
                            to="/home"
                            as="span"
                            className="d-flex align-items-centre gap-2 w-50 py-1"
                          >
                            {/* {Icon && title === "Admin" ? <Image w={15} src={shield} /> : <Icon className={`web-text-large`} />} */}
                            {Icon && (
                              <Icon
                                fontSize={title === "Admin" ? "18px" : "15px"}
                              />
                            )}
                            <Text
                              as={"span"}
                              display={true ? "flex" : "none"}
                              alignItems="center"
                              overflow="hidden"
                              textAlign={"left"}
                            >
                              {title}
                            </Text>
                          </NavLink>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel
                          p={0}
                          pb={1}
                          display={"flex"}
                          flexDirection={"column"}
                          gap={1}
                        >
                          {submenu?.map(
                            (
                              {
                                title: subMenuTitle,
                                path: link,
                                icon: SubIcon,
                                colorCode,
                              },
                              i
                            ) => (
                              <Box
                                key={i}
                                style={{
                                  height: "auto",
                                  position: "relative",
                                }}
                                className={`${
                                  true
                                    ? " web-text-medium ps-3"
                                    : " web-text-xlarge  justify-content-center"
                                }  d-flex align-items-center  p-0`}
                              >
                                <NavLink
                                  style={{ borderRadius: "4px" }}
                                  className={`${
                                    true
                                      ? "p-2 ps-1 ms-2 web-text-medium "
                                      : "p-2 ps-0 ms-0 zindex-3 ms-4 web-text-xlarge justify-content-center"
                                  }  link d-flex align-items-center gap-2 w-100  mx-2`}
                                  to={link}
                                >
                                  {SubIcon && (
                                    <SubIcon
                                      fontSize={"8px"}
                                      className="ms-2"
                                      // style={{ zIndex: 111, color:colorCode?colorCode:"" }}
                                    />
                                  )}
                                  <Text
                                    as={"span"}
                                    display={true ? "flex" : "none"}
                                    alignItems="center"
                                    overflow="hidden"
                                  >
                                    {subMenuTitle}
                                  </Text>
                                </NavLink>
                              </Box>
                            )
                          )}
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  } else if (type === "title") {
                    return (
                      <Text
                        as={"span"}
                        key={index}
                        className="web-text-xxsmall fw-600  text-secondary fw-bold"
                      >
                        {title}
                      </Text>
                    );
                  } else if (type === "single") {
                    return (
                      <NavLink
                        key={index}
                        style={{
                          height: "auto",
                          position: "relative",
                          borderRadius: "2px",
                        }}
                        className={`${
                          true
                            ? "p-2 web-text-medium"
                            : "p-2 ps-0 web-text-xlarge justify-content-start"
                        }  link d-flex align-items-center gap-2 w-100 mb-2 single`}
                        to={path}
                        onClick={title == "Logout" ?logOutHandler:null}
                      >
                        {Icon && <Icon className="web-text-large ms-2" />}
                        <Text
                          as={"span"}
                          display={true ? "flex" : "none"}
                          alignItems="center"
                          overflow="hidden"
                        >
                          {title}
                        </Text>
                      </NavLink>
                    );
                  } else {
                    return null;
                  }
                }
              )}
            </Accordion>
          </Box>
        </Box>

        <Box
          style={{
            width: `calc(100% - ${isDrawerOpen ? 230 : 0}px)`,
            transition: "width 0.3s ease-in-out",
            backgroundColor: "#F3F3F9",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {/* <HeaderBox
          slideDirecttion={slideFromRight}
          logOutHandler={logOutHandler}
          icon
          title={getTitle()}
        /> */}

          {/* <CustomBreadcrumb /> */}

          <AppContent />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;

const AppContent = () => {
  return (
    <Routes>
      {RouteLink.map(({ path, Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
