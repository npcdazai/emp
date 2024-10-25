import { Box, Text, VStack } from '@chakra-ui/layout'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Icon } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgTv } from "react-icons/cg";
import { IoFastFoodOutline, IoShirtOutline } from 'react-icons/io5';
import { LuPlaneTakeoff } from 'react-icons/lu';
import { PiBagBold } from "react-icons/pi";
import MyVoucher from './MyVoucher';
import { SLIDE_IN_BOTTOM } from '../../Layout/animations';
import gap from '../../assets/gap.svg'
import optifii_white from '../../assets/optifii_white.svg'
import optifii_purple from '../../assets/optifii_purple.svg'
import bewakoof from '../../assets/bewakoof.svg'
import nyka from '../../assets/nyka.svg'
import hAndm from '../../assets/h&m.svg'



const brandData = [
  {
    brandLogo:gap,
    brandColor:"#002A5F",
    cardWorth:"10,000",
    optifiiLogo:optifii_white,
    patternColor:""
  },
  {
    brandLogo:hAndm,
    brandColor:"#ffffff",
    cardWorth:"10,000",
    optifiiLogo:optifii_purple,
    patternColor:""
  },
  {
    brandLogo:hAndm,
    brandColor:"#ffffff",
    cardWorth:"10,000",
    optifiiLogo:optifii_purple,
    patternColor:""
  },
  {
    brandLogo:bewakoof,
    brandColor:"#FFB819",
    cardWorth:"10,000",
    optifiiLogo:optifii_white,
    patternColor:""
  },
  {
    brandLogo:nyka,
    brandColor:"#FD2679",
    cardWorth:"10,000",
    optifiiLogo:optifii_white,
    patternColor:""
  },
  {
    brandLogo:gap,
    brandColor:"#002A5F",
    cardWorth:"10,000",
    optifiiLogo:optifii_white,
    patternColor:""
  },
  {
    brandLogo:bewakoof,
    brandColor:"#FFB819",
    cardWorth:"10,000",
    optifiiLogo:optifii_white,
    patternColor:""
  },
  {
    brandLogo:nyka,
    brandColor:"#FD2679",
    cardWorth:"10,000",
    optifiiLogo:optifii_white,
    patternColor:""
  },
  {
    brandLogo:nyka,
    brandColor:"#FD2679",
    cardWorth:"10,000",
    optifiiLogo:optifii_white,
    patternColor:""
  },
  {
    brandLogo:bewakoof,
    brandColor:"#FFB819",
    cardWorth:"10,000",
    optifiiLogo:optifii_white,
    patternColor:""
  },
  {
    brandLogo:hAndm,
    brandColor:"#ffffff",
    cardWorth:"10,000",
    optifiiLogo:optifii_purple,
    patternColor:""
  },
  {
    brandLogo:gap,
    brandColor:"#002A5F",
    cardWorth:"10,000",
    optifiiLogo:optifii_white,
    patternColor:""
  },
]

const BuyVoucher = () => {



  



  const buyVoucherData = [
    {
      title:"All", 
      compoent:<Text>All</Text>,
      panel: <MyVoucher brandData={brandData} buyVoucer={true}/>
    },
    {
      title:"Electronics", 
      compoent:<Text> Electronics</Text>,
      Icon:<CgTv fontSize={'18px'} />,
      panel: <MyVoucher brandData={brandData} buyVoucer={true}/>
    },
    {
      title:"Ecommerce", 
      compoent:<Text>Ecommerce</Text>,
      Icon:<AiOutlineShoppingCart fontSize={'16px'}/>,
      panel: <MyVoucher brandData={brandData} buyVoucer={true}/>
    },
    {
      title:"Lifestyle", 
      compoent:<Text>Lifestyle</Text>,
      Icon:<PiBagBold fontSize={'14px'}/>,
      panel: <MyVoucher brandData={brandData} buyVoucer={true}/>
    },
    {
      title:"Food & beverages", 
      compoent:<Text>Food & beverages</Text>,
      Icon:<IoFastFoodOutline fontSize={'16px'}/>,
      panel: <MyVoucher brandData={brandData} buyVoucer={true}/>
    },
    {
      title:"Clothing", 
      compoent:<Text>Clothing</Text>,
      Icon:<IoShirtOutline fontSize={'15px'}/>,
      panel: <MyVoucher brandData={brandData} buyVoucer={true}/>
    },
    {
      title:"Travel", 
      compoent:<Text>Travel</Text>,
      Icon:<LuPlaneTakeoff fontSize={'15px'}/>,
      panel: <MyVoucher brandData={brandData} buyVoucer={true}/>
    },

  ]






  return (
    <VStack  {...SLIDE_IN_BOTTOM}  w={'100%'}  >

<Tabs w={'100%'} variant='unstyled'>
      <VStack p={4} gap={0}  alignItems={'start'} w={'100%'} bg={'#fff'} shadow={'md'} rounded={'md'}>
        <Text fontSize={'sm'} fontWeight={500}>Shop by category</Text>

     

  <TabList mt={0}>
    {buyVoucherData?.map(({title, Icon})=><Tab display={'flex'} gap={1} alignItems={'center'} bgSize={'sm'} rounded={'md'} fontSize={'xs'} color={'gray.500'} fontWeight={500}  _selected={{ color: '#3725EA', bg: '#3725EA26' }}>{Icon}{title}</Tab>)}
    
  </TabList>
  </VStack>




  <TabPanels>

    {buyVoucherData?.map(({panel})=><TabPanel>
      {panel}
    </TabPanel>)}
    
  </TabPanels>
</Tabs>

    </VStack>
  )
}

export default BuyVoucher