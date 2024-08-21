import { TextField } from "@mui/material";
import React from "react";

const CommonTextField = ({ label, name, errorMessage, ...props }) => {
  return (
    <TextField
      error={!!errorMessage}
      fullWidth
      label={label}
      name={name}
      {...props}
      helperText={!!errorMessage ? errorMessage : ""}
    />
  );
};

export default CommonTextField;
