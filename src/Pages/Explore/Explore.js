import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Product from "../Home/Product/Product";
import Navigation from "../Shared/Navigation/Navigation";

const Explore = () => {
  const { client } = useAxios();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    client
      .get(`/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Navigation />
      <h3 className="text-3xl text-white font-bold mt-24">Our Products</h3>
      <Container sx={{ mt: 8, mb: 8 }}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Explore;
