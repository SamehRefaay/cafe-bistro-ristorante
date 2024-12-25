'use client';
import Copyright from './Copyright';
import MainFooter from './MainFooter';
import Subscribe from './Subscribe';

const Footer = () => {
	return (
		<footer className="w-full">
			{/* subscribe */}
			<Subscribe />
			{/* main content of footer include openning times & social links & gallery */}
			<MainFooter />
			{/* copyright */}
			<Copyright />
		</footer>
	);
};

export default Footer;
