import { Link } from "react-router-dom";

const Item = ({ image, title, description, id }) => {
  return (
    <Link to={`/comics/item/${id}`}>
      <section className="flex flex-col items-center justify-center">
        <div className="card card-compact w-60 bg-black shadow-m mb-2">
          <h2 className="text-accent text-center font-bold">{title}</h2>
          <figure>
            <img src={image} alt={title} className="rounded-xl" />
          </figure>  
        </div>
        <button className="btn btn-primary mb-4 w-fit">Read more</button>
      </section>
    </Link>
  );
};
export default Item;
