import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { MDBCol} from "mdbreact";
import {withPosts} from '../providers/PostDataProvider'

import Button from '@material-ui/core/Button';

import Post from '../Components/Post';
import BackButton from '../Components/BackButton'

const TopicWrapper = styled.div`
  width: 75%;
  margin: 0 auto 0 auto;
`;
const TopicTitle = styled.h1``;

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: String,
      search: ''
    };
  };

  componentDidMount(){
    this.props.getPostsForTopic(this.props.match.params.topicId);
    this.props.getTopicOfPost(this.props.match.params.topicId)
      .then(res => {
        this.setState({
          topic: res.data.name
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateSearch = event => {
    this.setState({search: event.target.value.substr(0,20)})
  }
 
  render(){
    let filteredPosts = this.props.posts.filter(
      (posts) => {
        return posts.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    )
    
    const populatePosts = filteredPosts.map((post) => {
      return <Post key={post._id} postInfo={post} />
    });

    console.log(this.props.posts)

    return (
      <TopicWrapper>
        <BackButton goBack={this.props.history.goBack} />
        <Link to='/NewPost'>
          <Button variant="contained">Create New Post</Button>
        </Link>
        <TopicTitle>
          {this.state.topic}
        </TopicTitle>
        <MDBCol md="6">
          <div className="input-group md-form form-sm form-1 pl-0">
            <div className="input-group-prepend">
            </div>
            <input className="form-control my-0 py-1" type="text" value={this.state.search} placeholder="Search" aria-label="Search" onChange={this.updateSearch} />
          </div>
        </MDBCol>
        {populatePosts}
      </TopicWrapper>
    );
  }
};
export default withPosts(Topic);
