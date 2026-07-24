import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate, Navigate } from "react-router-dom";
import { adduser, thunkaction } from "../redux/actions/userAction"
import HOC from "../HOC";
function Register() {
    let dispatch = useDispatch();

    let submithandler = (e) => {
        e.preventDefault();
        let email = e.target.email.value
        let name = e.target.name.value
        let password = e.target.password.value
        let newuser = { id: crypto.randomUUID(), name, email, password }
        dispatch(adduser(newuser))
        // dispatch(thunkaction())
    }
    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={submithandler} className="p-2 m-auto w-50 border d-flex justify-center flex-column ">
                <div className="mb-2">
                    <label className="input-label">Name</label>
                    <input name="name" className="input-control" type="text" /> <br />
                </div>
                <div className="mb-2">
                    <label className="input-label">email</label>
                    <input name="email" className="input-control" type="text" /> <br />
                </div>
                <div className="mb-2">
                    <label className="input-label">password</label>
                    <input name="password" className="input-control" type="text" /> <br />
                </div>
                <button className="btn btn-secondary">Submit</button>
            </form>
        </div>
    )
}

export default HOC(Register);