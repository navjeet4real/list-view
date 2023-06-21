import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const LoadingScreen = () => {
  return <> 
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <CircularProgress size={60} />
    <Typography variant="h6" mt={2}>
      Loading...
    </Typography>
  </Box></>;
};

export default LoadingScreen;