import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
  width: 100%;
  border: 1px solid #000000;
`;
const PostTitle = styled.div``;
const UserName = styled.div``;
const TimeStamp = styled.div``;
const PostBody = styled.div``;
const ReplyButton = styled.button``;
const PostTags = styled.div``;

function Post(props) {
  return (
    <PostWrapper>
      <PostTitle>{props.title}</PostTitle>
      <UserName>{props.username}</UserName>
      <TimeStamp>{props.time}</TimeStamp>
      <PostBody>{props.body}</PostBody>
      <PostTags>{props.tags}</PostTags>
      <ReplyButton>Reply</ReplyButton>
    </PostWrapper>
  )
}

export default Post;
