import React, { Component } from 'react';
import {withPosts} from '../providers/PostDataProvider';
import { Link } from 'react-router-dom'
import { MDBCol} from "mdbreact";
import BackButton from '../Components/BackButton'
import styled from 'styled-components';
import NewTopic from './NewTopic'

import Card from '../Components/Card'
import Button from '@material-ui/core/Button';

const TopicsWrapper = styled.div`
  width: 75%;
  margin: 0 auto 0 auto;
`;
const BackWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const NewTopicSearchWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px;
  > :nth-child(1n) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
class TopicsContainer extends Component {
  constructor(){
    super();

    this.state = {
      search: ''
    }
  }

  componentDidMount(){
    this.props.getTopics();
  };

  updateSearch = event => {
    this.setState({search: event.target.value.substr(0,20)})
  }


  render() {
    let filteredTopics = this.props.topics.filter(
      (topics) => {
        return topics.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    )

    const mappedTopics = filteredTopics.map(topic => (
      <Card key={topic._id}
            topicInfo={topic}/>
    ));

    console.log(this.props.topics);

    return (
      <TopicsWrapper>
        <BackWrapper><BackButton goBack = {this.props.history.goBack}/>
          <MDBCol md="6">
            <div className="input-group md-form form-sm form-1 pl-0">
            <div className="input-group-prepend">
            </div>
              <input className="form-control my-0 py-1" type="text" value={this.state.search} placeholder="Search" aria-label="Search" onChange={this.updateSearch} />
            </div>
          </MDBCol>

        </BackWrapper>
        <NewTopicSearchWrapper>
          <NewTopic />
        </NewTopicSearchWrapper>
        {mappedTopics}
      </TopicsWrapper>
    );
  };
};

export default withPosts(TopicsContainer);
