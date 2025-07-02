import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductContainer from './ProductContainer';

describe('Product Container', () => {
	const mockArray = [
		{
			id: '1',
			name: 'Chewy Bone Toy',
			description: 'Durable rubber bone toy for hours of chewing fun.',
			price: 12.99,
			imageUrl: 'https://placehold.co/200x200?text=Bone+Toy',
		},
		{
			id: '2',
			name: 'Premium Dog Food',
			description: 'Nutritious dry food for adult dogs, 2kg bag.',
			price: 24.99,
			imageUrl: 'https://placehold.co/200x200?text=Dog+Food',
		},
	];
	const mockLabel = 'Dogs';

	it('renders the passed label as page title', () => {
		render(
			<MemoryRouter>
				<ProductContainer products={mockArray} label={mockLabel} />
			</MemoryRouter>
		);
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
			`Products for ${mockLabel}`
		);
	});

	it('renders list of products matching the passed data', () => {
		render(
			<MemoryRouter>
				<ProductContainer products={mockArray} label={mockLabel} />
			</MemoryRouter>
		);
		expect(screen.getAllByTestId('product-card')).toHaveLength(
			mockArray.length
		);
	});

	it('renders each product name and price', () => {
		render(
			<MemoryRouter>
				<ProductContainer products={mockArray} label={mockLabel} />
			</MemoryRouter>
		);
		mockArray.forEach((p) => {
			expect(screen.getByText(p.name)).toBeInTheDocument();
			expect(
				screen.getByText(new RegExp(p.price.toFixed(2)))
			).toBeInTheDocument();
		});
	});

	it('render different header for Sales page', () => {
		render(
			<MemoryRouter>
				<ProductContainer products={mockArray} label="Sales" />
			</MemoryRouter>
		);

		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
			'Products on Sale'
		);
	});
	it('render different header for Services page', () => {
		render(
			<MemoryRouter>
				<ProductContainer products={mockArray} label="Services" />
			</MemoryRouter>
		);

		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
			`Services`
		);
	});
});
