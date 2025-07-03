import { screen, render } from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);
	});

	it('renders the image carrousel correctly', () => {
		const carousel = screen.getByTestId('home-carrousel');
		expect(carousel).toBeInTheDocument();
	});
});
