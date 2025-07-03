import type { JSX } from 'react';
import HomeCarrousel from '../../components/HomeCarrousel/HomeCarrousel';

export default function Home(): JSX.Element {
	return (
		<>
			<h2 className="text-2xl font-semibold mb-4 h-full">Home</h2>
			<HomeCarrousel />
		</>
	);
}
