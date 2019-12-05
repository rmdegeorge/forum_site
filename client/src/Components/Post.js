import React from 'react';
import styled from 'styled-components';
import {withPosts} from '../providers/PostDataProvider';
import PostCard from './PostCard';

import axios from 'axios';
const API_HOST = "http://localhost:8000/";

const PostWrapper = styled.div`
  width: 100%;
  margin: 0 0 0 0;
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: Number,
      topic: String,
      onePost: {
        tags: [],   //This is here to prime state for the tags array. if its not there, the .join method will break on render before the data comes back from axios
      },

    };
  };
  componentDidMount() {
    if (this.props.type === "postPage") {
      axios.get(`${API_HOST}posts/OnePost/${this.props.postId}`)
        .then((res) => {
          try {
            this.setState({
              onePost: res.data,
              votes: res.data.votes
            });
          } catch(error) {
            console.error(error.message);
          }
          finally {
            this.getTopic(this.state.onePost.topic)
          }
        });
    } else {
      this.setState({
        onePost: this.props.postInfo,
        votes: this.props.postInfo.votes
      })
      this.getTopic(this.props.postInfo.topic)
    };
  };

  getTopic = (topicId) => {
    if (this.props.type === "popular" || "postPage") {  // get the topic name
      this.props.getTopicOfPost(topicId)
        .then((res) => {
          this.setState({
            topic: res.data.name
          })
        })
        .catch((err) => {
          console.error(err);
        });
    };
  };
  handleVote = (type,currentVotes,postId) => {
    let newVoteCount;
    if (type === "up") {
      this.setState(() => {
        return {
          votes: currentVotes + 1
        }
      });
      newVoteCount = {votes: currentVotes + 1};
    } else {
      this.setState((prev) => {
        return {
          votes: currentVotes - 1
        }
      });
      newVoteCount = {votes: currentVotes - 1}
    };

    this.props.handleVotes(postId, newVoteCount);
  };

  render() {
    return (
      <PostWrapper>
        <PostCard
          onePost={this.state.onePost}
          votes={this.state.votes}
          topic={this.state.topic}
          type={this.props.type}
          handleVote={this.handleVote}
        />
      </PostWrapper>
    );
  };
};

export default withPosts(Post);





//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
