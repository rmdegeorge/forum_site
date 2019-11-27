import React, {Component} from 'react';
import styled from 'styled-components';


import {withPosts} from '../providers/PostDataProvider'
import Post from '../Components/Post';

import axios from 'axios';
const API_HOST = process.env.REACT_APP_API_HOST; // delete this line once state and axios calls are moved to Context.

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
    axios.get(`${API_HOST}posts/`).then(res => {
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
