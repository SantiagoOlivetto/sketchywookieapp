import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../../components/sliderFilter.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { param } = useParams();

  const getItems = () => {
    const db = getFirestore();
    const itemCollection = collection(db, "comics");
    getDocs(itemCollection).then((snapshot) => {
      const res = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setItems(res);
    });
  };

  const filterItems = (param) => {
    const db = getFirestore();
    const filteredQuery = query(
      collection(db, "comics"),
      where("author", "==", param.toUpperCase())
    );

    getDocs(filteredQuery).then((snapshot) => {
      if (snapshot.size === 0) {
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
      const res = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setItems(res);
    });
  };

  useEffect(() => {
    param ? filterItems(param) : getItems();
  }, [param]);

  return (
    <div className="container bg-white bg-opacity-50">
      <div className="sliderFilter flex flex-row items-center m-5 gap-5 overflow-auto">
        <span className="m-5 mt-6 text-l font-medium italic flex-wrap text-black">
          Filter author:
        </span>
        <Link className="btn btn-primary rounded" to={"/comics/chaykin"}>
          Howard Chaykin
        </Link>
        <Link className="btn btn-primary rounded" to={"/comics/austin"}>
          Terry Austin
        </Link>
        <Link className="btn btn-primary rounded" to={"/comics/goodwin"}>
          Archie Goodwin
        </Link>
        <Link className="btn btn-primary rounded" to={"/comics/gafford"}>
          Carl Gafford
        </Link>
      </div>
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
