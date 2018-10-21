import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Post from './components/post';
import PostForm from './components/postform';
import store from './components/store';

//step 1: create store in store.js file and import it here...
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Post />
        </div>
      </Provider>

    );
  }
}

export default App;
