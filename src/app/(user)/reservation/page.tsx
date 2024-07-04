import PageHeader from '@/app/components/PageHeader';
import ReservationForm from '@/app/components/ReservationForm';
import React from 'react';

const ReservationPage = () => {
	return (
		<main className="w-full -mt-[96px]">
			<PageHeader image="/bg-title-page-02.jpg.webp" title="Reservation" />
			<div className="w-full py-20 max-w-7xl mx-auto">
				<ReservationForm col={3} />
				<div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-10">
					<div className="flex flex-col gap-5">
						<h3 className="text-2xl font-poppins leading-7 tracking-[3px] font-medium uppercase">
							Reserve by phone
						</h3>
						<p className="text-base text-[#666]">
							Donec quis euismod purus. Donec feugiat ligula rhoncus, varius
							nisl sed, tincidunt lectus.{' '}
							<span className="text-[#333]">Nulla vulputate</span> , lectus vel
							volutpat efficitur, orci lacus sodales sem, sit amet quam:{' '}
							<span className="text-primary-red">(001) 345 6789</span>
						</p>
					</div>
					<div className="flex flex-col gap-5">
						<h3 className="text-2xl font-poppins leading-7 tracking-[3px] font-medium uppercase">
							FOR EVENT BOOKING
						</h3>
						<p className="text-base text-[#666]">
							Donec feugiat ligula rhoncus:{' '}
							<span className="text-primary-red">(001) 345 6789</span> , varius
							nisl sed, tinci-dunt lectus sodales sem.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ReservationPage;
