import { useEffect, useState, type JSX } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import type { Product } from '../../types/Product';
import ProductCard from '../ProductCard/ProductCard';

interface CardCarouselProps {
	productArray: Product[];
}

export default function CardCarousel({
	productArray,
}: CardCarouselProps): JSX.Element {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % productArray.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const currentProduct = productArray[index];
	const previousProduct =
		productArray[(index - 1 + productArray.length) % productArray.length];
	const nextProduct = productArray[(index + 1) % productArray.length];

	return (
		<div
			data-testid="card-carrousel"
			className="flex flex-col items-center my-6 w-full max-w-6xl mx-auto px-4"
		>
			<div className="flex items-center gap-4 w-full justify-center">
				<button
					data-testid="nav-btn"
					className="text-4xl md:text-5xl"
					onClick={() =>
						setIndex((index - 1 + productArray.length) % productArray.length)
					}
				>
					<HiChevronLeft />
				</button>

				<div className="hidden md:block w-1/3">
					<ProductCard product={previousProduct} variant="small" />
				</div>

				<div className="w-full md:w-1/3">
					<ProductCard product={currentProduct} />
				</div>

				<div className="hidden md:block w-1/3">
					<ProductCard product={nextProduct} variant="small" />
				</div>

				<button
					data-testid="nav-btn"
					className="text-4xl md:text-5xl"
					onClick={() => setIndex((index + 1) % productArray.length)}
				>
					<HiChevronRight />
				</button>
			</div>
		</div>
	);
}
