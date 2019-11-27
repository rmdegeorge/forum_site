import React from 'react';
import axios from 'axios';
const API_HOST = process.env.REACT_APP_API_HOST;

const {Provider, Consumer} = React.createContext();

class PostDataProvider extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        topics: [],
        posts: [],
        comments: [],

      }
  };
  render() {
    return (
      <Provider value={{
        ...this.state,

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
