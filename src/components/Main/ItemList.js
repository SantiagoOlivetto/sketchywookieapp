import Item from "./Item/Item";
import Loader from "./Loader";
import "../../components/scrollBar.css";

const ItemList = ({ items }) => {
  return (
    <div className="slider storeGrid m-5 grid grid-rows-1 grid-flow-col gap-x-5 mt-12 overflow-auto">
      {items && items.length ? (
        items.map((item) => <Item key={item.id} {...item} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default ItemList;
