import { useEffect, useState, type JSX } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
const images = [
	{
		src: 'https://placehold.co/600x400?text=banner1',
		alt: 'Banner 1',
		index: 0,
	},
	{
		src: 'https://placehold.co/600x400?text=banner2',
		alt: 'Banner 2',
		index: 1,
	},
	{
		src: 'https://placehold.co/600x400?text=banner3',
		alt: 'Banner 3',
		index: 2,
	},
	{
		src: 'https://placehold.co/600x400?text=banner4',
		alt: 'Banner 4',
		index: 3,
	},
	{
		src: 'https://placehold.co/600x400?text=banner5',
		alt: 'Banner 5',
		index: 4,
	},
];

export default function HomeCarrousel(): JSX.Element {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % images.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const currentImg = images[index];
	const previousImg = images[(index - 1 + images.length) % images.length];
	const nextImg = images[(index + 1) % images.length];

	return (
		<div
			data-testid="home-carrousel"
			className="flex justify-center items-center h-max mb-4 gap-8 overflow-hidden"
		>
			<img className="w-1/3" src={previousImg.src} alt={previousImg.alt} />
			<button
				className="text-5xl"
				onClick={() => setIndex((index - 1 + images.length) % images.length)}
			>
				<HiChevronLeft />
			</button>
			<img className="w-2/3" src={currentImg.src} alt={currentImg.alt} />
			<button
				className="text-5xl"
				onClick={() => setIndex((index + 1) % images.length)}
			>
				<HiChevronRight />
			</button>
			<img className="w-1/3" src={nextImg.src} alt={nextImg.alt} />
		</div>
	);
}
