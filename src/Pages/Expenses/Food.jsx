import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import { AddIcon, CalendarIcon, Icon } from '@chakra-ui/icons'
import SecondaryButton from '../../Components/Buttons/SecondaryButton'
import { Button } from '@chakra-ui/button'
import { FaCcDinersClub } from 'react-icons/fa6'
import { IoFastFoodOutline, IoRestaurantOutline } from 'react-icons/io5'
import { RiRestaurantLine } from 'react-icons/ri'
import { MdOutlineRamenDining } from 'react-icons/md'
import { BiWalletAlt } from 'react-icons/bi'

const Food = () => {

    const transactions = [
        {
          id: 1,
          type: 'Dine In',
          icon: BiWalletAlt,
          date: '22 March 2024 - 01:12 PM',
          amount: '+ $500',
          color: 'green.500',
        },
        {
          id: 2,
          type: 'Takeaway',
          icon: MdOutlineRamenDining, // Replace with appropriate icon if needed
          date: '21 March 2024 - 05:45 PM',
          amount: '+ $200',
          color: 'green.500',
        },
        {
          id: 3,
          type: 'Delivery',
          icon: BiWalletAlt, // Replace with appropriate icon if needed
          date: '20 March 2024 - 11:30 AM',
          amount: '- $50',
          color: 'red.500',
        },
        {
          id: 2,
          type: 'Takeaway',
          icon: BiWalletAlt, // Replace with appropriate icon if needed
          date: '21 March 2024 - 05:45 PM',
          amount: '+ $200',
          color: 'green.500',
        },
        {
          id: 3,
          type: 'Delivery',
          icon: MdOutlineRamenDining, // Replace with appropriate icon if needed
          date: '20 March 2024 - 11:30 AM',
          amount: '- $50',
          color: 'red.500',
        },
        {
          id: 2,
          type: 'Takeaway',
          icon: MdOutlineRamenDining, // Replace with appropriate icon if needed
          date: '21 March 2024 - 05:45 PM',
          amount: '+ $200',
          color: 'green.500',
        },
        // Add more objects as needed
      ];




  return (
    <Box ps={4} >
        <HStack justifyContent={'space-between'} >
            <Box display={'flex'} flexDirection={'column'} justifyContent={'start'}>
            <Text as={'span'} fontWeight={500} fontSize={'lg'}>$ 8000</Text>
            <Text as={'span'} fontWeight={500} 
            bgGradient="linear(to-l, #3725EA, #5E0FCD)"
            bgClip="text" fontSize={'10px'}>Wallet balance</Text>
            </Box>

            <HStack>
            <Button
            cursor={'pointer'}
                        fontWeight={500}
                        size={"sm"}
                        leftIcon={<CalendarIcon color={"purple.800"} />}
                        colorScheme="gray"
                        color={"gray.700"}
                        variant="outline"
                        fontSize={"xs"}
                      >
                        Select Date Range
                      </Button>
                <PrimaryButton leftIcon={<AddIcon/>} title={'Upload Bill'} />
            </HStack>

        </HStack>

        <VStack pt={3}>
                {transactions?.map(({id, type, icon, date, amount, color})=><HStack  id={id} bg={''}  mb={2}  alignItems={'center'} w={'100%'} justifyContent={'space-between'}>
                    <HStack  >
                    <Icon color={'gray.800'} boxSize={10} rounded={'full'} p={2} bg={'#F6F6F6'} as={icon} />

                    <VStack alignItems={'start'} gap={0}>
                        <Text as={'span'} fontWeight={500} fontSize={'sm'} >{type}</Text>
                        <Text as={'span'} fontWeight={500} color={'gray.500'} fontSize={'xs'} >{date}</Text>
                    </VStack>
                    </HStack>

                    <Text me={2} fontSize={'sm'} fontWeight={500} as={'span'} color={color}>{amount}</Text>

                </HStack>)}
            </VStack>

    </Box>
  )
}

export default Food