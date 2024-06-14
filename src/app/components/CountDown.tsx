'use client';

import Countdown from 'react-countdown';

interface RenderProps {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
}

export const Completionist = () => <span>You are good to go!</span>;

const CountDown = () => {
	// Renderer callback with condition
	const renderer = ({
		days,
		hours,
		minutes,
		seconds,
		completed,
	}: RenderProps) => {
		if (completed) {
			// Render a completed state
			return <Completionist />;
		} else {
			// Render a countdown
			return (
				<div className="mt-8 flex gap-14 text-5xl text-primary-red font-bold">
					<div>
						<span>{days < 10 ? `0${days}` : days}</span>
						<span className="mt-3 block text-xs text-[#999] uppercase leading-5">
							Days
						</span>
					</div>
					<div>
						<span>{hours < 10 ? `0${hours}` : hours}</span>
						<span className="mt-3 block text-xs text-[#999] uppercase leading-5">
							Hours
						</span>
					</div>
					<div>
						<span>{minutes < 10 ? `0${minutes}` : minutes}</span>
						<span className="mt-3 block text-xs text-[#999] uppercase leading-5">
							Minutes
						</span>
					</div>
					<div>
						<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
						<span className="mt-3 block text-xs text-[#999] uppercase leading-5">
							seconds
						</span>
					</div>
				</div>
			);
		}
	};
	return (
		<Countdown className="" date={new Date('2024/07/9')} renderer={renderer} />
	);
};

export default CountDown;
