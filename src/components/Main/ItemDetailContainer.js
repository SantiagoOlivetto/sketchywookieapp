import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Swal from "sweetalert2";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) getItem(id);
  }, [id]);

  const getItem = (param) => {
    const db = getFirestore();
    const ref = doc(db, "comics", param.toString());

    getDoc(ref).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      } else {
        Swal.fire({
          title: "Error!",
          text: "We could not find any comic",
          confirmButtonText: "ok",
          background: "#1F1A23",
          color: "white",
        }).then(function () {
          window.location = "/comics";
        });
      }
    });
  };

  return item.id ? <ItemDetail item={item} key={item.id} /> : <Loader />;
};
export default ItemDetailContainer;
