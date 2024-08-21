import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpSignIn from "../../components/Forms/SignUpSignIn";
import { useCreateUserMutation } from "../../store/Api/Auth";
import { ShowNotification } from "../../utils/validations/toasts";

const Signup = () => {
  const navigate = useNavigate();
  const [createUser, { isLoading }] = useCreateUserMutation();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const data = await createUser({
        ...values,
        username: values?.userName,
      });
      if(!!data?.error){
        ShowNotification(data?.error?.data?.message,"error")
      }
      if (!!data?.data && Object.hasOwn(data?.data, "token")) {
        window.localStorage.setItem("token",data?.data?.token);
        ShowNotification(data?.data?.message,"success")
        navigate("/dashboard");
      }
      console.log(
        "form values ==>>> ",
        data,
      );
    } catch (error) {
      console.log("form values error==>>> ", error);
    }
  };

  return (
    <SignUpSignIn
      title={"Sign Up"}
      submitHandler={handleSubmit}
      isSignup={true}
    />
  );
};

export default Signup;
