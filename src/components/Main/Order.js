import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import Swal from "sweetalert2";
import { useCartContext } from "../../context/cartContext";

const Order = (orderedItems) => {
  const { clear } = useCartContext();

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [order, setOrder] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: [],
    date: "",
    total: 0,
  });

  const handleChange = (event) => {
    setBuyer({
      ...buyer,
      [event.target.name]: event.target.value,
    });

    updateOrder();
  };

  const updateOrder = () => {
    setOrder({
      ...order,
      buyer: buyer,
      items: orderedItems.items,
      date: new Date().toISOString(),
      total: orderedItems.total,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("confirmModal").checked = false;
    const isInvalid = Object.values(order).every((x) => x === null || x === "");
    if (!isInvalid) {
      const db = getFirestore();
      const orderCollection = collection(db, "orders");
      addDoc(orderCollection, order)
        .then(({ id }) => {
          Swal.fire({
            title: "Success!",
            text: "The order was placed correctly! Check your email.",
            confirmButtonText: "ok",
            background: "#1F1A23",
            color: "white",
          }).then(function() {
            window.location = "/comics";
          });
          clear();
        })
        .catch((error) => {
          console.log("error");
        });
    }
  };

  return (
    <div className="background">
      <label htmlFor="confirmModal" className="btn btn-primary">
        Confirm Purchase
      </label>

      <input type="checkbox" id="confirmModal" className="modal-toggle" />
      <label htmlFor="confirmModal" className="modal cursor-pointer">
        <label className="modal-box relative">
          <h3 className="text-3xl text-primary font-bold m-5 text-center mb-10">
            Add your data
          </h3>
          <form
            className="flex flex-col justify-center align-middle items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Name..."
              name="name"
              className="input  text-black bg-black bg-opacity-5  input-primary w-full max-w-xs m-3"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Phone..."
              name="email"
              className="input text-black bg-black bg-opacity-5  input-primary w-full max-w-xs m-3"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email..."
              name="phone"
              className="input text-black bg-black bg-opacity-5  input-primary w-full max-w-xs m-3"
              onChange={handleChange}
            />
            <button
              type="submit"
              value="Submit"
              className="btn btn-primary m-10"
            >
              Complete purchase
            </button>
          </form>
        </label>
      </label>
    </div>
  );
};
export default Order;
