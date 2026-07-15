import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom"
function Login() {
    let [isLogin, setIsLogin] = useState(false)
    let nav = useNavigate();//hook from reactrouterdom which is used to redirect from one page to another page 
    let submithandler = (e) => {
        e.preventDefault();
        let email = "xyz@gmail.com";
        let password = "12345";
        if (e.target.email.value == email && e.target.password.value == password) {
            console.log("login successfull");
            localStorage.setItem("isLoggedIn", true)
            nav("/")
        } else {
            localStorage.setItem("isLoggedIn", null)
            console.log("invalid details")
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={submithandler} className="p-2 m-auto w-50 border d-flex justify-center flex-column ">
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

export default Login;