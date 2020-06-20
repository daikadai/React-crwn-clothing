import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from 'redux-saga';
import { fetchCollectionsStart } from "./shop/shop.sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);
export const persistor = persistStore(store);
export default {store, persistor};
 