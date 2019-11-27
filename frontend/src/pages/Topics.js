import React, { Component } from 'react';
import {withPosts} from '../providers/PostDataProvider';

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
        {mappedTopics}
      </div>
    );
  };
};

export default withPosts(TopicsContainer);
