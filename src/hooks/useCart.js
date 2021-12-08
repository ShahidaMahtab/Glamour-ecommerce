import React, { useState } from "react";

import { SnackbarProvider, useSnackbar } from "notistack";
const useCart = () => {
  const [cart, setCart] = useState([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleAddToCart = (newProduct) => {
    const checkExist = cart.find((product) => product.id === newProduct.id);
    if (checkExist) {
      return;
    }
    newProduct.quantity = 1;
    const newCart = [...cart, newProduct];
    setCart(newCart);
    enqueueSnackbar("products added to cart");
  };

  return {
    handleAddToCart,
    setCart,
    cart,
  };
};

export default useCart;
