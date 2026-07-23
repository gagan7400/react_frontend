import { NavLink, Link, useNavigate } from 'react-router-dom';

function Navbar() {
  let nav = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/"> MySite </NavLink>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/"> Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" > About </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" > Contact </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/todo" > Todo </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard" > Dashboard </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users" > Users </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" > Login </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register" > Register </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
