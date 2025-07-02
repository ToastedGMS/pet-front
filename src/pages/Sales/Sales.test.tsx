import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sales from './Sales';
import { salesProducts } from '../../data/salesProducts';

describe('Sales Page', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Sales />
			</MemoryRouter>
		);
	});

	it('renders the Sales page title', () => {
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
			'Products on Sale'
		);
	});
	it('renders product cards matching the salesProducts data', () => {
		expect(screen.getAllByTestId('product-card')).toHaveLength(
			salesProducts.length
		);
	});
});
