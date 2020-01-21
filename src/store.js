import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";
import {loadState, saveState} from './actions/favourites'
import throttle from 'lodash.throttle'

const initialState = {};

const persistedState = loadState();

const middleware = [thunk];

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe()
