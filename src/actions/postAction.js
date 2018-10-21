//import ations constants here
import {FETCH_POSTS, NEW_POSTS} from './types';

//the thunk middleware allowas us to call dispatch function directly, so that we can make asynchrounous calls directly
//dispatch as a resolve in promise
export const fetchPosts = () => dispatch => {
      //here we will create fetch request
      // console.log('fetching')
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      )
};



export const createPosts = postData => dispatch => {
      //here we will create fetch request
      // console.log(JSON.stringify(postData))
      fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
      .then(res => res.json())
      .then(post =>
        // console.log(body)
        dispatch({
          type:NEW_POSTS,
          payload: post
        })
      )
}

//we dispatch the FETCH_POSTS to reducers i.e postReducer.js
