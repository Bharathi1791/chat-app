import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Messages = ({ messages }) => (
  <div>
    {
      messages
        .map(({ message, nickname, timestamp }) => (
          <Message key={timestamp}>
            {
              nickname
                ? (
                  <NickName>
                    {nickname}
                    (
                    {formatTimeStamp(timestamp)}
                    )
                  </NickName>
                )
                : <>Left Message:</>
            }
            <Chat>{message}</Chat>
          </Message>
        ))
    }

  </div>

);

Messages.propTypes = {
  messages: PropTypes.arrayOf(Object).isRequired,
};

export default Messages;
