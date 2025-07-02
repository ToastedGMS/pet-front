import ProductContainer from '../../components/ProductContainer/ProductContainer';
import { dogsProducts } from '../../data/dogsProducts';

export default function Dogs() {
	return <ProductContainer products={dogsProducts} label="Dogs" />;
}
