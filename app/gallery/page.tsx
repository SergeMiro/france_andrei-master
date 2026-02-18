import { Metadata } from 'next';
import Gallery from '@/components/gallery/gallery';

export const metadata: Metadata = {
	title: 'Галерея France Experience',
	description: 'Истории успеха наших клиентов, вдохновляющие своим опытом стажировок, учёбы и работы во Франции.',
}

export default function GalleryPage() {
	return (
		<section className="relative xs:mt-14 md:mt-24 xs:py-6 md:py-14">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
				<div className="text-center" data-aos="zoom-y-out">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
						Галерея
					</h1>
					<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
						Истории успеха наших клиентов, вдохновляющие своим опытом стажировок, учёбы и работы во Франции
					</p>
				</div>
			</div>
			<Gallery />
		</section>
	);
}
