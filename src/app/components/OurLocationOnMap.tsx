const OurLocationOnMap = () => {
	return (
		<div className="w-full border-8 border-white rounded-lg">
			<iframe
				sandbox="allow-scripts"
				loading="lazy"
				frameBorder="0"
				style={{ border: 0 }}
				allowFullScreen
				aria-hidden="false"
				tabIndex={0}
				width="100%"
				height="600"
				src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=8th%20floor,%20379%20Hudson%20St,%20New%20York,%20NY%2010018+(Bistro%20Restaurant)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
			>
				<a href="https://www.gps.ie/">gps vehicle tracker</a>
			</iframe>
		</div>
	);
};

export default OurLocationOnMap;
