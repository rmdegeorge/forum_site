import React from 'react';
import styled from 'styled-components';
import {withPosts} from '../providers/PostDataProvider';

import Post from '../Components/Post';
import Comment from '../Components/Comment';

const PostPageWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0 auto;
`;
const CommentsWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 0 0 auto;
  position: relative;
  right: 0;

  > :nth-child(2n) {
    background-color: grey;
  }
`;


class PostPage extends React.Component {

  componentDidMount() {
    console.log(this.props.match.params.postId);
    // NEED to call a function to get one post with the above post ID when that functionality is available from the backend
    this.props.getCommentsForPost(this.props.match.params.postId)
  };

  render() {
    const displayComments = this.props.comments.map((comment) => {
        return <Comment key={comment._id} commentInfo={comment} />
    })

    return (
      <PostPageWrapper>
        the Post will go here when we have Get One post functionality on the backend
        {/* <Post postInfo={~~~~~Insert Post info HERE~~~~~~~}/> */}
        <CommentsWrapper>
          {displayComments}
        </CommentsWrapper>
      </PostPageWrapper>
    );
  };
};

export default withPosts(PostPage);
