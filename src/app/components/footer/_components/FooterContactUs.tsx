import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const FooterContactUs = () => {
	return (
		<div className="flex flex-col gap-10">
			{/* contact us */}
			<div className="flex flex-col gap-5">
				<h3 className="font-poppins font-medium text-lg uppercase">
					Contact Us
				</h3>
				<div className="flex items-center gap-5">
					<FaLocationDot color="#999" size={13} />
					<span className="text-sm text-[#999]">
						{' '}
						8th floor, 379 Hudson St, New York, NY 10018
					</span>
				</div>
				<div className="flex items-center gap-5">
					<FaPhone color="#999" size={13} />
					<span className="text-sm text-[#999]"> (+1) 96 716 6879</span>
				</div>
				<div className="flex items-center gap-5">
					<IoMdMail color="#999" size={13} />
					<span className="text-sm text-[#999]"> contact@site.com</span>
				</div>
			</div>
			{/* opening times */}
			<div className="flex flex-col gap-5">
				<h3 className="font-poppins font-medium text-lg uppercase">
					Opening Times
				</h3>
				<div className="flex flex-col gap-5">
					<span className="text-sm text-[#999]">09:30 AM – 11:00 PM</span>
					<span className="text-sm text-[#999]"> Every Day</span>
				</div>
			</div>
		</div>
	);
};

export default FooterContactUs;
