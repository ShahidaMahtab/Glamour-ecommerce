import React, { useContext } from "react";
import { AddShoppingCart } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { CartContext } from "../../../context/CartProvider";

const Product = ({ product }) => {
  const { handleAddToCart } = useContext(CartContext);
  const { img, name, price, description } = product;

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345, background: "#202020" }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
          title={name}
        />
        <CardContent sx={{ height: "100px" }}>
          <div className="flex justify-between">
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="white"
              className="text-white font-bold  hover:text-purple-800"
            >
              {name}
            </Typography>
            <Typography
              variant="h6"
              color="white"
              className="text-white font-bold  hover:text-purple-800"
            >
              ${price}
            </Typography>
          </div>
          <Typography variant="body2" color="white" sx={{ textAlign: "left" }}>
            {description.slice(0, 50)}...
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton
            onClick={() => handleAddToCart(product)}
            aria-label="add to cart"
            sx={{ color: "white", display: "flex", ml: "auto" }}
            className="text-white font-bold  hover:text-purple-800"
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
