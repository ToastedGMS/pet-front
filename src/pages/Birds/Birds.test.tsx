import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Birds from './Birds';
import { birdsProducts } from '../../data/birdsProducts';

describe('birds Page', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Birds />
			</MemoryRouter>
		);
	});

	it('renders the Birds page title', () => {
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
			'Products for Birds'
		);
	});
	it('renders product cards matching the birdsProducts data', () => {
		expect(screen.getAllByTestId('product-card')).toHaveLength(
			birdsProducts.length
		);
	});
});
