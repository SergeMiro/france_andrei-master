import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Галерея France Experience',
	description: 'Истории успеха наших клиентов, вдохновляющие своим опытом стажировок, учёбы и работы во Франции.',
}

// require('dotenv').config();

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