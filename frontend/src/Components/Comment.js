import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Card,CardContent,Typography} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: '70%',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 14,
  },
  body: {
    fontSize: 12,
    padding: 10,
  }
});


function Comment(props) {
  const classes = useStyles();
  const {username,body,created} = props.commentInfo;
  const date = new Date(created).toUTCString();

  return (
    <Card className={classes.card}>
      <Typography component="h4">
        Posted by: {username} on {date}
      </Typography>
      <Typography className={classes.body}component="p">
        {body}
      </Typography>
    </Card>
  )
}

export default Comment;
