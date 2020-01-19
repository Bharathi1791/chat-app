import React, { useState } from 'react';
import styled from 'styled-components';
import Chatroom from '../Views/Chatroom';
import '../Views/Font.css';

const FormWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  font-family: 'Chathura', sans-serif;       
`;

const Form = styled.form`
  width: 30%;
  font-family:'Chathura', sans-serif;      
  font-size: 25px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: space-between;
  border: 2px solid #80bfff;
  margin: 0px auto;
  border-radius: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 70%;
  border: 2px solid #80bfff;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  font-family:'Chathura', sans-serif; 
  height: 4vh;
`;

const Button = styled.button`
  width: 40%;
  border-radius: 10px;
  background-color: lightgray;
  border: 1 px solid gray;
  font-family:'Chathura', sans-serif; 
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
  &:hover {
    opacity: 0.7;
  }
`;

const ErrorMessage = styled.div`
  font-family:'Chathura', sans-serif; 
  color: red;
  font-weight: bold;
`;

const LoginForm = () => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { target } = event;
    const response = await fetch(`/api/user/login?nickname=${target.nickname.value}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      const result = await response.json();
      setUser(result);
      setErrorMessage(null);
    } else if (response.status === 409) {
      setErrorMessage('Failed to connect. Nickname already taken.');
    } else if (response.status === 400) {
      setErrorMessage('Bad Request');
    } else if (response.status === 500) {
      setErrorMessage('Internal Server Error');
    }
  };

  return (
    <FormWrapper>
      {user ? <Chatroom user={user} />
        : (
          <Form key="form" onSubmit={handleSubmit}>
            <Label>Nick Name</Label>
            <Input id="nickname" type="text" min="0" max="100" step="1" required />
            <Button type="submit">Connect</Button>
            <ErrorMessage>
              {errorMessage || null}
            </ErrorMessage>
          </Form>
        )}
    </FormWrapper>
  );
};

export default LoginForm;
