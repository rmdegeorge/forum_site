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
                  title={topic.name}/>
        ))
        return (
            <div>
                {mappedTopics}
            </div>
        );
    }
}

export default withPosts(TopicsContainer);
