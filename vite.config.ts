import { defineConfig } from "vite";
import { resolve } from "path";

import react from "@vitejs/plugin-react";
import postCssPxToRem from "postcss-pxtorem";

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
		postcss: {
			plugins: [
				postCssPxToRem({
					unitPrecision: 5,
					rootValue: 37.5, // 1rem的大小
					propList: ["*", "!border*"], // 需要转换的属性，这里选择全部都进行转换
					mediaQuery: false, //是否允许媒体查询转换
					selectorBlackList: [/^html$/] //匹配html则不转换
				})
			]
		},
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/common.scss";`
			}
		}
	}
});
