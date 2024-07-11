import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="container p-5 mb-5">
			<div className="row text-center">
				<h1 className="mt-5">
					Something went <span style={{ color: 'blue' }}>Wrong</span>
				</h1>
				<p>
					<b>404</b> Page Not Found
				</p>
				<Link to={'/support'}>
					<button className="btn btn-primary">Support home</button>
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
