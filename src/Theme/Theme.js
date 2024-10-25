// theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    customPink: {
      50: "#ffe5e9",
      100: "#ffbcc9",
      200: "#ff93a8",
      300: "#ff6a87",
      400: "#ff4166",
      500: "#ff1845", // you can choose your custom color values here
      600: "#db1139",
      700: "#b70d2d",
      800: "#930921",
      900: "#700616",
    },
    // forestGreen: {
    //   50: "#ffe6e9",
    //   100: "#f8c2c7",
    //   200: "#ef9da4",
    //   300: "#e67882",
    //   400: "#dd5460",
    //   500: "#DE858E", // primary shade for your custom color
    //   600: "#DE858E",
    //   700: "#DE858E",
    //   800: "#DE858E",
    //   900: "#DE858E",
    // },
    deepPurple: {
      50: "#F1EAF4",   // lightest shade
      100: "#DBC7E4",
      200: "#BFA0D0",
      300: "#9D78B8",
      400: "#794DA0",
      500: "#210A33",  // primary shade for your custom color
      600: "#1C082D",
      700: "#160524",
      800: "#10041C",
      900: "#0A0212",  // darkest shade
    },
    
  },
  components: {
    // Switch: {
    //   baseStyle: {
    //     track: {
    //       _checked: {
    //         bg: 'forestGreen.500', // using your custom color here
    //       },
    //     },
    //   },
    // },
  },
});

export default customTheme;
