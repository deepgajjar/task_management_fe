import React from "react";
import { Box, Typography } from "@mui/material";
import SignUpSignIn from "../../components/Forms/SignUpSignIn";
import { useNavigate } from "react-router-dom";
import { useLoginAuthMutation } from "../../store/Api/Auth";
import { ShowNotification } from "../../utils/validations/toasts";

const Signin = () => {
  const navigate = useNavigate();
  const [sigin, { isLoading }] = useLoginAuthMutation();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const data = await sigin(values);
      if(!!data?.error){
        ShowNotification(data?.error?.data?.message,"error")
      }
      if (!!data?.data && Object.hasOwn(data?.data, "token")) {
        window.localStorage.setItem("token", data?.data?.token);
        ShowNotification(data?.data?.message,"success")
        navigate("/dashboard");
      }
      console.log("data ==>> ",data)
    } catch (error) {
      ShowNotification("something went wrong. please try again","error")
      console.log("form values error==>>> ", error);
    }
  };

  return <SignUpSignIn title={"Sign In"} submitHandler={handleSubmit} />;
};

export default Signin;
