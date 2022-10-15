import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navbar text-white">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"./comics"}>Comics</NavLink>
      </li>
      <li>
        <NavLink to={"./about"}>About us</NavLink>
      </li>
    </ul>
  );
};
export default Navbar;
