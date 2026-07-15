import { Outlet, NavLink } from "react-router-dom";
function Dashboard() {
    return (
        <div className="w-100 h-100 m-auto d-flex bg-secondary ">
            <div className="d-flex flex-column p-4 bg-info gap-3" style={{ maxWidth: "300px" }}>
                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                <NavLink className="nav-link" to="/dashboard/userlist">UserLists</NavLink>
                <NavLink className="nav-link" to="/dashboard/addproduct">Products</NavLink>
            </div>
            <div className="border p-3 w-100 h-100">
                <Outlet />
            </div>
        </div>
    )
}
export default Dashboard