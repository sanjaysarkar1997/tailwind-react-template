import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Root from "./redux/reducers/Root";

// Initial State of the Store
const initialState = {};

// MiddleWare or the loggers
const middleware = [thunk, logger];

// Store
const store = createStore(Root, initialState, applyMiddleware(...middleware));

export default store;
