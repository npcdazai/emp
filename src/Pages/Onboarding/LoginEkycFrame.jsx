import React from 'react'
import { OPACITY_ON_LOAD } from '../../Layout/animations'

import {
    Box,
} from "@chakra-ui/react";
import Header from './Header';
import Footer from './Footer';

const LoginEkycFrame = ({ children }) => {
    return (

        <Box {...OPACITY_ON_LOAD} overflowX={"auto"}>
            <Header />
            <Box 
            w={'100%'} 
            minH={'60vh'} 
            bg={'#f3f3f9'}
             px={6}
             display={"flex"}
             justifyContent={"center"}
             alignItems={"start"}
             >
            {children}
            </Box>

            <Footer />
        </Box>

    )
}

export default LoginEkycFrame