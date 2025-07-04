import { screen, render } from '@testing-library/react';
import ImageCarrousel from './ImageCarrousel';
import { MemoryRouter } from 'react-router-dom';

describe('ImageCarrousel', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<ImageCarrousel />
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
	it('renders the navigation buttons', () => {
		const carousel = screen.getByTestId('home-carrousel');
		expect(carousel).toBeInTheDocument();
		const buttons = screen.getAllByRole('button');
		expect(buttons).toHaveLength(2);
		expect(carousel).toContainElement(buttons[0]);
		expect(carousel).toContainElement(buttons[1]);
	});
});
