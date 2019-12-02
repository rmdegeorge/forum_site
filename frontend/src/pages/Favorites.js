import React, {Component} from 'react';
import styled from 'styled-components';
import BackButton from '../Components/BackButton'

const FavoritesWrapper = styled.div``;

class Favorites extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    console.log(this.props)
    return (
      <FavoritesWrapper>
        <BackButton goBack = {this.props.history.goBack}/>
      </FavoritesWrapper>
    )
  }
}

export default Favorites;
