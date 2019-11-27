import React, { Component } from 'react';

import axios from 'axios'
import Card from '../Components/Card'
const API_HOST = process.env.REACT_APP_API_HOST; // delete this line once state and axios calls are moved to Context.



class TopicsContainer extends Component {
    constructor(){
        super()
        this.state = {
          topics: []
        }
    }

    componentDidMount(){
        axios.get(`${API_HOST}/topics`).then( res => {
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
