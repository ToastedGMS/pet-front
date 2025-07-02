import ProductContainer from '../../components/ProductContainer/ProductContainer';
import { salesProducts } from '../../data/salesProducts';

export default function Sales() {
	return <ProductContainer products={salesProducts} label="Sales" />;
}
