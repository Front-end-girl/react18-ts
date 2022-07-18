import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
	plugins: [react()],
	server: {
		port: 4001,
		open: true,
		cors: true
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src")
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/common.scss";`
			}
		}
	}
});
