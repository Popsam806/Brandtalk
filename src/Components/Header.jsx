import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "./Assets/header1-y1iD3thO.png";
import Nav from "./Nav";

function Header() {
  return (
    <Box height="100vh">
      <Typography
        variant="h5"
        fontWeight={600}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          padding: "1rem",
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
          }
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
        />
        <Typography variant="h6" textAlign="center" zIndex={"99"}>
          Cultivating the art of storytelling to build brands
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
