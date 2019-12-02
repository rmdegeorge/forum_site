import React, { Component } from 'react';
import {withPosts} from '../providers/PostDataProvider';
import { Link } from 'react-router-dom'
import BackButton from '../Components/BackButton'
import NewTopic from '../pages/NewTopic'

import Card from '../Components/Card'

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
      <div>
        <BackButton goBack = {this.props.history.goBack}/>
        {mappedTopics}
        <Link to='/NewTopic'>Create New Topic</Link>
      </div>
    );
  };
};

export default withPosts(TopicsContainer);
