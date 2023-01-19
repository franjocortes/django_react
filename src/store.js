import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducers'
import { composeWithDevTools } from "redux-devtools-extension";

const initalState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initalState,
    // PROD
    // applyMiddleware(...middleware)
    // TEST
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;