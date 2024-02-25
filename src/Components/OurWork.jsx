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
      height="100vh"
      p={{
        xs:  3,
        md: 10,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        textAlign="center"
        gutterBottom
        color="#fff"
      >
        OUR WORK
      </Typography>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Swiper
          effect={"coverflow"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              autoplay: {
                enabled: false,
              },
              slidesPerView: 1,
            },
            768: {
              autoplay: {
                enabled: true,
              },
            },
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
                  margin: {
                    xs: "2rem",
                    md: "1rem"
                  },
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
