import wookie from "../../assets/img/wookie.png";
import "./Home.css";

const Home = ({ name }) => {
  return (
    <div className="home bg-black bg-opacity-60" style={{ height: "80vh" }}>
      <img src={wookie} alt="Wookiee Logo" className="wookie"></img>

      <div className="homeCont">
        <h1 className="text-7xl text-white text-center font-bold max-w-xs m-2">
          Greetings {name}!
        </h1>
        <p className="m-5 align-middle text-center bg-white p-8 text-black text-xl">
          You are welcome to the Sketchy Wookiee Market. <br /> Psst! do not be
          lousy...
        </p>
        <span className="text-3xl font-bold text-accent m-5">
          {" "}
          It's not wise to upset a wookiee.
        </span>
      </div>
    </div>
  );
};
export default Home;
