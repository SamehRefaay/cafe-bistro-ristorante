import Link from 'next/link';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const SocialLinks = ({ background = false }: { background: boolean }) => {
	return (
		<div className="flex gap-4 items center">
			<Link href="#">
				<FaFacebookF
					className={`cursor-pointer transition-colors duration-300 hover:text-primary-red ${
						background ? 'text-black' : 'text-white'
					}`}
				/>
			</Link>
			<Link href="#">
				<FaTwitter
					className={`cursor-pointer transition-colors duration-300 hover:text-primary-red ${
						background ? 'text-black' : 'text-white'
					}`}
				/>
			</Link>
		</div>
	);
};

export default SocialLinks;
