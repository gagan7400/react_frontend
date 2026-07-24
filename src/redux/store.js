import { legacy_createStore, applyMiddleware } from "redux";
import { root } from "./reducers/userReducer"
import {thunk} from "redux-thunk"
export let store = legacy_createStore(root, applyMiddleware(thunk));