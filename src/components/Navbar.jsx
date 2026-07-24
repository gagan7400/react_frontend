import { NavLink, Link, useNavigate } from 'react-router-dom';

function Navbar() {
  let nav = useNavigate()
  return (
    <nav className="p-10 border border-black w-full">
      <div className="container  flex gap-10">
        <NavLink className="navbar-brand fw-bold" to="/"> MySite </NavLink>

        <div className=" flex gap-10" id="navbarNav">

          <ul className="navbar-nav ms-auto  flex gap-10">

            <li className="nav-item">
              <NavLink className="nav-link text-black" to="/"> Home </NavLink>
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
