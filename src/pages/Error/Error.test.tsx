import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Error from './Error';

describe('Error Page', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Error />
			</MemoryRouter>
		);
	});

	it('displays the 404 heading', () => {
		expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument();
	});

	it('displays the error message', () => {
		expect(
			screen.getByText(/Oops! The page you're looking for isn't here./i)
		).toBeInTheDocument();
	});

	it('renders a "Go back Home" button', () => {
		expect(
			screen.getByRole('button', { name: /Go back Home/i })
		).toBeInTheDocument();
	});
});
