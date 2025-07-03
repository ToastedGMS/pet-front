import type { Product } from '../types/Product';

export const servicesProducts: Product[] = [
	{
		id: '17',
		name: 'Grooming',
		description:
			'Professional grooming service for birds, cats or dogs, including bathing and nail trimming.',
		price: 19.99,
		imageUrl: 'https://placehold.co/200x200?text=Grooming',
	},
	{
		id: '18',
		name: 'Adoption Consultation',
		description:
			'Personalized consultation to help you choose the right pet for your home.',
		price: 49.99,
		imageUrl: 'https://placehold.co/200x200?text=Adoption+Consultation',
	},
	{
		id: '19',
		name: 'Pet Sitting',
		description: 'Professional pet sitting services for your furry friends.',
		price: 24.99,
		imageUrl: 'https://placehold.co/200x200?text=Pet+Sitting',
	},
	{
		id: '20',
		name: 'Veterinary Checkup',
		description:
			'Comprehensive health checkup for your pets, including vaccinations and wellness exams.',
		price: 79.99,
		imageUrl: 'https://placehold.co/200x200?text=Veterinary+Checkup',
	},
];
