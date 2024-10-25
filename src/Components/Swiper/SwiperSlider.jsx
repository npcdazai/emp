import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Image, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import RupayCard from "../../Components/PayCards/RupayCard";
import Platinium from "../../Components/PayCards/Platinium";
import PlatiniumGift from "../../Components/PayCards/PlatiniumGift";
import './SwiperSlider.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function SwiperSlider() {
  return (
    <Box>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Platinium />
        </SwiperSlide>
        <SwiperSlide>
          <RupayCard />
        </SwiperSlide>
        <SwiperSlide>
          <PlatiniumGift />
        </SwiperSlide>
        <SwiperSlide>
          <Platinium />
        </SwiperSlide>
        <SwiperSlide>
          <RupayCard />
        </SwiperSlide>
        <SwiperSlide>
          <PlatiniumGift />
        </SwiperSlide>

      </Swiper>
      <Box className="slider-controler">
        <IconButton className="swiper-button-prev slider-arrow" aria-label="Previous slide" icon={<ChevronLeftIcon />} />
        <IconButton className="swiper-button-next slider-arrow" aria-label="Next slide" icon={<ChevronRightIcon />} />
      </Box>
    </Box>

  );
}

export default SwiperSlider;
