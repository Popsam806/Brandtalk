import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "./Assets/header1-y1iD3thO.png";
// import Nav from "./Nav";
import { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Header() {
  const imgRef = useRef();

  useEffect(() => {
    ScrollReveal().reveal(imgRef.current, {
      origin: "top",
      distance: "2.25rem",
      duration: 2000,
      opacity: 0.6,
      delay: 200,
      reset: true,
      easing: "cubic-bezier(0.5, 0, 0, 2)",
    });
  }, []);

  const textRef = useRef();

  useEffect(() => {
    ScrollReveal().reveal(textRef.current, {
      origin: "bottom",
      distance: "2.25rem",
      opacity: 0.6,
      duration: 2000,
      reset: true,
      delay: 200,
      easing: "cubic-bezier(0.5, 0, 0, 2)",
    });
  }, []);
  return (
    <Box height="100vh">
      <Typography
        variant="h5"
        color="#fff"
        fontWeight={600}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          padding: {
            xs: "1rem",
            md: "1rem 2rem",
          },
        }}
      >
        REMIX
      </Typography>
      <Box
        height="100%"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: {
            xs: "2rem",
            md: "8rem",
          },
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: "100%",
            marginBottom: "1rem",
            zIndex: "99",
          }}
          ref={imgRef}
        />
        <Typography
          variant="h6"
          textAlign="center"
          zIndex={"99"}
          color="#fff"
          ref={textRef}
        >
          Cultivating the art of storytelling to build brands
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
