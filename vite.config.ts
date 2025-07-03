import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: '0.0.0.0',
	},
	test: { environment: 'jsdom', globals: true, setupFiles: './tests/setup.js' },
} as UserConfig);
