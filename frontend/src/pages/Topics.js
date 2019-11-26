import React, { Component } from 'react';
import axios from 'axios'

import Card from '../Components/Card'

class TopicsContainer extends Component {
    constructor(){
        super()

        this.state = {
          topics: []
        }
    }

    componentDidMount(){
        axios.get("http://192.168.1.37:8080/topics").then( res => {
          console.log(res.data)
          this.setState({topics: res.data})
          console.log(this.state.topics)
        })
    }


    render() {

        const mappedTopics = this.state.topics.map(topic => (
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

export default TopicsContainer;
