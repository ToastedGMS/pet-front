import type { JSX } from 'react';
import { HiLogin, HiOutlineShoppingCart } from 'react-icons/hi';
import { Outlet, useNavigate } from 'react-router-dom';
import NavLink from '../components/NavLink/NavLink';

export default function Layout(): JSX.Element {
	const navigate = useNavigate();
	return (
		<>
			<header className=" w-full px-4 pt-4 bg-ocean shadow-md">
				<div className="flex items-center justify-between">
					<img
						onClick={() => navigate('/')}
						src="logo-transparent.png"
						alt="PetLove Logo"
						className="w-40 hover:cursor-pointer"
					/>
					<input
						className="border border-gray-300 rounded-2xl px-4 py-1 w-3/6"
						type="search"
						placeholder="Search..."
					/>
					<ul className="flex items-center gap-4" data-testid="icon-list">
						<li>
							<HiLogin
								data-testid="login-icon"
								className="text-3xl hover:cursor-pointer text-white hover:text-black transition-colors duration-300"
							/>
						</li>
						<li>
							<HiOutlineShoppingCart className="text-3xl hover:cursor-pointer text-white hover:text-black transition-colors duration-300" />
						</li>
					</ul>
				</div>
				<nav>
					<ul className="flex gap-4 text-xl font-bold w-full justify-between px-56 py-2 text-white">
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
