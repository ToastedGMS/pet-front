import { screen, render } from '@testing-library/react';
import HomeCarrousel from './HomeCarrousel';
import { MemoryRouter } from 'react-router-dom';

describe('HomeCarrousel', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<HomeCarrousel />
			</MemoryRouter>
		);
	});
	it('renders the image carrousel correctly', () => {
		const carousel = screen.getByTestId('home-carrousel');
		expect(carousel).toBeInTheDocument();
		const images = screen.getAllByRole('img');
		expect(images).toHaveLength(3);
		expect(carousel).toContainElement(images[0]);
		expect(carousel).toContainElement(images[1]);
		expect(carousel).toContainElement(images[2]);
	});
});
