import ProductCard from '../../components/ProductCard/ProductCard';
import { servicesProducts } from '../../data/servicesProducts';

export default function Services() {
	return (
		<section className="p-6">
			<h2 className="text-2xl font-semibold mb-4">Services</h2>
			<ul>
				{servicesProducts.map((product) => (
					<li key={product.id}>
						<ProductCard product={product} />
					</li>
				))}
			</ul>
		</section>
	);
}
