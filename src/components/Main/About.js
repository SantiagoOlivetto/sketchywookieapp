import "../../components/spinner.css";
import han from "../../assets/img/han.jpg";
import leia from "../../assets/img/leia.jpg";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center align-middle">
      <div className="aboutStore hero min-w-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-10 text-8xl font-black">Our Story</h1>
            <p className="mb-20 bg-white text-sm text-black p-5">
              A long time ago, in a not-so-distant galaxy, a group of passionate
              fans of comics and the grandeur of Star Wars came together to
              create something special. Tired of the Siths of astronomical
              prices and the Jedi of limited selection, we decided to take
              matters into our own hands. And thus, Sketchy Wookiee was born.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-w-screen bg-base-200 bg-opacity-40 border-y-4 border-white ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <img
            src={han}
            alt="Han"
            className=" w-40 h-40 shadow-2xl rounded-full"
          />
          <div>
            <p className="py-6 max-w-prose">
              Our team of rebels got down to business, scouring every corner of
              the universe for the most epic, rare, and collectible Star Wars
              comics. Armed with our powers of humor and creativity, we set out
              to make Sketchy Wookiee more than just an ordinary online store.{" "}
              <br />
              <br /> We fought fierce battles with interplanetary suppliers to
              secure the galaxy's treasures. We tracked down lost libraries on
              unknown planets and faced ferocious space creatures to ensure that
              each comic finds its place on our virtual shelves.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-w-screen bg-white border-y-4 border-white">
        <div className="hero-content flex-col lg:flex-row gap-12">
          <img
            src={leia}
            alt="Leia"
            className=" w-40 h-40 shadow-2xl rounded-full"
          />
          <div>
            <p className="py-6 max-w-prose text-black">
              So, dear comic padawan, welcome to Sketchy Wookiee, where fans'
              dreams come true and Star Wars comics flow like the Force. Get
              ready to embark on an intergalactic odyssey filled with fun,
              adventure, and, of course, an unwavering love for Star Wars
              comics. May laughter be with you, always. May the Force be with
              you, always!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
