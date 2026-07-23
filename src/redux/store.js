import { legacy_createStore, combineReducers } from "redux";
// action == {type:"ADDUSER",payload:{name:"raj"}}
// action == {type:"DELETEUSER",payload:67567}
let userReducer = (state = { users: [], loading: false }, action) => {
    switch (action.type) {
        case "ADDUSER": return { ...state, users: [...state.users, action.payload] };
        case "DELETEUSER": return { ...state, users: state.users.filter((a) => { return a.id !== action.payload }) }
        default: return state
    }
}
let productReducer = (state = { products: [] }, action) => {
    return state
}

let root = combineReducers({ userReducer, productReducer })

export let store = legacy_createStore(root);


// user --> action(using dispatch) --> reducer --> update the state-- > update on ui