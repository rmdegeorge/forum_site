import React from 'react';
import styled from 'styled-components';
import {withPosts} from '../providers/PostDataProvider';

import Post from '../Components/Post';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > :nth-child(1n) {
    margin: 10px auto 0 auto;
    width: 75%;
  }
`;
const Title = styled.h1`
  text-align: center;
`;

class Home extends React.Component {

  componentDidMount() {
    this.props.getRandomPosts();
  };

  render() {
    const sortedPosts = this.props.allPosts.sort((a, b) => (a.votes > b.votes) ? -1 : 1); // sort all posts by number of votes
    const displayPopularPosts = sortedPosts.slice(0,9).map((post) =>
      <Post key={post._id} postInfo={post} />
    );
    return (
      <HomeWrapper>
        <Title>Top 10 Most Popular Posts</Title>
        {displayPopularPosts}
      </HomeWrapper>
    )
  }
}

export default withPosts(Home);
