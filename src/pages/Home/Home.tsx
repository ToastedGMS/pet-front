import type { JSX } from 'react';
import HomeCarrousel from '../../components/HomeCarrousel/HomeCarrousel';
import HomeSection from '../../components/HomeSection/HomeSection';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import { servicesProducts } from '../../data/servicesProducts';

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
			<section className="w-full flex justify-center text-center">
				<CardCarousel
					productArray={[
						servicesProducts[0],
						servicesProducts[2],
						servicesProducts[3],
					]}
				/>
			</section>
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
