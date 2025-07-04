import { useEffect, useState, type JSX } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
const images = [
	//these will be served by the API later
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

export default function ImageCarrousel(): JSX.Element {
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
			className="flex flex-col items-center my-6 w-full max-w-6xl mx-auto px-4"
		>
			<div className="flex items-center justify-center gap-4 w-full">
				<button
					className="text-3xl md:text-5xl"
					onClick={() => setIndex((index - 1 + images.length) % images.length)}
				>
					<HiChevronLeft />
				</button>

				<img
					className="hidden md:block w-1/4 opacity-60 rounded-lg"
					src={previousImg.src}
					alt={previousImg.alt}
				/>

				<img
					className="w-3/4 md:w-2/4 rounded-xl"
					src={currentImg.src}
					alt={currentImg.alt}
				/>

				<img
					className="hidden md:block w-1/4 opacity-60 rounded-lg"
					src={nextImg.src}
					alt={nextImg.alt}
				/>

				<button
					className="text-3xl md:text-5xl"
					onClick={() => setIndex((index + 1) % images.length)}
				>
					<HiChevronRight />
				</button>
			</div>
		</div>
	);
}
