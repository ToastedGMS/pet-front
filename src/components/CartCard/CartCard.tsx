import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';
import type { Product } from '../../types/Product';

interface CartCardProps {
	cartItem: Product;
}

export default function CartCard({ cartItem }: CartCardProps) {
	return (
		<div data-testid="product-card">
			<img src={cartItem.imageUrl} alt={cartItem.name} />
			<h3>{cartItem.name}</h3>
			<p>{cartItem.price}</p>
			<button data-testid="add-btn">
				<HiOutlinePlus />
			</button>
			<button data-testid="rmv-btn">
				<HiOutlineMinus />
			</button>
		</div>
	);
}
