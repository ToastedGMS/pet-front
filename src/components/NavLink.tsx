interface NavLinkProps {
	label: string;
}

export default function NavLink({ label }: NavLinkProps) {
	return (
		<li className="hover:cursor-pointer hover:text-black transition-colors duration-300">
			{label}
		</li>
	);
}
