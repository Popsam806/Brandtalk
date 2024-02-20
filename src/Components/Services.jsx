import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger  } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)


function Services() {
  const textRef = useRef()
  useEffect(() => {
    const text = textRef.current;
    // gsap.fromTo(text, {rotation: 180, duration: 5, scrollTrigger: {
    //   trigger: text
    // }})
  }, [])



  return (
    <Box minHeight="100vh" bgcolor="lightgrey" pl={10} pr={10} pt={5} pb={5}>
      <Typography variant="h4" fontWeight={600} textAlign="center" gutterBottom>
        SERVICES
      </Typography>
      <Box spacing={2}>
        {services.map((serve) => (
          <Grid  container spacing={2} sx={{
            "&:hover": {
              background: "grey"
            },
            padding:'0.625rem',
            display:'flex',
            alignItems:'center'
          }}>
            <Grid item sx={12} md={8}>
              <Typography sx={{
                fontWeight: 700
              }} variant="h2" component="h1" ref={textRef}>{serve.serviceName}</Typography>
            </Grid>
            <Grid item sx={12} md={4} >
              <Typography variant="b0dy2">
                {serve.serviceList}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}

const services = [
  {
    id: 1,
    serviceName: "SOCIAL MEDIA",
    serviceList:
      "Social Media Strategy, Social Media Strategy, Social Media Strategy, Social Media Strategy",
  },
  {
    id: 2,
    serviceName: "PUBLIC RELATIONS",
    serviceList:
      "Social Media Strategy, Social Media Strategy, Social Media Strategy, Social Media Strategy",
  },
  {
    id: 3,
    serviceName: "MARKETING",
    serviceList:
      "Social Media Strategy, Social Media Strategy, Social Media Strategy, Social Media Strategy",
  },
  {
    id: 4,
    serviceName: "INFLUENCER MARKETING",
    serviceList:
      "Social Media Strategy, Social Media Strategy, Social Media Strategy, Social Media Strategy",
  },
  {
    id: 5,
    serviceName: "CONTENT CREATION",
    serviceList:
      "Social Media Strategy, Social Media Strategy, Social Media Strategy, Social Media Strategy",
  },
  {
    id: 6,
    serviceName: "DIGITAL ADVERTISER",
    serviceList:
      "Social Media Strategy, Social Media Strategy, Social Media Strategy, Social Media Strategy",
  },
];

export default Services;
