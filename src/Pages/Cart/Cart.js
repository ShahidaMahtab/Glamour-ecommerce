import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import Navigation from "../Shared/Navigation/Navigation";
import img from "../../Images/products/img2.jpg";
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const handleCartClear = () => {
    setCart([]);
  };
  const handleCartRemove = (newProduct) => {
    const newCart = cart.filter((product) => product.key !== newProduct.key);
    setCart(newCart);
  };
  let total = 0;
  for (const product of cart) {
    total += product.price;
  }
  return (
    <Container>
      <Navigation />
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        color="white"
        className="uppercase font-bold"
        sx={{ mt: 12 }}
      >
        Your Shopping Cart
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color="white"
            className="uppercase font-bold"
            sx={{ mt: 12 }}
          >
            products
          </Typography>
          <Card sx={{ maxWidth: 345, background: "#202020" }}>
            <div className="flex">
              <div>
                <CardMedia
                  component="img"
                  height="140"
                  image={img}
                  alt="green iguana"
                  title="broke"
                />
              </div>
              <div>
                <CardContent sx={{ height: "100px" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color="white"
                    className="uppercase font-bold"
                  >
                    Base Foundation
                  </Typography>
                  <Typography variant="body2" color="white">
                    price
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ color: "white" }}
                  >
                    +
                  </Button>
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{ textAlign: "left" }}
                  >
                    1
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ color: "white" }}
                  >
                    -
                  </Button>
                </CardActions>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color="white"
            className="uppercase font-bold"
            sx={{ mt: 12 }}
          >
            Order Summary
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
