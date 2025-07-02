import ProductContainer from '../../components/ProductContainer/ProductContainer';
import { birdsProducts } from '../../data/birdsProducts';

export default function Birds() {
	return <ProductContainer products={birdsProducts} label="Birds" />;
}
