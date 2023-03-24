import React, { useContext } from 'react'
import { Form, Input, Button } from 'antd';
import { useState } from "react";
import AuthContext from '../Contexts/Auth';
import { useNavigate } from 'react-router-dom';
import ApiService from '../Services/Api';
import { message } from 'antd';

const Login = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const {setUser, setToken, setRefreshToken} = useContext(AuthContext);

    const successMessage = (text) => {
        messageApi.open({
            type: 'success',
            content: text,
        });
    };

    const errorMessage = (text) => {
        messageApi.open({
            type: 'error',
            content: text,
        });
    };

    const onFinish = (values) => {
      setIsLoading(true);
      ApiService.post(`/auth/login?email=${values.email}&password=${values.password}`).then((response) => {
        localStorage.setItem("User", JSON.stringify(response.data.user));
        localStorage.setItem("Token", response.data.token);
        localStorage.setItem("RefreshToken", response.data.refreshToken);

        setUser(response.data.user);
        setToken(response.data.token);
        setRefreshToken(response.data.refreshToken);

        navigate("/");
        successMessage('Logado com sucesso');
      }).catch((error) => {
          console.log(error);
          errorMessage('Email ou senha incorretos');
          setIsLoading(false);
      });
    };

  return (
    <div className="login-container">
      {contextHolder}
      <div className="login-box">
        <h1>Login</h1>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" loading={isLoading} />
          </Form.Item>
          <Form.Item label="Senha" name="password">
            <Input.Password placeholder="Senha" loading={isLoading} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login