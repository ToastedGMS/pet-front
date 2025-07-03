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
	it('renders an image inside the component', () => {
		const image = screen.getByRole('img');
		expect(image).toBeInTheDocument();
	});
});
