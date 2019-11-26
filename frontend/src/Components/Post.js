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
const PostVotes = styled.div``;
const VoteBtn = styled.button``;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.postInfo.votes
    };
  };
  handleVote = (type) => {
    if (type === "up") {
      this.setState((prev) => {
        votes: prev.votes++
      });
    } else {
      this.setState((prev) => {
        votes: prev.votes--
      });
    };
    // This method may need to be moved to context so that it
    // can update the vote count in the DB
  };

  render() {
    const {topic,title,body,username,tags,created,votes} = this.props.postInfo
    const date = new Date(created).toUTCString();
    return (
      <PostWrapper>
        <PostTitle>{title}</PostTitle>
        <UserName>{username}</UserName>
        <TimeStamp>{date}</TimeStamp>
        <PostBody>{body}</PostBody>
        <PostTags>{tags.join(', ')}</PostTags>
        <PostVotes>{this.state.votes}</PostVotes>
        {/* <VoteBtn type="up" onClick={() => this.handleVote("up")}>Sweet!</VoteBtn>
        <VoteBtn type="down" onClick={() => this.handleVote("down")}>Not Cool</VoteBtn> */}
        <ReplyButton>Reply</ReplyButton>
      </PostWrapper>
    )
  }
}

export default Post;
