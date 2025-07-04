import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from './Cart';

describe('Cart Component', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Cart />
			</MemoryRouter>
		);
	});
	it('renders the Cart heading', () => {
		const heading = screen.getByRole('heading', { level: 2 });
		expect(heading).toBeInTheDocument();
	});
});
