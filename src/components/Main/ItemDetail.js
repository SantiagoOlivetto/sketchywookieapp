import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import ItemCount from "./Item/ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { addItem } = useCartContext();
  const [addedItems, setAddedItems] = useState();

  const onAdd = (quantity) => {
    setAddedItems(quantity);
    addItem(item, quantity);
  };

  return (
    <div className="hero min-h-full bg-black bg-opacity-80">
      <div className="hero-content flex-col lg:flex-row-reverse gap-32">
        <img src={item.image} alt="Item" className=" max-w-xs shadow-xl" />
        <div>
          <h1 className="text-5xl font-semibold italic text-white">
            {item.title}
          </h1>
          <span className="py-2 text-l text-accent">{item.author}</span>
          <p className="py-3 indent-3 font-normal text-white max-w-xs">{item.description}</p>
          <h3 className="py-3 text-5xl font-semibold text-accent italic">
            {item.price} $
          </h3>
          {addedItems > 0 ? (
            <Link className="btn btn-primary" to={"/cart"}>
              Go to cart...
            </Link>
          ) : (
            <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
          )}
          {item.stock && !addedItems && <span className="italic"> {item.stock} units left!</span>}
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
