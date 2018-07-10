import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from 'redux-logger'
import rootReducer from "../reducers/index";

const loggerMiddleware = createLogger()

export default function configureStore() {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunkMiddleware, loggerMiddleware),
        )
    );
    return store;
}
