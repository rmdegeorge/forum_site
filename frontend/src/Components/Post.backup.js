import React from 'react';
import styled from 'styled-components';
import {withPosts} from '../providers/PostDataProvider';
import {Link, withRouter} from 'react-router-dom';

// MaterialUI Components
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

import axios from 'axios';
const API_HOST = process.env.REACT_APP_API_HOST;

const PostWrapper = styled.div`
  width: 100%;
  border: 1px solid #000000;
  padding: 10px;
  margin: 0 0 0 0;
`;
const PostTitle = styled.div`
  font-size: 20pt;
`;
const UNameAndTime = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 10pt;
  > span {
    margin-left: 2pt;
  }
`;
const PostBody = styled.div`
  padding: 10px;
`;
const CommentButton = styled(Button)`

`;
const PostTags = styled.div`
  display: inline-flex;
`;

const PostVotes = styled.div``;
const NavLink = styled(Link)`
  color: inherit;
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

    const {_id,title,body,username,tags,created,topic} = this.state.onePost
    const date = new Date(created).toUTCString();
    const displayTags = tags.map((tag,i) => <Chip size="small" key={tag + i} label={tag} />);

    return (
      <PostWrapper>
        <PostTitle>
          {
            this.props.type === "postPage"
            ?
            title
            :
            <NavLink to={`/Posts/${_id}`}>
              {title}
            </NavLink>
          }
        </PostTitle>
        <UNameAndTime>
          Posted by: {username}
          {
            this.props.type === "popular" || this.props.type === "postPage"
            ?
            <span>to <NavLink to={`/Topics/${topic}`}>
                      {this.state.topic}
                    </NavLink>
            </span>
            :
            null
          }
          <span>on {date}</span>
        </UNameAndTime>
        <PostBody>{body}</PostBody>
        <PostTags>{displayTags}</PostTags>
        <PostVotes>{this.state.votes}</PostVotes>
        <Button variant="contained" type="up" onClick={() => this.handleVote("up",this.state.votes,_id)}>Sweet!</Button>
        <Button variant="contained" type="down" onClick={() => this.handleVote("down",this.state.votes,_id)}>Not Cool</Button>
        <CommentButton variant="contained">Comment</CommentButton>
      </PostWrapper>
    );
  };
};

export default withRouter(withPosts(Post));





//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
