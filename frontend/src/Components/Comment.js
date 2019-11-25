import React from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.div`
  width: 100%;
  border: 1px solid #000000;
`;
const Username = styled.div``;
const TimeStamp = styled.div``;
const CommentBody = styled.div``;
const ReplyButton = styled.button``;


function Comment(props) {
  return (
    <CommentWrapper>
      <Username>{props.username}</Username>
      <TimeStamp>{props.time}</TimeStamp>
      <CommentBody>{props.comment}</CommentBody>
      <ReplyButton>Reply</ReplyButton>
    </CommentWrapper>
  )
}
