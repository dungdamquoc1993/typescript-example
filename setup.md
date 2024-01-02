https://github.com/leoroese/blog-tube/blob/main/packages/node-ts-backend/.gitignore

optional install vscode icons // for better icons file 
We can use yarn add -D instead of npm install // npm install yarn -g

npm init -y
npm install typescript ts-node @types/node
npx tsc —init // create tsconfig.json

npm install -D eslint // Install eslint extension in vscode before run this
npx eslint --init
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard-with-typescript
✔ What format do you want your config file to be in? · JavaScript
nano .eslintignore // and type
node_modules
dist
coverage

npm install prettier // install prettier extension in vscode before run this 
nano .prettierrc // and type

Eslint config
npm install eslint-config-prettier eslint-plugin-prettier
npm install eslint-import-resolver-typescript tsconfig-paths
create eslintrc.json or eslintrc.js

thêm mấy dòng sau vào package.json
"scripts": {
    "start:dev": "ts-node -r tsconfig-paths/register ./src/index.ts",
    "start:prod": "node -r ts-node/register/transpile-only -r tsconfig-paths/register ./dist/src/index.js",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
},

// Install nodemon
npm install nodemon 
nano nodemon.json

// setup dotenv-safe
npm install dotenv-safe

// setup jest
npm install jest ts-jest @types/jest
npx ts-jest config:init