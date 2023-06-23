import wookie from "../../assets/img/wookie.png";
import "./Home.css";

const Home = ({ name }) => {
  return (
    <div className="home bg-black bg-opacity-60">
      <img
        src={wookie}
        alt="Wookiee Logo"
        className="wookie animate__animated animate__fadeInLeft animate__slow"
      ></img>

      <div className="homeCont">
        <h1 className="text-7xl xs:text-3xl text-white text-center font-bold max-w-xs m-2">
          Greetings {name}!
        </h1>
        <p className="m-5 welcomeSign align-middle text-center bg-white p-8 text-black text-xl">
          You are welcome to the Sketchy Wookiee Market. <br /> Psst! do not be
          lousy...
        </p>
        <span className="wookieeSays text-2xl font-bold text-accent m-5 animate__animated animate__fadeIn animate__delay-2s">
          {" "}
          It's not wise to upset a wookiee
        </span>
      </div>
    </div>
  );
};
export default Home;
