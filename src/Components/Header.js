import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <ul className="list">
        <NavLink activeClassName="active" exact to="/">
          <li>Home</li>
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          <li>About</li>
        </NavLink>
        <NavLink activeClassName="active" to="contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </header>
  );
}
export default Header;
