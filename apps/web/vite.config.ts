import {defineConfig} from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import {checker} from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		svgr(),
		checker({
			typescript: true,
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx,js,jsx}"',
			},
		}),
	],
	resolve: {
		alias: {
			"@fonts": path.resolve(__dirname, "./src/shared/assets/fonts"),
		},
	},
});
