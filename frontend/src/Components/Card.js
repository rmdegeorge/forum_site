import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

const CardWrapper = styled.div`
  border: solid black 1px
  text-align: center
  color: #bada55
  padding-top: 5px
  padding-bottom: 5px
  margin-bottom: 5px
  margin-top: 5px
`
const NavLink = styled(Link)`
  color: inherit;
`;

function Card(props){
  const {name,_id} = props.topicInfo;
    return (
      <CardWrapper>
        <NavLink to={`/Topics/${_id}`}>
          <h4>
            {name}
          </h4>
        </NavLink>
      </CardWrapper>
    );
}

export default Card
