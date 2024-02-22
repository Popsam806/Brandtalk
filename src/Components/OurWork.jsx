import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Styles.css";
import WorkImg from "./OurWorkImg";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

export default function Carousel() {
  return (
    <Box
      Height="100vh"
      p={{
        xs: 3,
        md: 10,
      }}
      
    >
      <Typography variant="h4" fontWeight={600} textAlign="center" gutterBottom color="#fff">
        OUR WORK
      </Typography>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Swiper
          effect={"coverflow"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          cssMode={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
          className="mySwiper"
        >
          {WorkImg.map((ourWork) => (
            <SwiperSlide key={ourWork.id}>
              <img src={ourWork.imgUrl} height={"100%"} />
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  margin: "1rem",
                  color: "#fff",
                }}
              >
                {ourWork.title}
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
