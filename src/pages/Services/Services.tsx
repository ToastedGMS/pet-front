import ProductContainer from '../../components/ProductContainer/ProductContainer';
import { servicesProducts } from '../../data/servicesProducts';

export default function Services() {
	return <ProductContainer products={servicesProducts} label="Services" />;
}
