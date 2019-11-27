import React from 'react';
import styled from 'styled-components';

import Post from '../Components/Post';

import axios from 'axios';
const API_HOST = process.env.REACT_APP_API_HOST; // delete this line once state and axios calls are moved to Context.

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
  constructor(props) {
    super(props);
    this.state = {
      allPosts: []
    };
  };
  componentDidMount() {
    this.getRandomPosts();
  };
  getRandomPosts = () => {
    axios.get(`${API_HOST}posts/`)
      .then((res) => {
        this.setState({
          allPosts: res.data
        });
        console.log(this.state.allPosts);
      })
      .catch((err) => {
        console.error(err)
      });
  };
  render() {
    console.log(API_HOST);
    const sortedPosts = this.state.allPosts.sort((a, b) => (a.votes > b.votes) ? -1 : 1); // sort all posts by number of votes
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

export default Home;
