import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import Navigation from "../Shared/Navigation/Navigation";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  addToDb,
  clearTheCart,
  deleteFromDb,
  subToDb,
} from "../../utilities/localStore";
import ConfirmOrderDialog from "../ConfirmOrderDialog/ConfirmOrderDialog";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleIncreaseQuantity = (product) => {
    let newCart = [];
    const exists = cart.find((pd) => pd._id === product._id);
    if (exists) {
      const rest = cart.filter((pd) => pd._id !== product._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product._id);
  };
  const handleDecreaseQuantity = (product) => {
    let newCart = [];
    const exists = cart.find((pd) => pd._id === product._id);
    if (exists.quantity - 1 === 0) {
      deleteFromDb(exists._id);
      handleCartRemove(exists._id);
      return;
    } else {
      if (exists) {
        const rest = cart.filter((pd) => pd._id !== product._id);
        exists.quantity = exists.quantity - 1;
        newCart = [...rest, exists];
      } else {
        product.quantity = 1;
        newCart = [...cart, product];
      }
      setCart(newCart);
      subToDb(product._id);
    }
  };

  const handleCartClear = () => {
    clearTheCart();
    setCart([]);
  };
  const handleCartRemove = (id) => {
    const newCart = cart.filter((product) => product._id !== id);
    deleteFromDb(id);
    setCart(newCart);
  };
  let total = 0;
  let totalQuantity = 0;
  const shipping = 15;
  const tax = 10;
  let grandTotal = 0;
  for (const product of cart) {
    total += parseInt(product.price) * product.quantity;
    totalQuantity += product.quantity;
  }
  grandTotal = total + shipping + tax;
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
                key={item._id}
                className="max-w-md mx-auto bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-3 text-white text-left"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0 bg-black">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={item?.img}
                      alt="Man looking at item at a store"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex">
                      <div>
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                          {item?.name}
                        </div>

                        <p className="mt-2 text-gray-500 ">
                          {item?.description?.slice(0, 70)}..
                        </p>
                      </div>
                      <div>
                        <Button
                          onClick={() => handleCartRemove(item._id)}
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
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        <KeyboardArrowDownIcon />
                      </IconButton>
                      <p className="inline">
                        {item?.quantity ? item.quantity : 0}
                      </p>
                      <IconButton
                        className="text-white font-bold  hover:text-purple-800"
                        aria-label="decreament"
                        color="inherit"
                        onClick={() => handleIncreaseQuantity(item)}
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
            <h4 className="text-white text-1xl">Quantity : {totalQuantity}</h4>
            <h3 className="text-white text-1xl">Total Price: ${total}</h3>
            {cart.length ? (
              <>
                <h3 className="text-white text-1xl">
                  {" "}
                  Shipping: ${`${shipping}`}
                </h3>
                <h3 className="text-white text-1xl"> Tax: ${`${tax}`}</h3>
                <h3 className="text-white text-1xl">
                  GrandTotal: ${`${grandTotal}`}
                </h3>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 3 }}
                  onClick={handleOpen}
                >
                  Order Now
                </Button>
                <ConfirmOrderDialog
                  open={open}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                  handleCartClear={handleCartClear}
                  grandTotal={grandTotal}
                />
              </>
            ) : (
              " "
            )}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
