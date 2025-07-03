import { useContext } from 'react';
import type { Product } from '../../types/Product';
import { CartContext } from '../../context/CartContext';

interface ProductCardProps {
	product: Product;
}

interface ProductCardProps {
	product: Product;
	variant?: 'small' | 'normal';
}

export default function ProductCard({
	product,
	variant = 'normal',
}: ProductCardProps) {
	const sizeClass =
		variant === 'small' ? 'scale-90 opacity-60' : 'scale-100 opacity-100';
	const { addItem } = useContext(CartContext);
	return (
		<div
			data-testid="product-card"
			className={`flex flex-col justify-between h-full w-full max-w-sm mx-auto text-center border-2 p-4 rounded-lg shadow-lg transition-transform duration-300 ${sizeClass}`}
		>
			<img
				src={product.imageUrl}
				alt={product.name}
				className="rounded-xl mb-2"
			/>
			<h3 className="font-extrabold text-xl">{product.name}</h3>
			<p className="text-sm">{product.description}</p>
			<p className="font-extrabold">${product.price.toFixed(2)}</p>
			<button
				onClick={() => addItem(product)}
				className="mt-2 bg-ocean text-white py-1 px-4 rounded-lg hover:bg-darkOcean transition-colors duration-300"
			>
				Add to cart
			</button>
		</div>
	);
}
