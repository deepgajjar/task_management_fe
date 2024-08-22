import React, { useEffect, useState } from "react";
import {
  useCreateTicketMutation,
  useUpdateTicketMutation,
} from "../../store/Api/Ticket";
import { useDispatch, useSelector } from "react-redux";
import { setCreateNewTicketModalFalg } from "../../store/slices/flagSlice";
import { Box, Grid, Modal } from "@mui/material";
import TicketCard from "../Cards/TicketCard";
import { showNotification } from "../../utils/validations/toasts";
import CreateTaskModal from "../Modals/CreateTaskModal";

const TaskSection = ({ tickets, refetch }) => {
  const dispatch = useDispatch();
  const [createTicket, { isLoading: createTicketLoading }] =
    useCreateTicketMutation();

  const [updateTicket, { isLoading: updateTicketLoading }] =
    useUpdateTicketMutation();

  const [updateTask, setUpdateTask] = useState({
    isUpdate: false,
    selectedTaskDetails: {},
  });

  const { createNewTicketModalFlag } = useSelector((state) => state.flags);
  const createUpdateTask = async (values) => {
    try {
      if (updateTask?.isUpdate) {
        const data = await updateTicket({
          body: {
            title: values?.title,
            description: values?.details,
            assignedTo: values?.assigned,
          },
          id: updateTask?.selectedTaskDetails?._id,
        });
        setUpdateTask({
          isUpdate: false,
          selectedTaskDetails: {},
        });
        showNotification(data?.data?.message, "success");
      } else {
        const data = await createTicket({
          title: values?.title,
          description: values?.details,
          assignedTo: values?.assigned,
        });
        showNotification(data?.data?.message, "success");
      }
      dispatch(setCreateNewTicketModalFalg(false));
      await refetch();
    } catch (error) {}
  };

  const closeModal = () => {
    if (createTicketLoading || updateTicketLoading) return;
    setUpdateTask({
      isUpdate: false,
      selectedTaskDetails: {},
    });
    dispatch(setCreateNewTicketModalFalg(false));
  };

  const taskClickHandler = (task) => () => {
    setUpdateTask({
      isUpdate: true,
      selectedTaskDetails: task,
    });
  };
  useEffect(() => {
    if (updateTask?.isUpdate) dispatch(setCreateNewTicketModalFalg(true));
  }, [updateTask?.isUpdate]);

  return (
    <Box
      sx={{
        padding: "15px",
        paddingBottom: "64px",
        width: "100%",
      }}
    >
      <>
        <Grid container spacing={2}>
          {tickets?.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item?._id}>
                <TicketCard
                  ticketInfo={item}
                  clickHandler={taskClickHandler(item)}
                />
              </Grid>
            );
          })}
        </Grid>
        <Modal
          sx={{
            width: "100%",
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
          open={createNewTicketModalFlag}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <CreateTaskModal
            createTicket={createUpdateTask}
            update={updateTask}
            isRunning={createTicketLoading || updateTicketLoading}
          />
        </Modal>
      </>
    </Box>
  );
};

export default TaskSection;
