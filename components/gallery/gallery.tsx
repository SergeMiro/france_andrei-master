import fs from 'fs';
import path from 'path';
import GalleryClient from './gallery-client';

const imagesDirectory = path.join(process.cwd(), 'public/images/photos');

export default function Gallery() {
	const files = fs.readdirSync(imagesDirectory)
		.filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
		.sort();

	const images = files.map((file, index) => ({
		src: `/images/photos/${file}`,
		alt: `France Experience - фото ${index + 1}`,
	}));

	return <GalleryClient images={images} />;
}
