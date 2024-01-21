
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
			<section className='relative xs:mt-14 md:mt-30 xs:py-6 md:py-14'>
				<Gallery />
			</section>
		</>
	);
};

export default GalleryPage;