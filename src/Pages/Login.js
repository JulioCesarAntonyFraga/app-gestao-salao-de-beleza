import React, { useContext } from 'react'
import { Form, Input, Button } from 'antd';
import { useState } from "react";
import AuthContext from '../Contexts/Auth';
import { useNavigate } from 'react-router-dom';
import ApiService from '../Services/Api';

const Login = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {setUser, setToken, setRefreshToken} = useContext(AuthContext);

    const onFinish = async (values) => {
      setIsLoading(true);
      ApiService.post(`/auth/login?email=${values.email}&password=${values.password}`).then((response) => {
        // console.log(response.data);
        localStorage.setItem("User", JSON.stringify(response.data.user));
        localStorage.setItem("Token", response.data.token);
        localStorage.setItem("RefreshToken", response.data.refreshToken);

        setUser(response.data.user);
        setToken(response.data.token);
        setRefreshToken(response.data.refreshToken);

        navigate("/");
        // successMessage('Logado com sucesso');
      }).catch((error) => {
      console.log(error);
          // errorMessage('Email ou senha incorretos')
      });
      
      setIsLoading(false);
    };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Senha" name="password">
            <Input.Password placeholder="Senha" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={isLoading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login