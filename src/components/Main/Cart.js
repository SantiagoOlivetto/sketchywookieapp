import "./Cart.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import Order from "./Order";
import { useCallback, useEffect, useState } from "react";

const Cart = () => {
  const { products, addItem, substractItem, removeItem, clear } =
    useCartContext();

  const [total, setTotal] = useState(0);
  const [orderItems, setOrderItems] = useState([]);

  const plus = (product) => {
    addItem(product, 1);
  };

  const minus = (product) => {
    substractItem(product);
  };

  const remove = (product) => {
    removeItem(product);
  };

  const clearCart = () => {
    clear();
  };

  const calculateTotal = useCallback(() => {
    let sum = 0;
    products.forEach((product) => {
      sum = sum + parseInt(product.price) * product.quantity;
    });

    setTotal(sum);

    return sum;
  }, [products]);

  const calculateItems = useCallback(() => {
    const orderItems = [];
    products.forEach((product) => {
      orderItems.push({
        id: product.id,
        title: product.title,
        price: product.price,
      });
    });

    setOrderItems(orderItems);
  }, [products]);

  useEffect(() => {
    calculateItems();
    calculateTotal();
  }, [calculateItems, calculateTotal]);

  return (
    <div className="cart w-full h-full bg-white p-5 align-middle items-center">
      <div className="flex flex-row justify-between align-middle items-center m-5">
        <h3 className="text-3xl text-black font-bold">Cart</h3>
        <button className="text-black italic" onClick={() => clearCart()}>
          Clear cart X
        </button>
      </div>
      <hr className="mt-4 mb-4 border-primary"></hr>
      {products.length ? (
        products.map((product) => {
          return (
            <div>
              <div>
                <div className="flex-auto">
                  <h3 className="text-xl text-primary indent-10 font-semibold mb-5">
                    *{product.title}
                  </h3>
                  <div className="indent-14">
                    <button
                      className=" btn btn-primary btn-circle"
                      onClick={() => minus(product)}
                    >
                      -
                    </button>
                    <span className="text-black text-lg font-semibold mx-5">
                      {product.quantity}
                    </span>
                    <button
                      className=" btn btn-primary btn-circle"
                      onClick={() => plus(product)}
                    >
                      +
                    </button>
                    <span className="text-accent mx-16 text-xl font-bold">
                      {product.price * product.quantity + "$"}
                    </span>
                    <button
                      className=" btn btn-primary btn-circle"
                      onClick={() => remove(product)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
              <hr className="mt-4 mb-4 border-primary"></hr>
            </div>
          );
        })
      ) : (
        <div className="m-4">
          <p className="text-lg	m-4">The cart is empty</p>
          <Link className="btn btn-primary" to={"/"}>
            Go back
          </Link>
        </div>
      )}
      <div className="flex flex-row align-middle items-center justify-around m-10 ">
        <span className="text-accent mx-16 text-2xl font-bold">Total: {total} USD</span>
        <Order items={orderItems} key={orderItems.id} total={total}></Order>
      </div>
    </div>
  );
};
export default Cart;
