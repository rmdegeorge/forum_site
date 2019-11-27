import React from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.div`
  width: 100%;
  border: 1px solid #000000;
  padding: 10px;
  margin: 10px 0 0 0;
`;
const UNameAndTime = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 10pt;
`;
const CommentBody = styled.div`
  padding: 10px;
`;
const ReplyButton = styled.button``;


function Comment(props) {
  const {username,body,created} = props.commentInfo;
  const date = new Date(created).toUTCString();

  return (
    <CommentWrapper>
      <UNameAndTime>
        Posted by: {username} on {date}
      </UNameAndTime>
      <CommentBody>{body}</CommentBody>
      <ReplyButton>Reply</ReplyButton>
    </CommentWrapper>
  )
}

export default Comment;
