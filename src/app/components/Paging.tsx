'use client';
import { useState } from 'react';

const Paging = ({ pages }: { pages: number }) => {
	const [pageNum, setPageNum] = useState(1);
	return (
		<div className="flex justify-center items-center gap-5">
			{[...new Array(pages)].map((item, index) => (
				<button
					key={index}
					className={`w-8 h-8 rounded-full flex justify-center items-center  ${
						pageNum === index + 1
							? 'bg-[#222] text-[#eee]'
							: 'bg-[#eee] border text-[#333]'
					}`}
					onClick={() => setPageNum(index + 1)}
				>
					{index + 1}
				</button>
			))}
		</div>
	);
};

export default Paging;
