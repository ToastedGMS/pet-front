import ProductContainer from '../../components/ProductContainer/ProductContainer';
import { catsProducts } from '../../data/catsProducts';

export default function Cats() {
	return <ProductContainer products={catsProducts} label="Cats" />;
}
