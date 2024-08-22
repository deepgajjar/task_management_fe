import React, { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useLazyGetAssignedTicketsQuery } from "../../store/Api/Ticket";

import TaskSection from "../../components/Other/TaskSection";

const Dashboard = () => {
  const [getAssignedTikets, { data: tickets, isLoading }] =
    useLazyGetAssignedTicketsQuery();

  useEffect(() => {
    getAssignedTikets();
  }, []);

  return !!isLoading ? (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : (
    <TaskSection tickets={tickets} refetch={getAssignedTikets}/>
  );
};

export default Dashboard;
