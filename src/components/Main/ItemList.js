import Item from "./Item/Item";
import Loader from "./Loader";

const ItemList = ({ items }) => {
  return (
    <div className="storeGrid m-5 grid grid-rows-1 grid-flow-col gap-x-5 mt-5 overflow-auto">
      {items && items.length ? (
        items.map((item) => <Item key={item.id} {...item} />)
      ) : (
        <Loader/>
      )}
    </div>
  );
};
export default ItemList;
