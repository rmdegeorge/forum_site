import React from 'react';
import styled from 'styled-components';

import {withPosts} from '../providers/PostDataProvider'
// import Post from '../Components/Post';

const TopicWrapper = styled.div``;
const TopicTitle = styled.div``;


function Topic(props) {
  // const populatePosts = props.posts.map((post) => {  //UNCOMMENT WHEN DATA IS AVAILABLE
  //   return <Post postInfo={post} />
  // }
  return (
    <TopicWrapper>
      <TopicTitle>{props.topic}</TopicTitle>
      {/* {populatePosts}  //UNCOMMENT WHEN DATA IS AVAILABLE*/}
    </TopicWrapper>
  );
};
export default withPosts(Topic);