import ContactForm from '@/app/components/ContactForm';
import PageHeader from '@/app/components/PageHeader';
import dynamic from 'next/dynamic';
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const NoSSR = dynamic(() => import('@/app/components/OurLocationOnMap'), {
	ssr: false,
});
const ContactPage = () => {
	return (
		<section className='relative bg-gray-pattern-1 w-full -mt-[96px]'>
			<div className='absolute top-0 left-0 w-full h-full bg-grid-bg-2 opacity-[0.02] '></div>
			<PageHeader image='/bg-title-page-02.jpg.webp' title='Contact' />
			<div className='container mx-auto'>
				<div className='relative flex flex-col gap-20 w-full py-20'>
					{/* map */}
					<NoSSR />
					{/* contact form */}
					<ContactForm />
					{/* location - call us - opening hours */}
					<div className='grid gap-10 lg:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
						<div className='flex gap-5 lg:gap-10'>
							<FaLocationDot className='mt-1' color='#222' size={20} />
							<div className='flex flex-col gap-5'>
								<h3 className='text-2xl font-medium text-[#222] uppercase'>Location</h3>
								<p className='text-sm text-[#666]'>8th floor, 379 Hudson St, New York, NY 10018</p>
							</div>
						</div>
						<div className='flex  gap-5 lg:gap-10'>
							<FaPhone className='mt-1' color='#222' size={20} />
							<div className='flex flex-col gap-5'>
								<h3 className='text-2xl font-medium text-[#222] uppercase'>Call us</h3>
								<p className='text-sm text-[#666]'>(+1) 23 456 789</p>
							</div>
						</div>
						<div className='flex  gap-5 lg:gap-10'>
							<FaLocationDot className='mt-1' color='#222' size={20} />
							<div className='flex flex-col gap-5'>
								<h3 className='text-2xl font-medium text-[#222] uppercase'>Opening Hours</h3>
								<p className='text-sm text-[#666]'>09:30 AM – 11:00 PM Every Day</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
