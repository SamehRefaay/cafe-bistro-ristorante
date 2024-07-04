'use client';
import React, { useState } from 'react';
import CustomButton from './CustomButton';

interface Props {
	col: number;
	ordered: boolean;
}

const ReservationForm = ({ col, ordered }: Props) => {
	const [date, setDate] = useState(Date.now());

	const options = [
		{ value: 1, title: '1 person' },
		{ value: 2, title: '2 people' },
		{ value: 3, title: '3 people' },
		{ value: 4, title: '4 people' },
		{ value: 5, title: '5 people' },
		{ value: 6, title: '6 people' },
		{ value: 7, title: '7 people' },
		{ value: 8, title: '8 people' },
		{ value: 9, title: '9 people' },
		{ value: 10, title: '10 people' },
		{ value: 11, title: '11 people' },
		{ value: 12, title: '12 people' },
	];
	return (
		<form className="w-full mt-16">
			<div
				className={`grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 ${
					col === 3 ? 'md:grid-cols-3' : ''
				}`}
			>
				{/* Date */}
				<div className="order-1 flex flex-col gap-2">
					<label htmlFor="date" className="text-sm text-[#666]">
						Date
					</label>
					<input
						id="date"
						className="w-full border p-3 rounded-lg focus:outline-primary-red text-[#999] text-sm"
						type="date"
						name="date"
						value={date}
						onChange={(e: any) => setDate(e.target.value)}
					/>
				</div>
				{/* Name */}
				<div
					className={`${ordered ? 'order-4' : 'order-2'} flex flex-col gap-2`}
				>
					<label htmlFor="name" className="text-sm text-[#666]">
						Name
					</label>
					<input
						id="name"
						className="w-full border p-3 rounded-lg focus:outline-primary-red text-[#999] text-sm"
						type="name"
						name="name"
						placeholder="Name"
					/>
				</div>
				{/* Time */}
				<div
					className={`${ordered ? 'order-2' : 'order-3'} flex flex-col gap-2`}
				>
					<label htmlFor="time" className="text-sm text-[#666]">
						Time
					</label>
					<input
						className="w-full border p-3 rounded-lg focus:outline-primary-red text-[#999] text-sm"
						id="time"
						type="time"
						name="time"
					/>
				</div>
				{/* Phone */}
				<div
					className={`${ordered ? 'order-5' : 'order-4'} flex flex-col gap-2`}
				>
					<label htmlFor="phone" className="text-sm text-[#666]">
						Phone
					</label>
					<input
						className="w-full border p-3 rounded-lg focus:outline-primary-red text-[#999] text-sm"
						id="phone"
						type="text"
						name="phone"
						placeholder="Phone"
					/>
				</div>
				{/* People */}
				<div
					className={`${ordered ? 'order-3' : 'order-5'} flex flex-col gap-2`}
				>
					<label htmlFor="people" className="text-sm text-[#666]">
						People
					</label>
					<select
						className="w-full border p-3 rounded-lg bg-white focus:outline-primary-red text-[#999] text-sm"
						id="people"
						name="people"
					>
						{options.map(item => (
							<option key={item.value} value={item.value}>
								{item.title}
							</option>
						))}
					</select>
				</div>
				{/* Email */}
				<div className="order-6 flex flex-col gap-2">
					<label htmlFor="email" className="text-sm text-[#666]">
						Email
					</label>
					<input
						className="w-full border p-3 rounded-lg focus:outline-primary-red text-[#999] text-sm"
						id="email"
						type="email"
						name="email"
						placeholder="Email"
					/>
				</div>
				{/* submit button */}
				<div
					className={`order-7 items-center md:col-span-2 ${
						col === 3 ? 'lg:col-span-3' : ''
					}  flex flex-col gap-2`}
				>
					<CustomButton
						className=""
						type="submit"
						title="Book Table"
						variant={2}
					/>
				</div>
			</div>
		</form>
	);
};

export default ReservationForm;
