import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(Number(initial));

  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div className="my-5">
        <button
          disabled={counter === Number(initial)}
          onClick={minus}
          className="btn btn-circle btn-primary "
        >
          -
        </button>
        <strong className="text-lg mx-6">{counter}</strong>
        <button
          disabled={counter === Number(stock)}
          onClick={plus}
          className="btn btn-circle btn-primary"
        >
          +
        </button>
      </div>
      <div className="divider"></div>
      <button
        onClick={() => onAdd(counter)}
        disabled={counter < Number(initial)}
        className="btn btn-primary rounded"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemCount;
