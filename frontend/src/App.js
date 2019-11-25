import React from 'react';
import {Switch, Route} from 'react-router-dom';

import GlobalStyle from './theme/GlobalStyle';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Topic from './pages/Topic';
import Favorites from './pages/Favorites';
import NavbarComponent from './Components/NavbarComponent';

function App(props) {
  return (
    <div>
      <GlobalStyle />
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Topics" component={Topics} />
        <Route exact path="/Favorites" component={Favorites} />
        <Route exact path="/Topic" component={Topic} />

      </Switch>
    </div>
  )
}

export default App;