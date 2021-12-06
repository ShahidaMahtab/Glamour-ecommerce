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
import React from "react";

const Product = ({ product }) => {
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
              className="uppercase font-bold"
            >
              {name}
            </Typography>
            <Typography variant="h6" color="white">
              ${price}
            </Typography>
          </div>
          <Typography variant="body2" color="white" sx={{ textAlign: "left" }}>
            {description.slice(0, 50)}...
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton
            aria-label="add to cart"
            sx={{ color: "white", display: "flex", ml: "auto" }}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
