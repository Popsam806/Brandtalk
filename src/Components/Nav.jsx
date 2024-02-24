import React from "react";
import { MoreVert } from "@mui/icons-material";

import { Box, Typography } from "@mui/material";

function Nav() {
  return (
    <Box
      sx={{
        padding: {
          xs: "1rem",
          md: "1rem 2rem",
        },
        position: "absolute",
        color: "#fff",
      }}
    >
      <MoreVert />
    </Box>
  );
}

export default Nav;
