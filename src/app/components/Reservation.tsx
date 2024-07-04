import CustomTitle from './CustomTitle';
import ReservationForm from './ReservationForm';
import Image from 'next/image';

const Reservation = () => {
	return (
		<section className="relative bg-gray-pattern-1 py-24 px-4">
			<div className="absolute top-0 left-0 w-full h-full bg-grid-bg-2 opacity-[0.02]"></div>
			<div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
				<div className="col-span-1">
					<CustomTitle
						firstTitle="Reservation"
						secondTitle="Book Table"
						variant={1}
					/>
					{/* Reservation form */}
					<ReservationForm ordered={false} />
				</div>
				<div className="col-span-1 flex justify-center items-center">
					<div className="w-full h-full md:w-[75%] md:h-[75%]  m-auto rounded-lg overflow-hidden">
						<Image
							className="hover:scale-110 transition-all duration-300"
							src="/booking-01.jpg.webp"
							alt="booking image"
							width={600}
							height={600}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Reservation;
