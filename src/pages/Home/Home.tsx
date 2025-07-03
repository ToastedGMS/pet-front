import type { JSX } from 'react';
import HomeCarrousel from '../../components/HomeCarrousel/HomeCarrousel';
import HomeSection from '../../components/HomeSection/HomeSection';

export default function Home(): JSX.Element {
	return (
		<>
			<HomeCarrousel />
			<HomeSection
				title="Adote um Pet"
				textContent="Dê um lar para um animal que precisa."
				ctaBtnText="Veja pets disponíveis"
				ctaBtnLink="/adocao"
				imageSrc="https://placehold.co/600x400?text=Adote+um+Pet"
				imageAlt="Adote um pet banner"
				imagePosition="left"
				theme={1}
			/>
			<HomeSection
				title="Doe Ração"
				textContent="Ajude a alimentar animais em situação de vulnerabilidade."
				ctaBtnText="Veja como doar"
				ctaBtnLink="/doacao"
				imageSrc="https://placehold.co/600x400?text=Doe+Ração"
				imageAlt="Doe ração banner"
				imagePosition="right"
				theme={2}
			/>
		</>
	);
}
