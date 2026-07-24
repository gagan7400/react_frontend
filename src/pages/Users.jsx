import { useSelector, useDispatch } from "react-redux";
import { deleteuser, getusers } from "../redux/actions/userAction"
function Users() {
    let dispatch = useDispatch();
    let { users } = useSelector((state) => { return state.userReducer })

    return (
        <>
            <h1>Users</h1>
            <button onClick={() => {
                dispatch(getusers())
            }}>getusers</button>
            <div className="d-flex gap-3 flex-wrap">
                {users.map((v, i) => {
                    return (
                        <div className="card">
                            <p>id : {v.id}</p>
                            <p>Name : {v.name ? v.name : v.firstName + " " + v.lastName}</p>
                            <p>email : {v.email}</p>
                            <button onClick={() => {
                                // dispatch({ type: "DELETEUSER", payload: v.id })
                                dispatch(deleteuser(v.id))
                            }}>delete </button>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Users;