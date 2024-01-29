import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Галерея France Experience: стажировка, учёба и работа во Франции',
	description: 'Исследуйте нашу галерею и вдохновляйтесь историями успеха стажировок, учёбы и работы во Франции.',
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