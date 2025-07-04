import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';
import type { Product } from '../../types/Product';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

interface CartCardProps {
	cartItem: Product;
}

export default function CartCard({ cartItem }: CartCardProps) {
	const { addItem, removeItem } = useContext(CartContext);
	return (
		<div data-testid="product-card">
			<img src={cartItem.imageUrl} alt={cartItem.name} />
			<h3>{cartItem.name}</h3>
			<p>{cartItem.price}</p>
			<button onClick={() => removeItem(cartItem)} data-testid="rmv-btn">
				<HiOutlineMinus />
			</button>
			<button onClick={() => addItem(cartItem)} data-testid="add-btn">
				<HiOutlinePlus />
			</button>
		</div>
	);
}
