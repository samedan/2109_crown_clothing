import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

// 'thunk' allows to fire functions
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
