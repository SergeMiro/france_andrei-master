
export const metadata = {
	title: 'France Experience',
	description: 'Стажировки во Франции',
}

require('dotenv').config();

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
