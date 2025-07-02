import ProductCard from '../../components/ProductCard/ProductCard';
import { catsProducts } from '../../data/catsProducts';

export default function Cats() {
	return (
		<section className="p-6">
			<h2 className="text-2xl font-semibold mb-4">Products for Cats</h2>
			<ul>
				{catsProducts.map((product) => (
					<li key={product.id}>
						<ProductCard product={product} />
					</li>
				))}
			</ul>
		</section>
	);
}
