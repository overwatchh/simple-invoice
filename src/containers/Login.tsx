import { useEffect } from "react";
import { Form, Input } from "@/components/Form";
import { useLoginMutation } from "@/services/auth";
import { useLazyGetUserProfileQuery } from "@/services/profile";
import { LoginFormField } from "@/types/form";
import { setItem } from "@/utils/localStorage";
import { ELocalItem } from "@/utils/localStorage/types";
import { Button, Spin } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [login, { data: authData, isSuccess: authSuccess, isLoading }] =
    useLoginMutation();
  const [getUserProfile, { data: profile }] = useLazyGetUserProfileQuery();
  //navigate
  const navigate = useNavigate();
  //login
  const handleLogin = (fieldValues: FieldValues) => {
    const loginInfo: LoginFormField = {
      password: fieldValues.password,
      userName: fieldValues.userName,
    };
    const { userName, password } = loginInfo;
    login({ username: userName, password });
  };
  //save authData(accessToken) to localStorage
  useEffect(() => {
    if (authSuccess) {
      setItem(ELocalItem.Auth, authData);
    }
    //eslint-disable-next-line
  }, [authSuccess]);
  //getUserProfile after have accessToken
  useEffect(() => {
    if (authSuccess) {
      getUserProfile();
    }
  }, [authSuccess, getUserProfile]);
  //save profileData(orgToken) to localStorage
  useEffect(() => {
    if (profile) {
      setItem(ELocalItem.Membership, profile.data.memberships[0]);
      navigate("/");
    }
    //eslint-disable-next-line
  }, [profile, authData]);

  return (
    <div>
      <Form name="loginForm" onSubmit={handleLogin}>
        <div>UserName:</div>
        <Input required type="text" name="userName" />
        <div>Password:</div>
        <Input required type="password" name="password" />
        <Button
          className="LoginForm__submitBtn"
          type="primary"
          htmlType="submit"
          disabled={isLoading}
        >
          {isLoading ? <Spin /> : <span>Login</span>}
        </Button>
      </Form>
      {/* {authError && <div>{authError.data.error_description}</div>} */}
    </div>
  );
};

export default Login;
