import React from 'react';
import axios from 'axios';
const API_HOST = process.env.REACT_APP_API_HOST;

const {Provider, Consumer} = React.createContext();

class PostDataProvider extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        allPosts: [],

      };
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

  render() {
    return (
      <Provider value={{
        ...this.state,
        getRandomPosts: this.getRandomPosts,

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
