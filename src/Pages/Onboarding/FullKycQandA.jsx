import React, { useState } from 'react';
import FullKycQandAFrame from './FullKycQandAFrame';
import { Box, HStack, Input, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';



const FullKycQandA = () => {

    const navigate = useNavigate();

    return (
        <FullKycQandAFrame>
            <Box
                bg={"#F8F3FF"}
                borderRadius={"md"}
                p={4}
            >
                <Text color={'#100F14'} fontWeight={600} fontSize={'sm'} mb={1}>
                    Answer following questions.
                </Text>

                <Text color={'#49475A'} fontWeight={500} fontSize={'xs'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                </Text>

                <Box my={2} height="300px" bg={"#fff"} boxShadow={"md"} borderRadius={"md"} p={4}>
                    <Box mb={6}>
                        <Text
                            color={"#1A1A1A"}
                            fontSize={"sm"}
                            fontWeight={500}
                            mb={2}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                        </Text>
                        <Input placeholder='Enter answer here' fontSize={"sm"} fontWeight={500} />
                    </Box>
                    <Box>
                        <Text
                            color={"#1A1A1A"}
                            fontSize={"sm"}
                            fontWeight={500}
                            mb={2}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                        </Text>
                        <Input placeholder='Enter answer here' fontSize={"sm"} fontWeight={500} />
                    </Box>

                </Box>
            </Box>
            <HStack justifyContent={"center"} mt={4} >
                <PrimaryButton title={"Next"}
                 onClick={()=> navigate("/full-kyc-face-verification")}
                 w={"80%"} />
            </HStack>

        </FullKycQandAFrame>
    );
};

export default FullKycQandA;
