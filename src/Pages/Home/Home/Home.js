import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Features from '../Features/Features';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
	return (
		<div>
			<Navigation />
			<Banner />
			<Features />
			<About />
			<Products />
			<Footer />
		</div>
	);
};

export default Home;
