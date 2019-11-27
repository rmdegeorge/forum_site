import React, {Component} from 'react';
import styled from 'styled-components';
import {withPosts} from '../providers/PostDataProvider'

import Post from '../Components/Post';
import BackButton from '../Components/BackButton'

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
        <BackButton goBack={this.props.history.goBack()}/>
        <TopicTitle>{this.topic}</TopicTitle>
        {populatePosts}
      </TopicWrapper>
    );
  }
};
export default withPosts(Topic);
