import axios from "axios"
export let adduser = (newuser) => {
    return { type: "ADDUSER", payload: newuser }
}

export let deleteuser = (id) => {
    return { type: "DELETEUSER", payload: id }
}

export let thunkaction = (newuser) => {
    return async (dispatch, getstate) => {
        let data = await axios.post("https://dummyjson.com/products/add", { ...newuser });
        console.log(data)
        dispatch({ type: "ADDUSER", payload: data.data })
    }
}

export let getusers = () => {
    return async (dispatch) => {
        let data = await axios.get("https://dummyjson.com/users");
        console.log(data);
        dispatch({ type: "GETUSERS", payload: data.data.users })
    }
}

//npm i redux-thunk