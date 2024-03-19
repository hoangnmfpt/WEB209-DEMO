import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop" className="nav-link">
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="nav-link">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin" className="nav-link">
          Admin
        </NavLink>
      </li>
    </ul>
  );
};
