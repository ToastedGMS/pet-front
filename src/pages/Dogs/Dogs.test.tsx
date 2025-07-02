import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dogs from './Dogs';
import { dogsProducts } from '../../data/dogsProducts';

describe('Dogs Page', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Dogs />
			</MemoryRouter>
		);
	});

	it('renders the Dogs page title', () => {
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
			'Products for Dogs'
		);
	});
	it('renders product cards matching the dogsProducts data', () => {
		expect(screen.getAllByTestId('product-card')).toHaveLength(
			dogsProducts.length
		);
	});
});
