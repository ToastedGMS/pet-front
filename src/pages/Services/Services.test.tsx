import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Services from './Services';
import { servicesProducts } from '../../data/servicesProducts';

describe('Services Page', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Services />
			</MemoryRouter>
		);
	});

	it('renders the Services page title', () => {
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
			'Services'
		);
	});
	it('renders product cards matching the servicesProducts data', () => {
		expect(screen.getAllByTestId('product-card')).toHaveLength(
			servicesProducts.length
		);
	});
});
