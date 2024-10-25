import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { nav } from "../Routes/Nav";
import { MinusIcon } from "@chakra-ui/icons";

const CustomBreadcrumb = () => {
  const { pathname } = useLocation();

  // Remove leading slash and split path into parts
  const pathParts = pathname.replace(/^\//, "").split("/");

  // Find the current menu item based on the provided path
  const findMenuItem = (path) => {
    let menuItem = null;
    nav.forEach((menu) => {
      if (menu.submenu) {
        menu.submenu.forEach((item) => {
          if (item.path === path) {
            menuItem = item;
          }
        });
      }
    });
    return menuItem;
  };

  // Generate breadcrumb items based on the current path
  const generateBreadcrumbs = (pathParts) => {
    const breadcrumbs = [];
    let currentPath = "";
    pathParts.forEach((part, index) => {
      currentPath += `/${part}`;
      const menuItem = findMenuItem(currentPath);
      if (menuItem) {
        breadcrumbs.push({ path: currentPath, title: menuItem.title });
      } else {
        // For nested paths without direct match, create a custom breadcrumb title
        const customTitle = part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
        breadcrumbs.push({ path: currentPath, title: customTitle });
      }
    });
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(pathParts);

  return (
    <Box
      fontWeight="medium"
      fontSize="xs"
      color={"blue.700"}
      display={"flex"}
      alignItems={"center"}
      p={1}
      mt={1}
      borderBottom={"1px dashed #DEE2E6"}
    >
      <Button
        cursor={"pointer"}
        variant="ghost"
        pt={1.5}
        pb={1.5}
        ps={2}
        pe={2}
        rounded={"full"}
        size={"xs"}
        as={"span"}
      >
        Master
      </Button>{" "}
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={index}>
          
          <Text size={"md"}  as={"span"}>
          {/* <MinusIcon fontStyle={4} color={"#1A202C"}/> */}
          -
          </Text>
          <Link to={item.path}>
          <Button
            cursor={"pointer"}
            variant="ghost"
            pt={0.5}
            pb={0.5}
            ps={2}
            pe={2}
            rounded={"full"}
            size={"xs"}
            as={"span"}
          >
            {item.title}
          </Button></Link>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default CustomBreadcrumb;
