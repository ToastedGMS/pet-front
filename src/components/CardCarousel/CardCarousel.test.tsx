import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardCarousel from './CardCarousel';
import type { Product } from '../../types/Product';

const mockProducts: Product[] = [
	{
		id: '1',
		name: 'Dog Toy',
		description: 'A durable chew toy.',
		price: 10.99,
		imageUrl: 'https://placehold.co/200x200?text=Dog+Toy',
	},
	{
		id: '2',
		name: 'Dog Food',
		description: 'Nutritious food for dogs.',
		price: 25.0,
		imageUrl: 'https://placehold.co/200x200?text=Dog+Food',
	},
	{
		id: '3',
		name: 'Dog Bed',
		description: 'Comfortable bed for dogs.',
		price: 49.99,
		imageUrl: 'https://placehold.co/200x200?text=Dog+Bed',
	},
];

describe('CardCarousel', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<CardCarousel productArray={mockProducts} />
			</MemoryRouter>
		);
	});

	it('renders the card carousel correctly', () => {
		const carousel = screen.getByTestId('card-carrousel');
		expect(carousel).toBeInTheDocument();
		const cards = screen.getAllByTestId('product-card');
		expect(cards).toHaveLength(3);
		expect(carousel).toContainElement(cards[0]);
		expect(carousel).toContainElement(cards[1]);
		expect(carousel).toContainElement(cards[2]);
	});

	it('renders the navigation buttons', () => {
		const carousel = screen.getByTestId('card-carrousel');
		expect(carousel).toBeInTheDocument();
		const buttons = screen.getAllByTestId('nav-btn');
		expect(buttons).toHaveLength(2);
		expect(carousel).toContainElement(buttons[0]);
		expect(carousel).toContainElement(buttons[1]);
	});
});
