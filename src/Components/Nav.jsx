import React from "react";
import { MoreVert } from "@mui/icons-material";

import { Typography } from "@mui/material";

function Nav() {
  return (
    <div
      style={{
        padding: "1rem 2rem",
        position: "absolute",
        color: "#fff"
      }}
    >
      <MoreVert />
    </div>
  );
}

export default Nav;
