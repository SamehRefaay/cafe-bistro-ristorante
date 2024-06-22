'use client';
import Copyright from './Copyright';
import Social from './Social';
import Subscribe from './Subscribe';

const Footer = () => {
	return (
		<footer className="w-full">
			{/* subscribe */}
			<Subscribe />
			{/* social links */}
			<Social />
			{/* copyright */}
			<Copyright />
		</footer>
	);
};

export default Footer;
