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
    this.props.getCommentsForPost("5ddd5f0bacfb744940f2cc15")
  };

  render() {
    // const {postId} = this.props; //uncomment when PostPage is recieving a postID
    const displayComments = this.props.comments.map((comment) => {
        return <Comment key={comment._id} commentInfo={comment} />
    })
    const postInfo =
    {
      "title": "Electric F-150",
      "tags": [
          "all aboard",
          "thank god for low rolling resistance",
          "physics makes me look good"
      ],
      "_id": "5ddd5f0bacfb744940f2cc15",
      "topic": "5ddd5d44acfb744940f2cc11",
      "body": "Apparently it pulls trains",
      "username": "robdegeorge",
      "votes": 0,
      "created": "2019-11-26T17:21:15.760Z",
      "__v": 0
    }

    return (
      <PostPageWrapper>
        <BackButton goBack={this.props.history.goBack()}/>
        <Post postInfo={postInfo}/>
        <CommentsWrapper>
          {displayComments}
        </CommentsWrapper>
      </PostPageWrapper>
    );
  };
};

export default withPosts(PostPage);
