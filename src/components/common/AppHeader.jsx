import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";

const AppHeader = ({ headerRightBtns, headerLefttBtns }) => {
  const navigate = useNavigate();

  const logoClickHandler = () => {
    //  navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ mr: 5 ,fontSize:'1.4rem'}}
              onClick={logoClickHandler}
            >
              Task Management
            </Typography>
            {!!headerLefttBtns &&
              headerLefttBtns?.map((item, index) => {
                return (
                  <Button
                    key={`${item?.title}-${index}`}
                    onClick={item?.clickHandler}
                    sx={{
                      textTransform: "unset",
                      fontSize: "1rem",
                    }}
                    color="inherit"
                  >
                    {item?.title}
                  </Button>
                );
              })}
          </Box>
          <Box>
            {headerRightBtns?.map((item, index) => {
              return (
                <Button
                  sx={{
                    textTransform: "unset",
                    fontSize: "1rem",
                  }}
                  color="inherit"
                  key={`${item?.title}-${index}`}
                  onClick={item?.clickHandler}
                >
                  {item?.title}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default AppHeader;
