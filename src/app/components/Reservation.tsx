import CustomTitle from './CustomTitle';
import ReservationForm from './ReservationForm';
import Image from 'next/image';

const Reservation = () => {
	return (
		<section className="relative bg-gray-pattern-1 py-24">
			<div className="absolute top-0 left-0 w-full h-full bg-grid-bg-2 opacity-[0.02]"></div>
			<div className="container mx-auto">
				<div className="w-full">
					<CustomTitle
						firstTitle="Reservation"
						secondTitle="Book Table"
						variant={1}
					/>
					{/* Reservation form */}
				</div>
				<div className="w-full flex flex-col gap-20 lg:flex-row justify-center items-center">
					<div className="w-full h-full">
						<ReservationForm ordered={false} col={2} />
					</div>
					<div className="w-full h-full border">
						<div className="w-full h-[300px] relative rounded-lg overflow-hidden">
							<Image
								className="hover:scale-110 transition-all duration-300"
								src="/booking-01.jpg.webp"
								alt="booking image"
								fill
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Reservation;
