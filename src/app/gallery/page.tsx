'use client';
import PageHeader from '@/app/components/PageHeader';
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { galleryData } from '../../lib/data';
import Paging from '@/app/components/Paging';

type GalleryDataType = {
	id: string;
	tag: string[];
	image: string;
};

const GalleryPage = () => {
	const [modalImg, setModalImg] = useState('');
	const [data, setData] = useState<GalleryDataType[]>([]);
	const [currentTag, setCurrentTag] = useState('all');
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const menu = [
		{ id: '001', tag: 'all', title: 'all photo' },
		{ id: '002', tag: 'interior', title: 'interior' },
		{ id: '003', tag: 'food', title: 'food' },
		{ id: '004', tag: 'events', title: 'events' },
		{ id: '005', tag: 'vip', title: 'vip guests' },
	];

	useEffect(() => {
		setData(galleryData);
	}, []);

	const handleMenuBtnClick = (tag: string) => {
		setCurrentTag(tag);
		const dataForCurrentTag = galleryData.filter(item =>
			item.tag.includes(tag)
		);
		setData(dataForCurrentTag);
	};

	return (
		<div className="w-full -mt-[96px]">
			<PageHeader image="/gallery-header-bg.jpg" title="Gallery" />
			<div className=" py-20 px-4 lg:px-0 bg-white">
				<div className="max-w-7xl mx-auto">
					{/* menu buttons */}
					<div className="flex justify-center items-center gap-2 lg:gap-4">
						{menu.map((item, index) => (
							<button
								key={item.id}
								className={`py-1 px-2 lg:px-5 font-poppins rounded-lg uppercase ${
									currentTag === item.tag
										? 'bg-black text-[#eee]'
										: 'bg-white text-[#222]'
								}`}
								onClick={() => handleMenuBtnClick(item.tag)}
							>
								{index === 0 || index === menu.length - 1 ? (
									<>
										<span className="inline md:hidden">
											{item.title.substring(0, 3)}
										</span>
										<span className="hidden md:inline">{item.title}</span>
									</>
								) : (
									<span>{item.title}</span>
								)}
							</button>
						))}
					</div>
					<div className="mt-20 w-full grid gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{data.map(item => (
							<div
								key={item.id}
								className="relative  overflow-hidden group rounded-lg"
							>
								<Image
									className=" w-full h-auto object-contain group-hover:scale-110 transition-all duration-500 rounded-lg"
									src={item.image}
									alt="gallery image"
									width={600}
									height={600}
								/>
								<div className="hidden group-hover:flex justify-center items-center w-full h-full absolute top-0 left-0  bg-primary-red bg-opacity-80">
									<Button
										className="w-20 h-20 bg-white rounded-full cursor-pointer flex justify-center items-center"
										onPress={() => {
											setModalImg(item.image);
											onOpen();
										}}
									>
										<IoSearch className="w-8 h-8 hover:text-primary-red" />
									</Button>
									<Modal
										backdrop="transparent"
										isOpen={isOpen}
										onOpenChange={onOpenChange}
										size="4xl"
									>
										<ModalContent>
											{onClose => (
												<>
													<ModalHeader className="flex flex-col gap-1">
														Modal Title
													</ModalHeader>
													<ModalBody>
														<Image
															className="w-[900px] h-[500px] object-contain"
															src={modalImg}
															alt="gallery image"
															width={900}
															height={900}
														/>
													</ModalBody>
													<ModalFooter>
														<Button
															color="danger"
															variant="light"
															onPress={onClose}
														>
															Close
														</Button>
														<Button color="primary" onPress={onClose}>
															Action
														</Button>
													</ModalFooter>
												</>
											)}
										</ModalContent>
									</Modal>
								</div>
							</div>
						))}
					</div>
					{/* paging */}
					<Paging pages={3} />
				</div>
			</div>
		</div>
	);
};

export default GalleryPage;
