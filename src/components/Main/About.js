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
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo <br />
              <br/> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et
              dolore magnam aliquam quaerat voluptatem.
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
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
