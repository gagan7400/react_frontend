import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
    let user = localStorage.getItem("isLoggedIn");
    console.log(user);
    if (user != "true") {
        return <Navigate to="/login" />
    }
    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoute;

// git :- version control system
// github :-  platform to track your progress 