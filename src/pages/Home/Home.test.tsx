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

	it('renders the image carousel correctly', () => {
		const carousel = screen.getByTestId('home-carrousel');
		expect(carousel).toBeInTheDocument();
	});

	it('renders the "Adote um Pet" section with correct content', () => {
		expect(screen.getByText('Adote um Pet')).toBeInTheDocument();
		expect(
			screen.getByText('Dê um lar para um animal que precisa.')
		).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: /Veja pets disponíveis/i })
		).toHaveAttribute('href', '/adocao');
	});

	it('renders the "Doe Ração" section with correct content', () => {
		expect(screen.getByText('Doe Ração')).toBeInTheDocument();
		expect(
			screen.getByText(
				'Ajude a alimentar animais em situação de vulnerabilidade.'
			)
		).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: /Veja como doar/i })
		).toHaveAttribute('href', '/doacao');
	});

	it('renders 3 product cards in the CardCarousel', () => {
		const productCards = screen.getAllByTestId('product-card');
		// First 3 are from CardCarousel
		expect(productCards.length).toBeGreaterThanOrEqual(3);
	});

	it('renders the "Best Sellers" product container with correct label and 5 cards', () => {
		expect(
			screen.getByRole('heading', { level: 2, name: 'Best Sellers' })
		).toHaveTextContent('Best Sellers');
		const allCards = screen.getAllByTestId('product-card');
		// 3 from CardCarousel + 5 from ProductContainer = 8
		expect(allCards).toHaveLength(8);
	});
});
