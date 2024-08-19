import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { baseurl } from "./constants";
import { Button, Card } from "react-bootstrap";
import Header from "./Header";
import AddProduct from "./AddProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    GetAllProducts();
  }, []);
  const GetAllProducts = async () => {
    await fetch(baseurl + "products?limit=5")
      .then(async (res) => {
        return await res.json();
      })
      .then((json) => {
        console.log(json);
        setProducts(json);
        setLoader(false);
      })
      .catch(() => {});
  };
  if (loader == true) {
    return <p>loading....</p>;
  }
  const handleClick = async (id) => {
    await fetch(baseurl + "products/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    console.log(id);
    const Newproducts = products.filter((product) => product.id != id);
    console.log(Newproducts);
    setProducts(Newproducts);
  };

  return;
}

export default App;
