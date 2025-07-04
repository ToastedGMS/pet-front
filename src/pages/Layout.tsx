import type { JSX } from 'react';
import { HiLogin, HiOutlineShoppingCart } from 'react-icons/hi';
import { Outlet, useNavigate } from 'react-router-dom';
import NavLink from '../components/NavLink/NavLink';

export default function Layout(): JSX.Element {
	const navigate = useNavigate();
	return (
		<>
			<header className="w-full px-4 pt-4 bg-ocean shadow-md">
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<img
						onClick={() => navigate('/')}
						src="logo-transparent.png"
						alt="PetLove Logo"
						className="w-40 hover:cursor-pointer mx-auto md:mx-0"
					/>

					<input
						className="border border-gray-300 rounded-2xl px-4 py-1 w-full md:w-1/2"
						type="search"
						placeholder="Search..."
					/>

					<ul
						className="flex justify-center md:justify-end items-center gap-4"
						data-testid="icon-list"
					>
						<li>
							<HiLogin
								data-testid="login-icon"
								className="text-3xl text-white hover:text-black transition-colors duration-300 hover:cursor-pointer"
							/>
						</li>
						<li>
							<HiOutlineShoppingCart
								onClick={() => navigate('/cart')}
								className="text-3xl text-white hover:text-black transition-colors duration-300 hover:cursor-pointer"
							/>
						</li>
					</ul>
				</div>

				<nav className="mt-4">
					<ul className="flex flex-wrap justify-center md:justify-between gap-4 text-lg font-bold text-white px-2 md:px-12 py-2">
						<NavLink label="Dogs" to="/dogs" />
						<NavLink label="Cats" to="/cats" />
						<NavLink label="Birds" to="/birds" />
						<NavLink label="Sales" to="/sales" />
						<NavLink label="Services" to="/services" />
					</ul>
				</nav>
			</header>

			<Outlet />

			<footer>
				<div className="w-full bg-ocean text-white text-center py-4">
					<p className="text-sm">
						&copy; {new Date().getFullYear()} PetLove. All rights reserved.
					</p>
				</div>
			</footer>
		</>
	);
}
