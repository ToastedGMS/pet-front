import type { JSX } from 'react';
import { HiLogin, HiOutlineShoppingBag } from 'react-icons/hi';
import { Outlet } from 'react-router-dom';
import NavLink from '../components/NavLink';

export default function Layout(): JSX.Element {
	return (
		<>
			<header className=" w-full mt-4 px-4 bg-ocean">
				<div className="flex items-center justify-between">
					<img
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
							<HiOutlineShoppingBag className="text-3xl hover:cursor-pointer text-white hover:text-black transition-colors duration-300" />
						</li>
					</ul>
				</div>
				<nav>
					<ul className="flex gap-4 text-2xl font-bold w-full justify-between px-56 py-2 text-white">
						<NavLink label="Dogs" />
						<NavLink label="Cats" />
						<NavLink label="Birds" />
						<NavLink label="Sales" />
						<NavLink label="Services" />
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	);
}
