import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./Reducers/rootReducer"
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-18-redux-firebase'
import firebaseConfig from '../Config/firebaseConfig'
import firebase from 'firebase/app';

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  // ,
  // reduxFirestore(firebase),
  // reactReduxFirebase(firebase)
  // I might eventually need this.
  )
);

console.log("Store is created");

export default store;
