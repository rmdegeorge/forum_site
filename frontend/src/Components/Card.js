import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import {Card, CardActions, CardContent, Button, Typography} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
});

const NavLink = styled(Link)`
  color: inherit;
`;

function TopicCard(props){
  const classes = useStyles();
  const {name,_id} = props.topicInfo;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography>
            <NavLink to={`/Topics/${_id}`}>
              {name}
            </NavLink>
          </Typography>
        </CardContent>
      </Card>


      // <CardWrapper>
      //   <NavLink to={`/Topics/${_id}`}>
      //     <h4>
      //       {name}
      //     </h4>
      //   </NavLink>
      // </CardWrapper>
    );
}

export default TopicCard
