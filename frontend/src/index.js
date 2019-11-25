import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import PostDataProvider from './providers/PostDataProvider';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <PostDataProvider>
      <App />
    </PostDataProvider>
  </BrowserRouter>
  , document.getElementById('root')
);
