import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './LandingPage/home/HomePage';
import AboutPage from './LandingPage/about/AboutPage';
import ProductPage from './LandingPage/products/ProductPage';
import SupportPage from './LandingPage/support/SupportPage';
import Signup from './LandingPage/signup/Signup';
import Navbar from './LandingPage/Navbar';
import Footer from './LandingPage/Footer';
import NotFound from './LandingPage/NotFound';
import PricingPage from './LandingPage/pricing/PricingPage';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/signup"
						element={<Signup />}
					/>
					<Route
						path="/about"
						element={<AboutPage />}
					/>
					<Route
						path="/products"
						element={<ProductPage />}
					/>
					<Route
						path="/pricing"
						element={<PricingPage />}
					/>
					<Route
						path="/support"
						element={<SupportPage />}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
