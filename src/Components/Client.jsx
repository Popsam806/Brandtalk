import React, { useEffect } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ClientImg } from "./OurWorkImg";
import "./Client.css";
import { Box, Typography } from "@mui/material";

const layouts = ["final", "plain", "columns", "grid"];

function Client() {
  useEffect(() => {
    gsap.registerPlugin(Flip);

    let container = document.querySelector(".container");
    let curLayout = 0;

    function nextState() {
      const state = Flip.getState(".letter, .for, .gsap", {
        props: "color,backgroundColor",
        simple: true,
      });

      container.classList.remove(layouts[curLayout]);
      curLayout = (curLayout + 1) % layouts.length;
      container.classList.add(layouts[curLayout]);

      Flip.from(state, {
        absolute: true,
        stagger: 0.07,
        duration: 0.7,
        ease: "power2.inOut",
        spin: curLayout === 0,
        simple: true,
        onEnter: (elements, animation) =>
          gsap.fromTo(
            elements,
            { opacity: 0 },
            { opacity: 1, delay: animation.duration() - 0.1 }
          ),
        onLeave: (elements) => gsap.to(elements, { opacity: 0 }),
      });

      gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
    }

    gsap.delayedCall(1, nextState);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <Box sx={{
      overflow: "hidden",
      padding: {
        xs: "2rem",
        md: "5rem"
      }
    }}>
      <Typography variant="h4" fontWeight={600} textAlign="center" gutterBottom color="#fff">
        CLIENTS
      </Typography>
      <div className="container final">
        {ClientImg.map((client) => (
          <div className={client.className} key={client.id}>
            <img src={client.imgUrl} alt={client.imgUrl} />
          </div>
        ))}
        {/* <div className="letter F">F</div>
      <div className="letter l">L</div>
      <div className="letter i">I</div>
      <div className="letter p">P</div>
      <div className="letter p">P</div>
      <div className="letter p">P</div> */}
        {/* <div className="for">for</div>
      <div className="gsap">GSAP</div> */}
      </div>
    </Box>
  );
}

export default Client;
