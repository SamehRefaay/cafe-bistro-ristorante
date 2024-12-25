'use client';
import Copyright from './_components/Copyright';
import MainFooter from './_components/MainFooter';
import Subscribe from './_components/Subscribe';

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
