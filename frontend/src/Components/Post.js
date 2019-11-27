import React from 'react';
import styled from 'styled-components';
import {withPosts} from '../providers/PostDataProvider';
import {Link} from 'react-router-dom';

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
`;
const PostBody = styled.div`
  padding: 10px;
`;
const CommentButton = styled.button``;
const PostTags = styled.div``;
const PostVotes = styled.div``;
const VoteBtn = styled.button``;
const NavLink = styled(Link)`
  color: inherit;
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: Number
    };
  };
  componentDidMount() {
    this.setState({
      votes: this.props.postInfo.votes
    });
  }
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
    const {_id,topic,title,body,username,tags,created,votes} = this.props.postInfo
    const date = new Date(created).toUTCString();

    console.log(`Current Votes on render: ${this.state.votes}`);

    return (
      <PostWrapper>
        <PostTitle>
          <NavLink to={`/Posts/${_id}`}>
            {title}
          </NavLink>
        </PostTitle>
        <UNameAndTime>
          Posted by: {username} on {date}
        </UNameAndTime>
        <PostBody>{body}</PostBody>
        <PostTags>{tags.join(', ')}</PostTags>
        <PostVotes>{this.state.votes}</PostVotes>
        <VoteBtn type="up" onClick={() => this.handleVote("up",this.state.votes,_id)}>Sweet!</VoteBtn>
        <VoteBtn type="down" onClick={() => this.handleVote("down",this.state.votes,_id)}>Not Cool</VoteBtn>
        <CommentButton>Comment</CommentButton>
      </PostWrapper>
    )
  }
}

export default withPosts(Post);
