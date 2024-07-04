import Image from 'next/image';

interface Props {
	chef: {
		id: string;
		name: string;
		about: string;
		image: string;
		position: string;
	};
}

const ChefCard = ({ chef }: Props) => {
	return (
		<div className="relative">
			<div className="absolute group overflow-hidden top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-[4px] border-primary-red">
				<Image
					className="rounded-full object-cover duration-500 transition-all group-hover:scale-110"
					src={chef?.image}
					alt="chef-image"
					width={128}
					height={128}
				/>
			</div>
			<div className="border rounded-lg py-20 px-5 lg:px-10 text-center">
				<h3 className="font-poppins text-[18px] text-[#333] font-bold leading-[1.4]">
					{chef?.name}
				</h3>
				<span className="text-sm text-[#666] leading-[1.8] uppercase">
					{chef.position}
				</span>
				<p className="mt-5 text-[15px] text-[#666] leading-[1.7]">
					{chef?.about}
				</p>
			</div>
		</div>
	);
};

export default ChefCard;
