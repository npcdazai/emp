import { Box, HStack, Text, VStack, Link } from '@chakra-ui/layout'
import React, { useEffect, useRef } from 'react'
import { OPACITY_ON_LOAD, SLIDE_IN_BOTTOM } from '../../Layout/animations'
import gap from '../../assets/gap.svg'
import optifii_white from '../../assets/optifii_white.svg'
import optifii_purple from '../../assets/optifii_purple.svg'
import bewakoof from '../../assets/bewakoof.svg'
import nyka from '../../assets/nyka.svg'
import hAndm from '../../assets/h&m.svg'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
import VanillaTilt from 'vanilla-tilt'
import MyVoucherViewModal from './MyVoucherViewModal'
import { useNavigate } from 'react-router-dom'

const MyVoucher = ({ buyVoucer, brandData }) => {


const navigate = useNavigate()



  return (
    <HStack {...SLIDE_IN_BOTTOM} mt={2} gap={5} flexWrap={'wrap'} justifyContent={'center'} w={'100%'}>
      {brandData?.map(({ brandColor, brandLogo, cardWorth, optifiiLogo }, index) => {
        const tiltRef = useRef(null);

        useEffect(() => {
          const node = tiltRef.current;
          if (node) {
            VanillaTilt.init(node, {
              max: 15,
              speed: 400,
              glare: true,
              scale: 1.05,
              "max-glare": 0.5,
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

        return (
          <Box cursor={'grab'} key={index} ref={tiltRef} overflow={'hidden'} shadow={'md'} w={{ base: '23.5%' }} h={160} bg={brandColor} rounded={20}>
            <HStack pb={1} justifyContent={'space-between'} pt={3} ps={3} pe={3}>
              <Image src={brandLogo} />
              <Image src={optifiiLogo} />
            </HStack>
            <VStack color={brandLogo === hAndm ? "#E2231A" : '#fff'} gap={1}>
              <Text as={'span'} fontSize={'sm'}>Card Worth</Text>
              <Text as={'span'} fontWeight={700} fontSize={'lg'}>$ {cardWorth}</Text>

              {buyVoucer ? (
                  <Button
                    bg={"#fff"}
                    mt={2}
                    px={5}
                    py={1}
                    border={"1px solid purple"}
                    size={"xs"}
                    onClick={()=>navigate('/buy-voucher-card')}
                  >
                    Buy Voucher
                  </Button>
              ) : (
                <MyVoucherViewModal />
              )}

            </VStack>
          </Box>
        );
      })}
    </HStack>
  );
}

export default MyVoucher;
