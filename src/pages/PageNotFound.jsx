import { Box, Typography } from "@mui/material";
import React from "react";

const PageNotFound = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Page Not Found.</Typography>
    </Box>
  );
};

export default PageNotFound;
