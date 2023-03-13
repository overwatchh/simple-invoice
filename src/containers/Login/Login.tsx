import logoImg from "@/assets/101DigitalLogo.png";
import "./Login.scss";
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
import Bubble from "@/components/Bubble";
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
    <div className="LoginForm">
      <div className="LoginForm__wrapper">
        <div className="LoginForm__logo">
          <img src={logoImg} alt="101digital logo" />
        </div>
        <div className="LoginForm__welcome">Welcome back!</div>
        <Form name="loginForm" onSubmit={handleLogin}>
          <div className="LoginForm__label">User mame</div>
          <div className="LoginForm__input">
            <Input required type="text" name="userName" />
          </div>
          <div className="LoginForm__label">Password</div>
          <div className="LoginForm__input">
            <Input required type="password" name="password" />
          </div>
          <Button
            className="LoginForm__submitBtn"
            type="primary"
            htmlType="submit"
            disabled={isLoading}
          >
            {isLoading ? <Spin /> : <span>Login</span>}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
