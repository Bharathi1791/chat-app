
import React from 'react';
import styled from 'styled-components';
import LoginForm from '../Components/LoginForm';
import './Font.css';

const MainLayout = styled.div`
    width: 100%;
    margin: 0px auto;
`;

const Header = styled.div`
    padding: 10px;
    text-align: center;
    background: #80bfff;
    color: white;
    font-size: 30px;
    font-family: 'Chathura', sans-serif;       
    border-radius: 20px;  
    font-weight: bold;                                                                                                                                                          
`;

const Login = () => (
  <MainLayout>
    <Header>
      <h1>Uni Chat</h1>
      <p>Unique Chat with unique people</p>
    </Header>
    <LoginForm />
  </MainLayout>
);

export default Login;
