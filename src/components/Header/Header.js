import "./Header.css";
import logo from "../../assets/svg/logo.svg"
import CartWidget from "./CartWidget";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <nav className="header bg-primary shadow-lg" style={{ color: "#353535" }}>
      <img className="m-2" alt="Sketchy wookiee Logo" src={logo} style={{height: "80px", width: "100"}}/>
      <div className="m-2 flex flex-row justify-center items-center">
        <Navbar />
        <CartWidget />
      </div>
    </nav>
  );
};
export default Header;
