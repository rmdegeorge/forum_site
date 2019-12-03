import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActions,CardContent,Button,Typography,Chip} from '@material-ui/core';

import styled from 'styled-components';
import {withPosts} from '../providers/PostDataProvider';
import {Link, withRouter} from 'react-router-dom';
const CommentButton = styled(Button)`

`;
const NavLink = styled(Link)`
  color: inherit;
`;

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 function PostCard(props) {
  const classes = useStyles();
  const {_id,title,body,username,tags,created,topic} = props.onePost;
  const date = new Date(created).toUTCString();
  const displayTags = tags.map((tag,i) => <Chip size="small" key={tag + i} label={tag} />);

  return (

    <Card className={classes.card}>
      <CardContent>
        <Typography>
          {
            props.type === "postPage"
            ?
            title
            :
            <NavLink to={`/Posts/${_id}`}>
              {title}
            </NavLink>
          }
        </Typography>
        <Typography>
          Posted by: {username}
          {
            props.type === "popular" || props.type === "postPage"
            ?
            <span>to <NavLink to={`/Topics/${topic}`}>
                      {props.topic}
                    </NavLink>
            </span>
            :
            null
          }
          <span>on {date}</span>
        </Typography>
        <Typography component="p">
          {body}
        </Typography>
        {displayTags}
        <Typography component="p">
          {props.votes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" type="up" onClick={() => this.props.handleVote("up",props.votes,_id)}>Sweet!</Button>
        <Button variant="contained" type="down" onClick={() => this.props.handleVote("down",props.votes,_id)}>Not Cool</Button>
        <CommentButton variant="contained">Comment</CommentButton>
      </CardActions>
    </Card>

  );
}

export default withPosts(PostCard);
