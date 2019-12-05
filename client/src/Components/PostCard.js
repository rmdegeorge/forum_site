import React, {useState} from 'react';

//@material-ui
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActions,CardContent,Button,Typography,Chip,
        ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,
        TextField} from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//Components
import styled from 'styled-components';
import {withPosts} from '../providers/PostDataProvider';
import {Link} from 'react-router-dom';
import axios from 'axios';
const API_HOST = "http://localhost:8000/";
const CommentButton = styled(Button)`
`;
const NavLink = styled(Link)`
  color: inherit;
`;
const AddSpaceLeft = styled.span`
  margin-left: 2pt;
`;

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    margin: 10,
  },
  title: {
    fontSize: 28,
  },
  subtitle: {
    fontSize: 12,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  body: {
    padding: 20,
  }
}));

function PostCard(props) {
  const classes = useStyles();
  const {_id,title,body,username,tags,created,topic} = props.onePost;
  const date = new Date(created).toUTCString();
  const displayTags = tags.map((tag,i) => <Chip size="small" key={tag + i} label={tag} />);

  const [comment, setComment] = useState('')
  const [user, setUser] = useState('')
  const handleComment = (e) => {
    e.preventDefault()
    console.log('sent')
    const newComment = {
      username: user,
      body: comment
    }
    axios.post(`${API_HOST}comments/${_id}`, newComment)
      .then(res => {
        setComment(res.data)
        props.getCommentsForPost(_id)
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (

    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} component="h2">
          {
            props.type === "postPage"
            ?
            title
            :
            <NavLink to={`/PostsPage/${_id}`}>
              {title}
            </NavLink>
          }
        </Typography>
        <Typography className={classes.subtitle} component="h6">
          Posted by: {username}
          {
            props.type === "popular" || props.type === "postPage"
            ?
            <AddSpaceLeft>to <NavLink to={`/TopicsPage/${topic}`}>
                      {props.topic}
                    </NavLink>
            </AddSpaceLeft>
            :
            null
          }
          <AddSpaceLeft>on {date}</AddSpaceLeft>
        </Typography>
        <Typography className={classes.body} component="p">
          {body}
        </Typography>
        {displayTags}
        <Typography component="p">
          <br/>
          Votes: {props.votes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" type="up" onClick={() => props.handleVote("up",props.votes,_id)}>Sweet!</Button>
        <Button variant="contained" type="down" onClick={() => props.handleVote("down",props.votes,_id)}>Not Cool</Button>
      </CardActions>
        <div className={classes.root}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={
                <CommentButton
                  variant="contained">Comment
                </CommentButton>
                }>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <TextField
                id="standard-textarea"
                label="Username"
                placeholder="Username"
                multiline
                className={classes.textField}
                margin="normal"
                onChange={e => setUser(e.target.value)}
              />
              <TextField
                id="standard-textarea"
                label="Comment"
                placeholder="Comment"
                multiline
                className={classes.textField}
                margin="normal"
                onChange={e => setComment(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                type='submit'
                value='submit'
                onClick={handleComment}
              >
                Send
              </Button>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>

    </Card>

  );
}

export default withPosts(PostCard);
