'use client'

import { useState, useCallback } from 'react';
import {
	Card,
	CardBody,
	Image,
	Modal,
	ModalContent,
	ModalBody,
	Button,
	useDisclosure,
} from '@heroui/react';

interface GalleryImage {
	src: string;
	alt: string;
}

export default function GalleryClient({ images }: { images: GalleryImage[] }) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [selectedIndex, setSelectedIndex] = useState(0);

	const openImage = useCallback((index: number) => {
		setSelectedIndex(index);
		onOpen();
	}, [onOpen]);

	const goToPrevious = useCallback(() => {
		setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	}, [images.length]);

	const goToNext = useCallback(() => {
		setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	}, [images.length]);

	return (
		<>
			<div
				className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 max-w-6xl mx-auto px-4 sm:px-6"
				data-aos="zoom-y-out"
			>
				{images.map((image, index) => (
					<div key={index} className="mb-3 break-inside-avoid">
						<Card
							isPressable
							onPress={() => openImage(index)}
							className="w-full border-none bg-transparent shadow-none hover:scale-[1.02] transition-transform duration-300"
						>
							<CardBody className="p-0 overflow-hidden rounded-xl">
								<Image
									src={image.src}
									alt={image.alt}
									className="w-full h-auto object-cover"
									radius="lg"
									shadow="sm"
									loading="lazy"
								/>
							</CardBody>
						</Card>
					</div>
				))}
			</div>

			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size="5xl"
				backdrop="blur"
				placement="center"
				classNames={{
					backdrop: "bg-black/80",
					base: "bg-transparent shadow-none",
					body: "p-0",
					closeButton: "text-white hover:bg-white/20 z-50 text-2xl top-2 right-2",
				}}
			>
				<ModalContent>
					{() => (
						<ModalBody>
							<div className="relative flex items-center justify-center">
								<Button
									isIconOnly
									variant="flat"
									className="absolute left-2 z-50 bg-black/40 text-white hover:bg-black/60 min-w-10 h-10 rounded-full"
									onPress={goToPrevious}
									aria-label="Предыдущее фото"
								>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
									</svg>
								</Button>

								<Image
									src={images[selectedIndex]?.src}
									alt={images[selectedIndex]?.alt}
									className="max-h-[85vh] w-auto object-contain"
									radius="lg"
								/>

								<Button
									isIconOnly
									variant="flat"
									className="absolute right-2 z-50 bg-black/40 text-white hover:bg-black/60 min-w-10 h-10 rounded-full"
									onPress={goToNext}
									aria-label="Следующее фото"
								>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
									</svg>
								</Button>
							</div>

							<div className="flex justify-center py-2">
								<span className="text-white/70 text-sm">
									{selectedIndex + 1} / {images.length}
								</span>
							</div>
						</ModalBody>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
