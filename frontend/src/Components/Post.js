import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
  width: 100%;
  border: 1px solid #000000;
`;
const PostTitle = styled.div``;
const UserName = styled.div``;
const PostBody = styled.div``;
const ReplyButton = styled.button``;
const PostTags = styled.div``;

function Post(props) {
  return (
    <PostWrapper>
      <PostTitle>{props.title}Generic Post Title</PostTitle>
      <UserName>{props.username}My_StUpId_UsErNaMe</UserName>
      <PostBody>{props.body}
        <p>
          That just sounds like slavery with extra steps. Puh rum pum pow! Your failures are your own,
          old man! I say, follow throooough! They're robots Morty! It's okay to shoot them! They're just
          robots! No jumping in the sewer! It's like the N word and the C word had a baby, and it was
          raised by all the bad words for Jews. It's not like we can do this every week, we get 3 or 4
          more of these tops. Prepare to be emancipated from your own inferior genes!
        </p>
      </PostBody>
      <PostTags></PostTags>
      <ReplyButton>Reply</ReplyButton>
    </PostWrapper>
  )
}

export default Post;
