import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TicketCard = ({ ticketInfo, clickHandler }) => {
  return (
    <Box sx={{ width: "100%", cursor: "pointer" }}>
      <Card variant="outlined" onClick={clickHandler}>
        <CardContent>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              mb: 1,
            }}
          >
            <Typography sx={{ mr: "5px", fontWeight: "600" }}>
              Task id :{" "}
            </Typography>
            <Typography>{ticketInfo?._id}</Typography>
          </Box>
          <Typography
            variant="h6"
            component="div"
            fontWeight={"600"}
            sx={{ mb: 1, fontSize: "1rem" }}
            textOverflow={"ellipsis"}
          >
            {ticketInfo?.title}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
            }}
          >
            <Typography sx={{ mr: "5px", fontWeight: "600" }}>
              Assigned To :{" "}
            </Typography>
            <Typography>{ticketInfo?.assignedTo?.[0]?.userName}</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
            }}
          >
            <Typography sx={{ mr: "5px", fontWeight: "600" }}>
              Issued By :{" "}
            </Typography>
            <Typography>{ticketInfo?.createdBy?.[0]?.userName}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default TicketCard;
