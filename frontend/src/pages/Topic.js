import React, {Component} from 'react';
import styled from 'styled-components';
import {withPosts} from '../providers/PostDataProvider'

import Post from '../Components/Post';

const TopicWrapper = styled.div``;
const TopicTitle = styled.div``;

class Topic extends Component {

  componentDidMount(){
    this.props.getPostsForTopic();
  };

  render(){

    const populatePosts = this.props.posts.map((post) => {
      return <Post postInfo={post} />
    })
    return (
      <TopicWrapper>
        <TopicTitle>{this.topic}</TopicTitle>
        {populatePosts}
      </TopicWrapper>
    );
  }
};
export default withPosts(Topic);
