import React from "react";
import SignUpSignIn from "../../components/Forms/SignUpSignIn";
import { useNavigate } from "react-router-dom";
import { useLoginAuthMutation } from "../../store/Api/Auth";
import { showNotification } from "../../utils/validations/toasts";

const Signin = () => {
  const navigate = useNavigate();
  const [sigin, { isLoading }] = useLoginAuthMutation();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const data = await sigin(values);
      if (!!data?.error) {
        showNotification(data?.error?.data?.message, "error");
      }
      if (!!data?.data && Object.hasOwn(data?.data, "token")) {
        window.localStorage.setItem("token", data?.data?.token);
        showNotification(data?.data?.message, "success");
        navigate("/dashboard");
      }
    } catch (error) {
      showNotification("something went wrong. please try again", "error");
    }
  };

  return <SignUpSignIn title={"Sign In"} submitHandler={handleSubmit} />;
};

export default Signin;
