react-router-config 已不支持react-router-dom6
安装eslint、prettier、ts
cnpm i eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser -D

husky 、lint-staged

npm i husky -D
npm set-script prepare "husky install"
npm run prepare
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit

设置可视化操作 lint-staged

npm i lint-staged -D

1. 新建 lint-staged.config.js
```
module.exports = {
	"*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"]
};

```
2. 
```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "yarn && yarn build"
    }
  },
  "lint-staged": {
    "src/**/*.js": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ],
    "src/**/*.vue": [
      "prettier --write",
      "eslint --fix",
      "git add"
    ]
  }
```
1. react-transition-group 动画 配合router
2. 动画插件 https://github.com/qiqiboy/react-animated-router
3. 模仿：https://github.com/uglyspoon/h5-cloud-music-ts