interface HomeSectionProps {
	title: string;
	textContent: string;
	ctaBtnText: string;
	ctaBtnLink: string;
	imageSrc: string | null;
	imageAlt: string | null;
	imagePosition: 'left' | 'right' | null;
	theme: 1 | 2;
}

export default function HomeSection({
	title,
	textContent,
	ctaBtnText,
	ctaBtnLink,
	imageSrc,
	imageAlt,
	imagePosition,
	theme,
}: HomeSectionProps) {
	const isImageLeft = imagePosition === 'left';

	const sectionBgClass = theme === 1 ? 'bg-white' : 'bg-slate-800';
	const textColorClass = theme === 1 ? 'text-black' : 'text-white';

	const btnBgClass = theme === 1 ? 'bg-ocean' : 'bg-white';
	const btnTextClass = theme === 1 ? 'text-white' : 'text-ocean';

	return (
		<section
			className={`flex flex-col md:flex-row items-center gap-8 p-6 my-8 mx-auto w-4/5 rounded-lg shadow-xl ${sectionBgClass}`}
		>
			{imageSrc && imageAlt && (
				<img
					src={imageSrc}
					alt={imageAlt}
					className={`w-full md:w-1/2 rounded-lg shadow-md ${
						isImageLeft ? 'order-1' : 'order-2'
					}`}
				/>
			)}
			<div
				className={`w-full md:w-1/2 rounded-lg p-6  ${
					isImageLeft ? 'order-2' : 'order-1'
				} ${textColorClass}`}
			>
				<h2 className="text-3xl font-bold mb-4">{title}</h2>
				<p className="mb-6">{textContent}</p>
				<a
					href={ctaBtnLink}
					className={`inline-block px-6 py-2 rounded ${btnBgClass} ${btnTextClass} transition-colors duration-300`}
				>
					{ctaBtnText}
				</a>
			</div>
		</section>
	);
}
