import React from 'react';
import styled from 'styled-components';
import { MDBCol} from "mdbreact";
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
  constructor() {
    super();

    this.state = {
      search: ''
    };
  }

  componentDidMount() {
    this.props.getRandomPosts();
  };

  updateSearch = event => {
    this.setState({search: event.target.value.substr(0,20)})
  }

  render() {
    const sortedPosts = this.props.allPosts.sort((a, b) => (a.votes > b.votes) ? -1 : 1); // sort all posts by number of votes
    let filteredPosts = sortedPosts.filter(
      (post) => {
        return post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    )
    const displayPopularPosts = filteredPosts.slice(0,9).map((post) =>
      <Post key={post._id} type="popular" postInfo={post} />
    );
    return (
      <HomeWrapper>
        <Title>Top 10 Most Popular Posts</Title>
        <MDBCol md="6">
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
        </div>
        <input className="form-control my-0 py-1" type="text" value={this.state.search} placeholder="Search" aria-label="Search" onChange={this.updateSearch} />
      </div>
    </MDBCol>
        {displayPopularPosts}
      </HomeWrapper>
    )
  }
}

export default withPosts(Home);
