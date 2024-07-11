import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Education from './Education';
import Stats from './Stats';

import OpenAccount from '../OpenAccount';
// import Navbar from '../Navbar';
// import Footer from '../Footer';

const HomePage = () => {
	return (
		<>
			<Hero></Hero>
			<Awards></Awards>
			<Stats></Stats>
			<Pricing></Pricing>
			<Education></Education>
			<OpenAccount></OpenAccount>
		</>
	);
};

export default HomePage;
