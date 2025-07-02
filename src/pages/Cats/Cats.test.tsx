import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cats from './Cats';
import { catsProducts } from '../../data/catsProducts';

describe('Cats Page', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Cats />
			</MemoryRouter>
		);
	});

	it('renders the Cats page title', () => {
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
			'Products for Cats'
		);
	});
	it('renders product cards matching the catsProducts data', () => {
		expect(screen.getAllByTestId('product-card')).toHaveLength(
			catsProducts.length
		);
	});
});
