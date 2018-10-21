//evaluate any actions that are commited.
// action have type
// step 8: creating reducers
//step 9 --> goto actions/types

import {FETCH_POSTS, NEW_POSTS} from '../actions/types';

//create initial initialState
//step 10: create initial state as an object
const initialState = {
  items:[], //repersnt post coming from action fetch actions
  item:{} //represent the single post we add
}

//evaluate what type are we dealing iwth
export default function(state = initialState, action) {
  switch (action.type){
    case FETCH_POSTS :
    // console.log('reducer')
      return {
        ...state,
        items: action.payload
      };

    case NEW_POSTS:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}


//step 11: create postAction.js
