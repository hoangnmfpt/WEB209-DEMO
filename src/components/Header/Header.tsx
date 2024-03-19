import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <ul className={s.nav}>
        <li className={s.navItem}>
          <NavLink to="/" className={s.navLink}>
            Home
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/shop" className={s.navLink}>
            Shop
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/login" className={s.navLink}>
            Login
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/register" className={s.navLink}>
            Register
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/admin" className={s.navLink}>
            Admin
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
