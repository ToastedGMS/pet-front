import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './pages/Layout.tsx';
import Dogs from './pages/Dogs/Dogs.tsx';
import Cats from './pages/Cats/Cats.tsx';
import Birds from './pages/Birds/Birds.tsx';
import Sales from './pages/Sales/Sales.tsx';
import Services from './pages/Services/Services.tsx';
import Home from './pages/Home/Home.tsx';
import { CartProvider } from './context/CartContext.tsx';

createRoot(document.getElementById('root')!).render(
	<CartProvider>
		<BrowserRouter>
			<StrictMode>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/dogs" element={<Dogs />} />
						<Route path="/cats" element={<Cats />} />
						<Route path="/birds" element={<Birds />} />
						<Route path="/sales" element={<Sales />} />
						<Route path="/services" element={<Services />} />
					</Route>
				</Routes>
			</StrictMode>
		</BrowserRouter>
	</CartProvider>
);
