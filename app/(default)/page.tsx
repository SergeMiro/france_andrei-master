import { Metadata } from 'next';

export const metadata: Metadata  = {
	title: 'Стажировка, учёба, работа во Франции - France Experience',
	description: 'Откройте для себя стажировку и сезонную работу во Франции, а также волонтерские программы и возможности трудоустройства во всей Европе с France Experience.',
}

// require('dotenv').config();

import React from 'react';
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import ClaimServices from '@/components/claim-services'
import Contact from '@/components/contact';


export default function Home() {
	return (
		<>
			<Hero />
			<Features />
			<ClaimServices />
			<Testimonials />
			{/* <FeaturesBlocks /> */}
			<Contact />
		</>
	)
}



// export const metadata = {
// 	title: 'Стажировка, учёба, работа во Франции - France Experience',
// 	description: 'Стажировки, учёба, работа во Франции',
// }