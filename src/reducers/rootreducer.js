//combine all reducers using this function
//this is STEP7
//import all fo these...
import {combineReducers} from 'redux';
//these are reducers we created
import postReducer from './postReducer';


// passing the objecte combineReducers{}
export default combineReducers({
  posts: postReducer
})
