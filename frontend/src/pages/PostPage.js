import React from 'react';
import styled from 'styled-components';

import Post from '../Components/Post';
import Comment from '../Components/Comment';

import axios from 'axios';
const API_HOST = "http://192.168.1.37:8080/"; // delete this line once state and axios calls are moved to Context.


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
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }
  componentDidMount() {
    this.getCommentsForPost("5ddd5f0bacfb744940f2cc15")
  }
  getCommentsForPost = (postId) => {
    axios.get(`${API_HOST}comments/${postId}`).then((res) => {
      this.setState({
        comments: res.data
      })
      console.log(res.data)
    }).catch((err) => {
      console.error(err);
    })
  }

  render() {
    // const {postId} = this.props; //uncomment when PostPage is recieving a postID
    const displayComments = this.state.comments.map((comment) => {
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
        <Post postInfo={postInfo}/>
        <CommentsWrapper>
          {displayComments}
        </CommentsWrapper>
      </PostPageWrapper>
    );
  };
};

export default PostPage;