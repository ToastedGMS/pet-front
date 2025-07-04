import { useContext } from 'react';
import CartCard from '../../components/CartCard/CartCard';
import { CartContext } from '../../context/CartContext';
import type { Product } from '../../types/Product';

export default function Cart() {
	const { cartItems, calculateTotal } = useContext(CartContext);

	const groupedItems = cartItems.reduce((acc, item) => {
		if (acc[item.id]) {
			acc[item.id].quantity += 1;
		} else {
			acc[item.id] = { ...item, quantity: 1 };
		}
		return acc;
	}, {} as Record<string, Product & { quantity: number }>);

	return (
		<>
			<h2>Cart</h2>
			{Object.values(groupedItems).map((item) => (
				<CartCard cartItem={item} key={item.id} />
			))}

			<p data-testid="total">{calculateTotal()}</p>
			<button data-testid="checkout-btn">Checkout</button>
		</>
	);
}
