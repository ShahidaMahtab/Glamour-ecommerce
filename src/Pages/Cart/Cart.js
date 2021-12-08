import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import Navigation from "../Shared/Navigation/Navigation";
import img from "../../Images/products/img2.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  const handleIncreaseQuantity = (productId) => {
    const newProduct = cart.find((product) => product.id === productId);

    //quantity validation
    if (newProduct.quantity + 1 > 10) {
      return;
    }
    newProduct.quantity += 1;
    //update the cart with new quantity of the selected products.
    const newCart = cart.filter((product) => newProduct.id !== product.id);

    newCart.unshift(newProduct);
    setCart(newCart);
  };
  const handleDecreaseQuantity = (productId) => {
    console.log(productId);
    const newProduct = cart.find((product) => product.id === productId);
    console.log("newProduct", newProduct);
    //quantity validation
    if (newProduct.quantity - 1 === 0) {
      handleCartRemove(newProduct.id);
      return;
    }
    newProduct.quantity -= 1;
    //update the cart with new quantity of the selected products.
    const newCart = cart.filter((product) => newProduct.id !== product.id);
    console.log("excluding newProduct", newCart);
    newCart.unshift(newProduct);
    setCart(newCart);
  };
  const handleCartClear = () => {
    setCart([]);
  };
  const handleCartRemove = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };
  let total = 0;
  for (const product of cart) {
    total += parseInt(product.price) * product.quantity;
  }
  return (
    <Container>
      <Navigation />
      <Typography gutterBottom variant="h4" color="white" sx={{ mt: 18 }}>
        Your Shopping Cart
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="white"
            className="uppercase  font-extrabold"
            sx={{ mt: 5, mb: 5 }}
          >
            products
          </Typography>
          {cart.length === 0 ? (
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              color="white"
              className="uppercase  font-extrabold"
              sx={{ mt: 12 }}
            >
              Your Cart is Empty
            </Typography>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="max-w-md mx-auto bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-3 text-white text-left"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={item.img}
                      alt="Man looking at item at a store"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex">
                      <div>
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                          {item.name}
                        </div>

                        <p className="mt-2 text-gray-500 ">
                          {item.description.slice(0, 70)}..
                        </p>
                      </div>
                      <div>
                        <Button
                          onClick={() => handleCartRemove(item.id)}
                          variant="text"
                          color="secondary"
                        >
                          remove
                        </Button>
                        <Button variant="text" color="secondary" size="large">
                          ${item.price}
                        </Button>
                      </div>
                    </div>
                    <div className="text-left">
                      <IconButton
                        className="text-white font-bold  hover:text-purple-800"
                        aria-label="Show cart items"
                        color="inherit"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        <KeyboardArrowDownIcon />
                      </IconButton>
                      <p className="inline">{item?.quantity}</p>
                      <IconButton
                        className="text-white font-bold  hover:text-purple-800"
                        aria-label="decreament"
                        color="inherit"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        <KeyboardArrowUpIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          {cart.length ? (
            <Button
              onClick={handleCartClear}
              variant="contained"
              color="secondary"
              sx={{ mb: 5 }}
            >
              clear The Cart
            </Button>
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="white"
            className="uppercase font-bold"
            sx={{ mt: 5, mb: 5 }}
          >
            Order Summary
          </Typography>
          <div className="bg-gray-300 rounded-xl p-5 text-left font-semibold">
            <h4 className="text-white text-1xl">
              Selected Items : {cart.length}
            </h4>
            <h3 className="text-white text-1xl">Total : ${total}</h3>
            <Button variant="contained" color="secondary" sx={{ mt: 5 }}>
              Proceed To CheckOUT
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
