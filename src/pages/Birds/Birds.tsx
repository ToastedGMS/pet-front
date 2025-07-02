import ProductCard from '../../components/ProductCard/ProductCard';
import { birdsProducts } from '../../data/birdsProducts';

export default function Birds() {
	return (
		<section className="p-6">
			<h2 className="text-2xl font-semibold mb-4">Products for Birds</h2>
			<ul>
				{birdsProducts.map((product) => (
					<li key={product.id}>
						<ProductCard product={product} />
					</li>
				))}
			</ul>
		</section>
	);
}
