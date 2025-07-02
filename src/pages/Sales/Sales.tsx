import ProductCard from '../../components/ProductCard/ProductCard';
import { salesProducts } from '../../data/salesProducts';

export default function Sales() {
	return (
		<section className="p-6">
			<h2 className="text-2xl font-semibold mb-4">Products for Sale</h2>
			<ul>
				{salesProducts.map((product) => (
					<li key={product.id}>
						<ProductCard product={product} />
					</li>
				))}
			</ul>
		</section>
	);
}
