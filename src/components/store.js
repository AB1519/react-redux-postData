import {createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// get the above imports initially

//step6: get rootReducer from reducer folder
import rootReducer from '../reducers/rootreducer'

//step3: define initial state
const initialState =[];

//step4: create middleware thunk

const middleware =[thunk];


//store takes three parameter rootreducer(combine reducer) , initialstate, any enhancers like miidleware

//step5: create the store with createStore
const store =createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //implement reduc dev tool
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

);

export default store;

//step1:
