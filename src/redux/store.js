import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

// 'saga' allows to pause functions
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// SAGAs
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
