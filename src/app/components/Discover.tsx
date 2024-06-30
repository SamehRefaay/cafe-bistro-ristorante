import CustomTitle from './CustomTitle';

const Discover = () => {
	return (
		<section className="w-full h-[400px] bg-discover bg-fixed">
			<div className="w-full h-full flex justify-center items-center">
				<CustomTitle
					firstTitle="Discover"
					secondTitle="Bistro place"
					variant={2}
				/>
			</div>
		</section>
	);
};

export default Discover;
