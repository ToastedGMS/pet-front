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
		<div className="flex flex-col items-center w-full px-4 py-6">
			<h2 className="text-2xl font-bold mb-6">Cart</h2>
			{cartItems && cartItems.length > 0 ? (
				<div className="flex flex-col w-full max-w-4xl gap-6 mb-6">
					{Object.values(groupedItems).map((item) => (
						<CartCard cartItem={item} key={item.id} />
					))}
				</div>
			) : (
				<p>Its looking really empty here... </p>
			)}

			<div className="w-full max-w-4xl flex justify-between items-center px-4">
				<p data-testid="total" className="text-xl font-semibold text-ocean">
					Total: R${calculateTotal().toFixed(2)}
				</p>
				{cartItems && cartItems.length > 0 ? (
					<button
						data-testid="checkout-btn"
						className="bg-ocean text-white font-semibold px-6 py-2 rounded-lg hover:bg-darkOcean transition-colors duration-300"
					>
						Checkout
					</button>
				) : (
					<button
						disabled
						data-testid="checkout-btn"
						className="bg-ocean opacity-50 text-white font-semibold px-6 py-2 rounded-lg"
					>
						Checkout
					</button>
				)}
			</div>
		</div>
	);
}
