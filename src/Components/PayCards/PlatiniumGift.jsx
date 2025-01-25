import React, { useEffect, useRef } from 'react'
import logo_card from "../../assets/logo_card.svg";
import TRANSCORP_LOGO from "../../assets/TRANSCORP_LOGO.svg";
import bg from "../../assets/platinium_bg.png";
import RuPay from "../../assets/rupayImg.png";
import VanillaTilt from 'vanilla-tilt';
import { Box, Text, VStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import splashPattern from '../../assets/splash_pattern.svg'
import gift from '../../assets/gift.svg'
import { Button } from '@chakra-ui/button';



import chip from "../../assets/chip.svg";
import chip_rays from "../../assets/chip_rays.svg";





import platinum from "../../assets/Platinum.svg";

const PlatiniumGift = () => {
    const tiltRef = useRef(null);  useEffect(() => {
      const node = tiltRef.current;
      if (node) {
        VanillaTilt.init(node, {
          max: 5,
          speed: 400,
          glare: true,
          "max-glare": 0.5,
        });
      }
      return () => {
        if (node && node.vanillaTilt) {
          node.vanillaTilt.destroy();
        }
      };
    }, []);


  return (
    <VStack
      ref={tiltRef} // Attach tilt to this ref
      // bg="linear-gradient(230deg, #6311CB, #481566, #851d70, #a71c71, #df2274)"
    //   bg="linear-gradient(230deg, purple, #390A74, #390A74, #390A74, #390A74)"
    bgImage={bg}
    bgPosition={"center"} // Position the background image (e.g., center)
    bgSize={"cover"} // Optional: Cover the entire area
      alignItems={"start"}
      justifyContent={"space-between"}
      height={"100%"}
      w={240}
      h={"372px"}
      rounded={"xl"}
      p={4}
      boxShadow={"md"}
      position={"relative"}
    >
      <Box
        width={"100%"}
        cursor={"grab"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Image w={20} src={logo_card} />
        <Image w={24} src={TRANSCORP_LOGO} me={0.5} />
      </Box>

      <VStack
        width={"100%"}
        display={"flex"}
        alignItems={"start"}
        justifyContent={"space-between"}
        zIndex={9}
        gap={1}
        transform={'translateY(-75px)'}
      >
        <Text as={'span'} color={"#fff"} fontWeight={500} fontSize={"sm"}>
        Yami Gautam
        </Text>
        <Text opacity={0.7} as={'span'} color={"#fff"} fontWeight={500} fontSize={"xs"}>
        Optifii Pvt Ltd
        </Text>
      </VStack>

      <Box 
        zIndex={9} width={"100%"} display={"flex"} justifyContent={"space-between"}>
        <Image  w={12} src={platinum} />
        <Image w={24} src={RuPay} me={0.5} />
      </Box>

      <Text
        position={"absolute"}
        top={14}
        left={4}
        display={'flex'}
        gap={2}
        color={'#fff'}
        fontSize={'xs'}
      >
        Gift Card
      </Text>
      <Image h={"300px"} position={'absolute'} bottom={-10} left={0} src={splashPattern} />

      {/* <Image h={"300px"} position={'absolute'} bottom={20} left={0} src={splashPattern} /> */}



      <Image w={90}  position={'absolute'} bottom={"46px"} left={0} src={gift} />
    </VStack>
  )
}

export default PlatiniumGift