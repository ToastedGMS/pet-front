import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './pages/Layout.tsx';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<StrictMode>
			<Routes>
				<Route path="/" element={<Layout />}></Route>
			</Routes>
		</StrictMode>
	</BrowserRouter>
);
