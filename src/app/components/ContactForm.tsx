import React from 'react';

const ContactForm = () => {
	return (
		<div className="w-full">
			<h4 className="text-2xl font-poppins font-medium uppercase text-center">
				Send us a message
			</h4>
			<form className="mt-20 block w-full max-w-4xl mx-auto">
				<div className="grid gap-x-5 gap-y-10 grid-cols-1 lg:grid-cols-3">
					<div className="flex flex-col gap-2">
						<label htmlFor="name" className="text-[#666]">
							Name
						</label>
						<input
							id="name"
							className="p-3 outline-none rounded-lg border-3 border-[#ccc] focus:border-primary-red bg-white"
							type="text"
							name="name"
							placeholder="Name"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="email" className="text-[#666]">
							Email
						</label>
						<input
							id="email"
							className="p-3 outline-none rounded-lg border-3 border-[#ccc] focus:border-primary-red bg-white"
							type="email"
							name="email"
							placeholder="Email"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="phone" className="text-[#666]">
							Phone
						</label>
						<input
							id="phone"
							className="p-3 outline-none rounded-lg border-3 border-[#ccc] focus:border-primary-red bg-white"
							type="tel"
							name="phone"
							placeholder="Phone"
						/>
					</div>
					<div className="col-span-1 lg:col-span-3 flex flex-col gap-2">
						<label htmlFor="message" className="text-[#666]">
							Message
						</label>
						<textarea
							id="message"
							className="p-3 outline-none rounded-lg border-3 border-[#ccc] focus:border-primary-red bg-white"
							name="message"
							placeholder="Message"
							rows={4}
						/>
					</div>
					<div className="col-span-1 lg:col-span-3 items-center flex flex-col gap-2">
						<button
							className="w-[calc(33%-20px)]  rounded-lg py-3  bg-[#222] text-[#eee]"
							type="submit"
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
