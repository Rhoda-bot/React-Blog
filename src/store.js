import {createStore} from 'redux'
import {applyMiddleware}from 'redux'
import thunk from 'redux-thunk'
// import {thunk } from 'redux-thunk';
import rootReducer from '../src/Reducers'

const initialState = {}
// const middleware = [thunk]
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;