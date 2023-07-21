import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { counter } from "./reducers/counter";
import { products } from "./reducers/products";

const rootReducer = combineReducers({
    products: products,
    counter: counter
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["products", "counter"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk]

export const store = createStore(
    persistedReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
)

export const persistor = persistStore(store);

export default {
    store,
    persistor
}