import React from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext();

class PostDataProvider extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        posts: [],

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
