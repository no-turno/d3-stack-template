import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

export default defineConfig({
	plugins: [
		react({
			devTarget: "es2022",
			jsxImportSource: "react",
		}),
		TanStackRouterVite({
			routesDirectory: "./src/client/routes",
			generatedRouteTree: "./src/client/routeTree.gen.ts",
			routeFilePrefix: "+",
			routeFileIgnorePrefix: "-",
			experimental: {
				enableCodeSplitting: true,
			},
			routeFileIgnorePattern: ".((css|const).ts)",
			quoteStyle: "single",
		}),
	],
	server: {
		port: 3000,
	},
	appType: "spa",
  build: {
    outDir: "dist/client"
  }
});
