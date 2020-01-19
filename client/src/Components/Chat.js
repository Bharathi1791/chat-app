import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';
import { Messages } from './Messages';
import '../Views/Font.css';
import music from '../music/message.mp3';


const Input = styled.input`
  width: 65%;
  border: 2px solid #80bfff;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  font-family:'Chathura', sans-serif; 
  height: 5vh;
`;

const Form = styled.form`
  width: 70%;
  font-family:'Chathura', sans-serif;      
  font-size: 25px;
  display: flex;  
  flex-flow: row nowrap;
  justify-content: flex-start;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 20%;
  border-radius: 10px;
  background-color: lightgray;
  border: 1px solid gray;
  font-family:'Chathura', sans-serif; 
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  &:hover {
    opacity: 0.7;
  }
`;

const ChatHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-items: flex-start;
  justify-content: space-between;
  font-family:'Chathura', sans-serif; 
  margin-bottom: 40px;  
`;

const Title = styled.h4`
  font-size: 35px;
  text-align: top;
  margin: 0px;
  font-weight: bold;
`;

const socket = io.connect('http://localhost:8000');

const Chat = ({ userId, nickName }) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('api/chats/messages')
      .then((res) => res.json())
      .then(setMessages);
  }, [userId]);

  useEffect(() => {
    socket.on('received message', (msg) => {
      setMessages([...messages, msg]);
    });
    socket.on('left chat', (id) => {
      fetch(`api/user/${id}`)
        .then((data) => data.json())
        .then((data) => {
          if (userId === data.id) {
            window.location.reload();
          } else {
            const msg = { message: `${data.nick_name} left the chat.` };
            setMessages([...messages, msg]);
          }
        });
    });
  }, [userId, messages]);

  const saveChat = (e) => {
    const myAudio = document.getElementById('tune');
    myAudio.play();
    e.preventDefault();
    const message = e.target.chat.value;
    socket.emit('chat message', { message, userId });
    e.target.chat.value = '';
    return false;
  };

  const manualSocketDisconnect = () => {
    socket.emit('manual-disconnection', { socketId: socket.id, userId });
    fetch('api/chats/messages')
      .then((res) => res.json())
      .then(setMessages);
  };

  return (
    <div>
      <ChatHeader>
        <Title>Welcome {nickName} let's share your thoughts.....</Title>
        <Button type="button" onClick={manualSocketDisconnect}>Disconnect</Button>
      </ChatHeader>
      <Messages messages={messages} />
      <Form onSubmit={saveChat}>
        <Input required type="text" name="chat" />
        <Button type="submit">Send</Button>
        <audio id="tune"> <source src={music}></source></audio>
      </Form>
    </div>
  );
};

export default Chat;
