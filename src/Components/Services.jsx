import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Service.css";
// gsap.registerPlugin(ScrollTrigger);

function Services() {
  const ServiceName = ({ children }) => {
    const textRef = useRef();

    useEffect(() => {
      ScrollReveal().reveal(textRef.current, {
        origin: "top",
        distance: "1.25rem",
        duration: 1000,
        reset: true,
        delay: 200,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
      });
    }, []);

    return <div ref={textRef}>{children}</div>;
  };
  const ServiceList = ({ children }) => {
    const listRef = useRef();

    useEffect(() => {
      ScrollReveal().reveal(listRef.current, {
        opacity: 0.2,
        duration: 1000,
        reset: true,
        delay: 200,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
      });
    }, []);

    return <div ref={listRef}>{children}</div>;
  };
  return (
    <Box
      minHeight="100vh"
      color="#fff"
      pl={{
        xs: 0,
        md: 10,
      }}
      pr={{
        xs: 0,
        md: 10,
      }}
      pt={5}
      pb={5}
      sx={{
        margin: 0,
      }}
    >
      <Typography variant="h4" fontWeight={600} textAlign="center" gutterBottom>
        SERVICES
      </Typography>
      <Box>
        {services.map((serve) => (
          <Grid
            container
            // spacing={2}
            sx={{
              padding: "1.5rem",
              display: "flex",
              alignItems: "center",
            }}
            className="service-grid"
          >
            <Grid item sx={12} md={8}>
              <ServiceName>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: {
                      xs: "2.1875rem",
                      md: "3.4375rem",
                    },
                  }}
                  variant="h2"
                  component="h1"
                  className="service-name"
                >
                  {serve.serviceName}
                </Typography>
              </ServiceName>
            </Grid>
            <Grid item sx={12} md={4}>
              <ServiceList>
                <Typography variant="b0dy2" className="service-list">
                  {serve.serviceList}
                </Typography>
              </ServiceList>
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
      "Social Media Strategy, Social Media Consultancy, Account setup and optimization, Calendar management, Performance tracking and monitoring, Community management, Campaign management, Analytics and perfomance tracking",
  },
  {
    id: 2,
    serviceName: "PUBLIC RELATIONS",
    serviceList:
      "Public relations strategy, Media outreach, Press releases, Crisi and reputation management, Event planning and execution, Brand Lanches, Media events and press trips",
  },
  {
    id: 3,
    serviceName: "MARKETING",
    serviceList:
      "Marketing campaign planningn and execution, Develop innovative exhebition spaces, Brand development and positioning, Marketing strategy development, Market research, identification and segmentation, Email marketing, Strategic partnerships",
  },
  {
    id: 4,
    serviceName: "INFLUENCER MARKETING",
    serviceList:
      "Influencer management, Brand ambassador programs, Influencer research and outreach, Influencer brand trips",
  },
  {
    id: 5,
    serviceName: "CONTENT CREATION",
    serviceList:
      "Content stsartegy & visual creation, Storyboard planning & execution, Videography and photography, Event graphics, Photo shoot planning and execution",
  },
  {
    id: 6,
    serviceName: "DIGITAL ADVERTISER",
    serviceList:
      "Social media ads, Google and set up Optimization, Keyword research and analysis, Pay-per-click (PPC) advertising campaigns, Copywriting and creative development, Perfomance analysis and conversion tracking, Monitoring and Optimization",
  },
];

export default Services;
