import {
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import CommonTextField from "../Common/CommonTextField";
import AssignUserDropDown from "../DropDowns/AssignUserDropDown";
import { useEffect } from "react";
import { useLazyGetUserListQuery } from "../../store/Api/Auth";
import { createTicketSchema } from "../../utils/validations/validationSchemas";

const CreateTaskModal = ({ createTicket, update, isRunning }) => {
  const [getUsersList, { data: users, isLoading }] = useLazyGetUserListQuery();
  const initialState =
    !!update && update?.isUpdate
      ? {
          title: update?.selectedTaskDetails?.title,
          details: update?.selectedTaskDetails?.description,
          assigned: update?.selectedTaskDetails?.assignedTo?.[0]?._id,
        }
      : { title: "", details: "", assigned: "" };
  useEffect(() => {
    getUsersList();
  }, []);
  const submitHandler = async (values, { setSubmitting }) => {
    try {
      await createTicket(values);
    } catch (error) {}
  };

  const updateClickHandler = (handleSubmit) => (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: { xs: "80%", lg: "50%" },
        p: 2,
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6" component="h2">
        Create new task
      </Typography>
      <Box sx={{ my: 4 }} />
      <Formik
        enableReinitialize={true}
        initialValues={initialState}
        validationSchema={createTicketSchema}
        onSubmit={submitHandler}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <Form>
            <CommonTextField
              name="title"
              label="title"
              placeholder="Enter task title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              errorMessage={
                errors?.title && touched?.title ? errors?.title : null
              }
            />
            <Box sx={{ my: 4 }} />
            <CommonTextField
              name="details"
              label="details"
              placeholder="Enter task details"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.details}
              errorMessage={
                errors?.details && touched?.details ? errors?.details : null
              }
            />
            <Box sx={{ my: 4 }} />
            <AssignUserDropDown
              list={users}
              label="Assigned to"
              value={values.assigned}
              name="assigned"
              handleChange={setFieldValue}
              handleBlur={handleBlur}
              errorMessage={
                errors?.assigned && touched?.assigned ? errors?.assigned : null
              }
            />
            <Button
              disabled={isRunning}
              onClick={updateClickHandler(handleSubmit)}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isRunning ? (
                <CircularProgress size={30} color="secondary" />
              ) : update?.isUpdate ? (
                "Update Task"
              ) : (
                "Create Task"
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateTaskModal;
