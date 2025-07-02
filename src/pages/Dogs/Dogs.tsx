import ProductCard from '../../components/ProductCard/ProductCard';
import { dogsProducts } from '../../data/dogsProducts';

export default function Dogs() {
	return (
		<section className="p-6">
			<h2 className="text-2xl font-semibold mb-4">Products for Dogs</h2>
			<ul>
				{dogsProducts.map((product) => (
					<li key={product.id}>
						<ProductCard product={product} />
					</li>
				))}
			</ul>
		</section>
	);
}
