import { Container, Grid } from "@mui/material";
import React from "react";
import useProducts from "../../hooks/useProducts";
import Product from "../Home/Product/Product";
import Navigation from "../Shared/Navigation/Navigation";

const Explore = ({ nav }) => {
  const [products] = useProducts();
  return (
    <div>
      <Navigation />
      <h3 className="text-3xl text-white font-bold mt-24">Our Products</h3>
      <Container sx={{ mt: 8, mb: 8 }} className="">
        <Grid container spacing={2}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Explore;
