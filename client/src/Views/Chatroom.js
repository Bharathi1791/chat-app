import React from 'react';
import styled from 'styled-components';
import Chat from '../Components/Chat';
import './Font.css';

const ChatWrapper = styled.div`
  width: 80%;
  margin: 0px auto;
  font-size: 30px;
`;

const Chatroom = (user) => {
  const userId = user.user.id;
  const nickName = user.user.nickname;
  return (
    <ChatWrapper>
      <Chat userId={userId} nickName={nickName} />
    </ChatWrapper>
  );
};

export default Chatroom;
