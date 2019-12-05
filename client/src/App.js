import React from 'react';
import {Switch, Route} from 'react-router-dom';

import GlobalStyle from './theme/GlobalStyle';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Topic from './pages/Topic';
import NavbarComponent from './Components/NavbarComponent';
import NewPost from './pages/NewPost';
import NewTopic from './pages/NewTopic'
import PostPage from './pages/PostPage';

function App(props) {
  return (
    <div>
      <GlobalStyle />
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Topics" component={Topics} />
        <Route exact path="/Topics/:topicId" component={Topic} />
        <Route path="/NewPost" component={NewPost} />
        <Route  path="/Posts/:postId" component={PostPage} />
        <Route path='/NewTopic' component={NewTopic}/>

        {/* Keep this at bottom of Switch, Provides 404 */}
        <Route render={
          () => <h1>404 Not Found</h1>
        } />
      </Switch>
    </div>
  )
}

export default App;
