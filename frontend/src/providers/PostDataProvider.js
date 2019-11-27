import React from 'react';
import axios from 'axios';
const API_HOST = process.env.REACT_APP_API_HOST;

const {Provider, Consumer} = React.createContext();

class PostDataProvider extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        allPosts: [],
        comments: [],
        posts: [],
        topics: []
      };
  };
  getCommentsForPost = (postId) => {
    axios.get(`${API_HOST}comments/${postId}`)
      .then((res) => {
        this.setState({
          comments: res.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  getRandomPosts = () => {
    axios.get(`${API_HOST}posts/`)
      .then((res) => {
        this.setState({
          allPosts: res.data
        });
        console.log(this.state.allPosts);
      })
      .catch((err) => {
        console.error(err)
      });
  };
  getPostsForTopic = () => {        // we'll need to adjust this so it only pulls post for a single topic
    axios.get(`${API_HOST}posts/`)
      .then(res => {
        this.setState({
          posts: res.data
        });
      })
      .catch((err) => {
        console.error(err)
      });
  };
  getTopics = () => {
    axios.get(`${API_HOST}topics`)
      .then( res => {
        this.setState({topics: res.data})
      })
      .catch((err) => {
        console.error(err)
      });
  };

  render() {
    return (
      <Provider value={{
        ...this.state,
        getRandomPosts: this.getRandomPosts,
        getCommentsForPost: this.getCommentsForPost,
        getPostsForTopic: this.getPostsForTopic,
        getTopics: this.getTopics,

      }}>
        {this.props.children}
      </Provider>
    );
  };
};

export default PostDataProvider;

export function withPosts(Comp) {
  return props =>
    <Consumer>
      {value => <Comp {...value}{...props} />}
    </Consumer>
};
