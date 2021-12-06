import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';

import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../Product/Product';

const Products = ({ nav }) => {
	const [products, setProducts] = useProducts();

	return (
		<div className=''>
			{!nav || <Navigation></Navigation>}
			<div className='p-5'>
				<h3
					className={
						nav
							? 'text-3xl text-white font-bold mt-24'
							: 'text-3xl text-white font-bold'
					}
				>
					Our Top Sale Of The Week
				</h3>
				<Container sx={{ mt: 8, mb: 8 }} className='f'>
					<Grid container spacing={2}>
						{products.slice(0, 6).map((product) => (
							<Product key={product.id} product={product} />
						))}
					</Grid>
				</Container>
			</div>
		</div>
	);
};

export default Products;
