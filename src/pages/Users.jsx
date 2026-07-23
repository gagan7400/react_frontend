import { useSelector, useDispatch } from "react-redux";
function Users() {
    let dispatch = useDispatch();
    let { users } = useSelector((state) => { return state.userReducer })
    return (
        <>
            <h1>Users</h1>
            <div className="d-flex gap-3 flex-wrap">
                {users.map((v, i) => {
                    return (
                        <div className="card">
                            <p>Name : {v.name}</p>
                            <p>email : {v.email}</p>
                            <button onClick={() => {
                                dispatch({ type: "DELETEUSER", payload: v.id })
                            }}>delete </button>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Users;