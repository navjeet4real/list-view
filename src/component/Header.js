import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";

const Header = () => {
  return (
    <>
     <Box
        sx={{
          width: "100%",
          backgroundColor: "#4C93CE",
          boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
          height: "15vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">React Redux App</Typography>
      </Box>
    </>
  );
};

export default Header;