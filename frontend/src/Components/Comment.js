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
  const {username,body,created} = props.commentInfo;
  const date = new Date(created).toUTCString();

  return (
    <CommentWrapper>
    I'm a comment!
      <Username>{username}</Username>
      <TimeStamp>{date}</TimeStamp>
      <CommentBody>{body}</CommentBody>
      <ReplyButton>Reply</ReplyButton>
    </CommentWrapper>
  )
}

export default Comment;
