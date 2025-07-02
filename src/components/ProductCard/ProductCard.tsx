import type { Product } from '../../types/Product';

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<div data-testid="product-card">
			<img src={product.imageUrl} alt={product.name} />
			<h3>{product.name}</h3>
			<p>{product.description}</p>
			<p>${product.price.toFixed(2)}</p>
			<button>Add to cart</button>
		</div>
	);
}
