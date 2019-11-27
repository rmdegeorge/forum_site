import React from 'react';
import styled from 'styled-components';
import {withPosts} from '../providers/PostDataProvider';

import Post from '../Components/Post';
import Comment from '../Components/Comment';
import BackButton from '../Components/BackButton'

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
    this.props.getOnePost(this.props.match.params.postId)
    this.props.getCommentsForPost(this.props.match.params.postId)
  };

  render() {
    const displayComments = this.props.comments.map((comment) => {
        return <Comment key={comment._id} commentInfo={comment} />
    })

    return (
      <PostPageWrapper>
        <BackButton goBack={this.props.history.goBack}/>
        <Post postInfo={this.props.onePost}/>


        <CommentsWrapper>
          {displayComments}
        </CommentsWrapper>
      </PostPageWrapper>
    );
  };
};

export default withPosts(PostPage);
