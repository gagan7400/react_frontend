import { legacy_createStore, combineReducers } from "redux";

let userReducer = (state = { users: [] }, action) => {
    return state
}
let productReducer = (state = { products: [] }, action) => {
    return state
}

let root = combineReducers({ userReducer, productReducer })

export let store = legacy_createStore(root);