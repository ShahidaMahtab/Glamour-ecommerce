import React, { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (newProduct) => {
    const checkExist = cart.find((product) => product.key === newProduct.key);
    if (checkExist) {
      return;
    }
    const newCart = [cart, ...newProduct];
    setCart(newCart);
    console.log(cart);
  };
  return {
    handleAddToCart,
    setCart,
    cart,
  };
};

export default useCart;
