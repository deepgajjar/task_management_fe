import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .max(50, "Username must be 50 characters or fewer.")
    .required("username is requred"),
  password: Yup.string()
    .min(6, "Password must be a more than 6 characters.")
    .required("Password is required"),
  email: Yup.string()
    .email("Please enter valid email address.")
    .required("email address is required."),
});

export const SigninSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be a more than 6 characters.")
    .required("Password is required"),
  email: Yup.string()
    .email("Please enter valid email address.")
    .required("email address is required."),
});

export const createTicketSchema = Yup.object().shape({
  title: Yup.string().required("Title field is required"),
});
