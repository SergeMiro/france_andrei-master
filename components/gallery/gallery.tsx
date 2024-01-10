

import React from 'react';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

const imagesDirectory = path.join(process.cwd(), 'public/images/photos');
const galleryImages = fs.readdirSync(imagesDirectory).map((file) => {
	return {
		src: `/images/photos/${file}`,
	};
});

export default function Gallery() {
	return (
		<div className='grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xs:gap-2 sm:gap-2 md:gap-2 lg:gap-3 max-w-6xl mx-auto px-4 sm:px-6' data-aos="zoom-y-out">
			{galleryImages.map((image, id) => (
				<div key={id} className='relative xs:w-full xs:h-80 sm:w-full sm:h-80 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-lg  lg:overflow-visible sm:overflow-hidden'>
					<Image
						src={image.src}
						width={100}
						height={100}
						alt={`Photo ${id}`}
						className='absolute left-0 top-0 w-full h-full z-0 object-cover rounded-lg cursor-pointer anim'
					/>
				</div>
			))}
		</div>
	);
};



