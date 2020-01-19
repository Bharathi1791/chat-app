import React from 'react';
import styled from 'styled-components';

const formatTimeStamp = (ts) => {
  const d = new Date(ts);
  const time = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  const date = `${d.getDate()}/${d.getMonth() + 1}`;
  return `${time} - ${date}`;
};

const Message = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -44px;
`;

const NickName = styled.p`
  font-family:'Chathura', sans-serif; 
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #007af6;
`;

const Chat = styled.p`
  margin-top: -27px;
  font-weight: bold;
  font-size: 30px;
`;

export const Messages = ({ messages }) => {
  return (
    <div>
      {
        messages
          .map(({ message, nick_name, timestamp }) => {
            return (
              <Message key={timestamp}>
                <NickName>{nick_name} ({formatTimeStamp(timestamp)})</NickName>
                <Chat>{message}</Chat>
              </Message>
            )
          })
      }
    </div>
  )
}