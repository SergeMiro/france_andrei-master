
export const metadata = {
	title: 'Галерея',
	description: 'Галерея фото',
}

require('dotenv').config();

import React from 'react';
import Gallery from '@/components/gallery/gallery';

const GalleryPage = () => {
	return (
		<>
			<section className='relative sm:mt-20 md:mt-30 lg:mt-32 lg:mb-16'>
				<Gallery />
			</section>
		</>
	);
};

export default GalleryPage;