// @see: http://eslint.cn

module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended", // 引入相关插件
		"prettier" // 禁用 ESLint 中与 Prettier 冲突的规则 eslint-config-prettier
	],
	plugins: ["prettier"], // eslint-plugin-prettier
	rules: {
		"prettier/prettier": "error", // 开启规则
		"@typescript-eslint/no-unused-vars": "error" // 禁止定义未使用的变量
	}
};
