import React, { Component } from 'react';
import {withPosts} from '../providers/PostDataProvider';
import { Link } from 'react-router-dom'
import BackButton from '../Components/BackButton'
import styled from 'styled-components';

import Card from '../Components/Card'
import Button from '@material-ui/core/Button';

const TopicsWrapper = styled.div`
  width: 75%;
  margin: 0 auto 0 auto;
`;

class TopicsContainer extends Component {

  componentDidMount(){
    this.props.getTopics();
  };


  render() {
    const mappedTopics = this.props.topics.map(topic => (
      <Card key={topic._id}
            topicInfo={topic}/>
    ));

    console.log(this.props);

    return (
      <TopicsWrapper>
        <BackButton goBack = {this.props.history.goBack}/>
        <Link to='/NewTopic'>
          <Button variant="contained">Create New Topic</Button>
        </Link>
        {mappedTopics}
      </TopicsWrapper>
    );
  };
};

export default withPosts(TopicsContainer);
