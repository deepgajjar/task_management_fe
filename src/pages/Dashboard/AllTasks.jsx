import { Box, CircularProgress, Typography } from "@mui/material";
import {
  useLazyGetAllTicketsQuery,
  useLazyGetAssignedTicketsQuery,
} from "../../store/Api/Ticket";
import TaskSection from "../../components/Other/TaskSection";
import { useEffect } from "react";

const AllTasks = () => {
  const [getAllTikets, { data: tickets, isLoading }] =
    useLazyGetAllTicketsQuery();

  useEffect(() => {
    getAllTikets();
  }, []);

  return !!isLoading ? (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : (
    <TaskSection tickets={tickets} refetch={getAllTikets} />
  );
};

export default AllTasks;
