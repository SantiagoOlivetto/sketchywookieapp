import "./Header.css";
import logo from "../../assets/svg/logo.svg";
import CartWidget from "./CartWidget";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <nav
      className="header font-bold bg-primary flex space around shadow-lg"
      style={{ color: "#353535" }}
    >
      <div className="m-2 flex flex-row justify-center items-center">
        <Navbar />
        <CartWidget />
      </div>
      <img
        className="m-2 xs:m-1"
        alt="Sketchy wookiee Logo"
        src={logo}
        style={{ height: "80px", width: "100" }}
      />
    </nav>
  );
};
export default Header;
