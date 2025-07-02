import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from './ProductCard';

describe('ProductCard Component', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<ProductCard
					product={{
						id: '1',
						name: 'Dog Shampoo',
						imageUrl: 'https://placehold.co/200x200?text=Dog+Shampoo',
						description: 'A gentle shampoo for dogs',
						price: 19.99,
					}}
				/>
			</MemoryRouter>
		);
	});
	it('renders product image', () => {
		const image = screen.getByRole('img');
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute(
			'src',
			'https://placehold.co/200x200?text=Dog+Shampoo'
		);
	});
	it('renders product name', () => {
		const name = screen.getByText('Dog Shampoo');
		expect(name).toBeInTheDocument();
	});
	it('renders product description', () => {
		const description = screen.getByText('A gentle shampoo for dogs');
		expect(description).toBeInTheDocument();
	});
	it('renders product price', () => {
		const price = screen.getByText('$19.99');
		expect(price).toBeInTheDocument();
	});
	it('has correct alt text for image', () => {
		const image = screen.getByRole('img');
		expect(image).toHaveAttribute('alt', 'Dog Shampoo');
	});
	it('has correct price format', () => {
		const price = screen.getByText('$19.99');
		expect(price).toBeInTheDocument();
		expect(price).toHaveTextContent(/^\$\d+(\.\d{2})?$/);
	});
	it('renders button for adding to cart', () => {
		const button = screen.getByRole('button', { name: /add to cart/i });
		expect(button).toBeInTheDocument();
	});
});
