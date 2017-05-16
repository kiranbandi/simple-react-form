import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { NotFound, Forms, Container, Profile, Home } from './components';
import configureStore from './redux/configureStore';  
import { Provider } from 'react-redux';
import initialState from './initialState';  

//Root sass file for webpack to compile
import './main.scss';

//Initialize Store
const store = configureStore(initialState);

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            <Route path='Forms/:formIndex' component={Forms} />
            <Route path='Profile' component={Profile} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))