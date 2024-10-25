import React, { useState } from 'react';
import FullKycLocationFrame from './FullKycLocationFrame';
import { Box, Container, HStack, Text } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';


// Custom icon for marker (optional)
const locationIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const FullKycLocation = () => {
    const navigate = useNavigate();

    return (
        <FullKycLocationFrame>
            <Box
                bg={"#F8F3FF"}
                borderRadius={"md"}
                p={4}
            >
                <Text color={'#100F14'} fontWeight={600} fontSize={'sm'} mb={1}>
                    Location Verification
                </Text>

                <Text color={'#49475A'} fontWeight={500} fontSize={'xs'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                </Text>

                <Box my={2} height="300px">
                    {/* Map Container */}
                    <MapContainer
                        center={[51.505, -0.09]}
                        zoom={18}
                        style={{ height: '100%', width: '100%', borderRadius: '6px' }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[51.505, -0.09]} icon={locationIcon}>
                            <Popup>Your Location</Popup>
                        </Marker>
                    </MapContainer>
                </Box>
            </Box>
            <HStack justifyContent={"center"} mt={4} >
                <PrimaryButton title={"Next"} 
                onClick={()=> navigate("/full-kyc-q&a")}
                w={"80%"}
                 />
            </HStack>

        </FullKycLocationFrame>
    );
};

export default FullKycLocation;
