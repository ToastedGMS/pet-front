import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';
import type { Product } from '../../types/Product';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

interface CartCardProps {
	cartItem: Product & { quantity: number };
}

export default function CartCard({ cartItem }: CartCardProps) {
	const { addItem, removeItem } = useContext(CartContext);
	return (
		<div
			data-testid="product-card"
			className="flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full bg-white rounded-lg shadow-md p-4"
		>
			<img
				className="w-24 h-24 object-cover rounded-lg"
				src={cartItem.imageUrl}
				alt={cartItem.name}
			/>
			<div className="flex flex-col justify-between w-full">
				<div className="flex justify-between items-center mb-2">
					<h3 className="text-lg font-bold">{cartItem.name}</h3>
					<p className="text-md font-semibold text-ocean">
						R${cartItem.price.toFixed(2)}
					</p>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<button
							onClick={() => removeItem(cartItem)}
							data-testid="rmv-btn"
							className="bg-red-100 text-red-500 p-2 rounded-full hover:bg-red-200 transition"
						>
							<HiOutlineMinus />
						</button>
						<span
							data-testid="quantity"
							className="text-md font-medium min-w-[2ch] text-center"
						>
							{cartItem.quantity}
						</span>
						<button
							onClick={() => addItem(cartItem)}
							data-testid="add-btn"
							className="bg-green-100 text-green-600 p-2 rounded-full hover:bg-green-200 transition"
						>
							<HiOutlinePlus />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
