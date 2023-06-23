import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar p-0 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn w-12 p-0 btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={"./home"} activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"./comics"} activeclassname="active">
                Comics
              </NavLink>
            </li>
            <li>
              <NavLink to={"./about"} activeclassname="active">
                About us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className=" hidden md:flex">
        <ul className="navbar text-white">
          <li className="w-24">
            <NavLink to={"./home"}>Home</NavLink>
          </li>
          <li className="w-24">
            <NavLink to={"./comics"}>Comics</NavLink>
          </li>
          <li className="w-24">
            <NavLink to={"./about"}>About us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
