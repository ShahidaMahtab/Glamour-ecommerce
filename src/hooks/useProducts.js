import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useProducts = () => {
  const { client } = useAxios();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    client
      .get(`/products`)
      .then((response) => {
        if (response.data) {
          setProducts(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return [products];
};

export default useProducts;
