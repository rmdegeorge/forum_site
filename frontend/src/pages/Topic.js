import React, {Component} from 'react';
import styled from 'styled-components';

import axios from 'axios';

import {withPosts} from '../providers/PostDataProvider'
import Post from '../Components/Post';

const TopicWrapper = styled.div``;
const TopicTitle = styled.div``;


class Topic extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    axios.get("http://192.168.1.37:8080/posts/").then(res => {
      this.setState({posts: res.data})
    })
  }

  render(){

    const populatePosts = this.state.posts.map((post) => {  
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