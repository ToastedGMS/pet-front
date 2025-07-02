import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout Component', () => {
	beforeEach(() => {
		render(<Layout />);
	});
	it('renders a header', () => {
		expect(screen.getByRole('banner')).toBeInTheDocument();
	});
	it('header contains logo', () => {
		expect(screen.getByRole('banner')).toContainElement(
			screen.getByRole('img')
		);
	});
	it('header contains a search bar', () => {
		expect(screen.getByRole('banner')).toContainElement(
			screen.getByRole('searchbox')
		);
	});
	it('header contains an icon list', () => {
		expect(screen.getByRole('banner')).toContainElement(
			screen.getByTestId('icon-list')
		);
	});
	it('header contains a navigation list', () => {
		expect(screen.getByRole('banner')).toContainElement(
			screen.getByRole('navigation')
		);
	});
	it('navigation list is not empty', () => {
		expect(screen.getByRole('navigation')).not.toBeEmptyDOMElement();
	});
});
