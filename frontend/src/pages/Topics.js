import React, { Component } from 'react';
import {withPosts} from '../providers/PostDataProvider';
import BackButton from '../Components/BackButton'


import Card from '../Components/Card'

class TopicsContainer extends Component {

  componentDidMount(){
    this.props.getTopics();
  };


  render() {
    console.log(this.props)
    const mappedTopics = this.props.topics.map(topic => (
      <Card key={topic._id}
            title={topic.name}/>
    ));
    return (
      <div>
        <BackButton goBack = {this.props.history.goBack}/>
        {mappedTopics}
      </div>
    );
  };
};

export default withPosts(TopicsContainer);
