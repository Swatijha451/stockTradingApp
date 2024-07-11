import React from 'react';
import { Link } from 'react-router-dom';

const Universe = () => {
	return (
		<div className="container mt-5">
			<div className="row text-center">
				<h1>The Zerodha Universe</h1>
				<p>
					Extend your trading and investment experience even further with our
					partner platforms
				</p>

				<div className="col-4 p-3 mt-5">
					<img src="media/images/smallcaseLogo.png" />
					<p className="mt-2 text-small text-muted">
						Thematic investment platform
					</p>
				</div>
				<div className="col-4 p-3 mt-5">
					<img
						src="media/images/streakLogo.png"
						style={{ width: '40%' }}
					/>
					<p className="mt-2 text-small text-muted">
						Algo and Strategy Platform
					</p>
				</div>
				<div className="col-4 p-3 mt-5">
					<img
						src="media/images/sensibullLogo.svg"
						style={{ width: '65%' }}
					/>
					<p className=" mt-2 text-small text-muted">
						Options Trading Platform
					</p>
				</div>
				<div className="col-4 p-3 mt-5">
					<img
						src="media/images/dittoLogo.png"
						style={{ width: '40%' }}
					/>
					<p className=" mt-2 text-small text-muted">Insurance</p>
				</div>
				<div className="col-4 p-3 mt-5">
					<img
						src="media/images/goldenpiLogo.png"
						style={{ width: '65%' }}
					/>
					<p className="mt-2 text-small text-muted">
						Thematic investment platform
					</p>
				</div>
				<div className="col-4 p-3 mt-5">
					<img
						src="media/images/zerodhaFundhouse.png"
						style={{ width: '60%' }}
					/>
					<p className="mt-2 text-small text-muted">Asset Mangement</p>
				</div>
				<Link to={'/signup'}>
					<button
						className="p-2 btn btn-primary fs-5 mb-5"
						style={{ width: '20%', margin: '0 auto' }}>
						Signup Now
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Universe;
