import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#7DA3A1",
          color: "white",
          padding: 2,
          zIndex: 100,
          height: "64px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontFamily: "Roboto", fontWeight:  700, color: "white" }}
        >
          レンタルなんでも貸すやつ
        </Typography>
      </Box>
      <Box>
        <div style={{ height: "40px" }} />
      </Box>
    </div>
  );
};

export default Header;
