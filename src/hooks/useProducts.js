import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useProducts = () => {
  const { client } = useAxios();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    client.get(`/products`).then((response) => {
      setProducts(response.data);
    });
  }, []);
  return [products];
};

export default useProducts;
