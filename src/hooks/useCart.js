import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import { useSnackbar } from "notistack";
import { addToDb, getStoredCart } from "../utilities/localStore";
const useCart = () => {
  const [products] = useProducts();
  const [cart, setCart] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const _id in savedCart) {
        const addedProduct = products.find((product) => product._id === _id);
        if (addedProduct) {
          //setQuantity
          const quantity = savedCart[_id];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);
  const handleAddToCart = (id) => {
    const checkExist = cart.find((product) => product._id === id);
    if (checkExist) {
      return;
    } else {
      const addedProduct = products.find((np) => np._id === id);
      addedProduct.quantity = 1;
      const newCart = [...cart, addedProduct];
      setCart(newCart);
    }
    addToDb(id);
    enqueueSnackbar("products added to cart");
  };

  return {
    handleAddToCart,
    setCart,
    cart,
  };
};

export default useCart;
