import type { Product } from '../../types/Product';
import ProductCard from '../ProductCard/ProductCard';

interface ProductContainerProps {
	products: Product[];
	label: string;
}

export default function ProductContainer(props: ProductContainerProps) {
	return (
		<section className="p-6">
			<h2 className="text-2xl font-semibold mb-4 h-full">
				{props.label === 'Sales'
					? 'Products on Sale'
					: props.label === 'Services'
					? `Services`
					: props.label === 'Best Sellers'
					? 'Best Sellers'
					: `Products for ${props.label}`}
			</h2>
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:[grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-4 justify-items-center">
				{props.products.map((product) => (
					<li key={product.id}>
						<ProductCard product={product} />
					</li>
				))}
			</ul>
		</section>
	);
}
