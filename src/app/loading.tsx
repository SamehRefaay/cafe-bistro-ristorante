import Image from 'next/image';

const loading = () => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<Image src="/loading.gif" alt="loading-image" width={150} height={150} />
		</div>
	);
};

export default loading;
