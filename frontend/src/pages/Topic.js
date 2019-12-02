import React, {Component} from 'react';
import styled from 'styled-components';
import {withPosts} from '../providers/PostDataProvider'

import Post from '../Components/Post';
import BackButton from '../Components/BackButton'

const TopicWrapper = styled.div``;
const TopicTitle = styled.h1``;

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: String,
    };
  };

  componentDidMount(){
    this.props.getPostsForTopic(this.props.match.params.topicId);
    this.props.getTopicOfPost(this.props.match.params.topicId)
      .then(res => {
        this.setState({
          topic: res.data.name
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  render(){

    const populatePosts = this.props.posts.map((post) => {
      return <Post key={post._id} postInfo={post} />
    });
    console.log(`state`)
    console.log(this.state.topic);
    return (
      <TopicWrapper>
        <BackButton goBack={this.props.history.goBack}/>
        <TopicTitle>
          {this.state.topic}
        </TopicTitle>
        {populatePosts}
      </TopicWrapper>
    );
  }
};
export default withPosts(Topic);
