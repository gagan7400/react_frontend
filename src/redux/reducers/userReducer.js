import { combineReducers } from "redux";
let userReducer = (state = { users: [], loading: false }, action) => {
    switch (action.type) {
        case "GETUSERS": return { ...state, users: action.payload };
        case "ADDUSER": return { ...state, users: [...state.users, action.payload] };
        case "DELETEUSER": return { ...state, users: state.users.filter((a) => { return a.id !== action.payload }) }
        case "DONE": return { ...state, }
        default: return state
    }
}
let productReducer = (state = { products: [] }, action) => {
    return state
}

export let root = combineReducers({ userReducer, productReducer })