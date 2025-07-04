import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CartCard from './CartCard';

describe('Cart Card Component', () => {
	beforeEach(() => {
		const mockCartItem = {
			id: '13',
			name: 'Premium Cat Food',
			description:
				'Nutritious dry food for adult cats. Rich in protein and vitamins.',
			price: 29.99,
			imageUrl: 'https://placehold.co/200x200?text=Cat+Food',
			quantity: 3,
		};

		render(
			<MemoryRouter>
				<CartCard cartItem={mockCartItem} />
			</MemoryRouter>
		);
	});
	it('renders a card containing the product image', () => {
		const image = screen.getByRole('img');
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute(
			'src',
			'https://placehold.co/200x200?text=Cat+Food'
		);
		expect(image).toHaveAttribute('alt', 'Premium Cat Food');
	});
	it('renders the product name', () => {
		const productCard = screen.getByTestId('product-card');
		const productName = screen.getByRole('heading', { level: 3 });
		expect(productCard).toContainElement(productName);
		expect(productName.innerHTML).toBe('Premium Cat Food');
	});
	it('renders the product price', () => {
		const productCard = screen.getByTestId('product-card');
		const price = screen.getByRole('paragraph');
		expect(productCard).toContainElement(price);
		expect(price.innerHTML).toBe('29.99');
	});
	it('renders buttons for adding and removing item quantity', () => {
		const productCard = screen.getByTestId('product-card');
		const addBtn = screen.getByTestId('add-btn');
		const rmvBtn = screen.getByTestId('rmv-btn');
		expect(productCard).toContainElement(addBtn);
		expect(productCard).toContainElement(rmvBtn);
	});
	it('displays the correct quantity', () => {
		const quantity = screen.getByTestId('quantity');
		expect(quantity).toBeInTheDocument();
		expect(quantity.textContent).toBe('3');
	});
});
