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
			className="flex justify-center items-center h-max my-4 gap-8 w-4/5"
		>
			<ProductCard product={previousProduct} variant="small" />
			<button
				data-testid="nav-btn"
				className="text-5xl"
				onClick={() =>
					setIndex((index - 1 + productArray.length) % productArray.length)
				}
			>
				<HiChevronLeft />
			</button>
			<ProductCard product={currentProduct} />
			<button
				data-testid="nav-btn"
				className="text-5xl"
				onClick={() => setIndex((index + 1) % productArray.length)}
			>
				<HiChevronRight />
			</button>
			<ProductCard product={nextProduct} variant="small" />
		</div>
	);
}
