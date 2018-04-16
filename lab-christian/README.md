# ![cf](https://i.imgur.com/7v5ASc8.png)  Lab 36: Async Actions

## Configuration
* **README.md**
* **.gitignore**
* **.eslintrc**
* **.eslintignore**
* **package.json**
  * a `build` script has been configured for building the app with webpack
  * a `watch` script has been configured for watching the app with webpack-dev-server
* **webpack.config.js**
* **.babelrc**
* **src/** - contains frontend code
* **src/index.html**
* **src/main.js** - contains entire app
* **src/components** - contains app components (see list below for all components)
* **src/actions**
* **src/reducers**
* **src/lib**
* **src/style**

## Installation
* Clone down this repository and `cd` to navigate to the directory
* Run `npm i` to install all dependencies related to the app
* Run `npm run start` to start the server
* Run `npm run watch` to serve up a localhost instance with webpack
* Go to `localhost:8080` to see the local website

* This app was made with `React` and `Redux`.

## Front end dependencies: 
"babel-core": "^6.26.0",
"babel-loader": "^7.1.4",
"babel-plugin-transform-object-rest-spread": "^6.26.0",
"babel-preset-env": "^1.6.1",
"babel-preset-react": "^6.24.1",
"clean-webpack-plugin": "^0.1.19",
"css-loader": "^0.28.11",
"dotenv": "^5.0.1",
"extract-text-webpack-plugin": "^3.0.2",
"file-loader": "^1.1.11",
"html-webpack-plugin": "^3.1.0",
"node-sass": "^4.8.3",
"react": "^16.3.0",
"react-dom": "^16.3.0",
"react-redux": "^5.0.7",
"react-router-dom": "^4.2.2",
"redux": "^3.7.2",
"sass-loader": "^6.0.7",
"superagent": "^3.8.2",
"uglifyjs-webpack-plugin": "^1.2.4",
"url-loader": "^1.0.1",
"webpack": "^3.11.0",
"webpack-dev-server": "^2.11.2"

## Back end dependencies: 
"bluebird": "^3.5.1",
"body-parser": "^1.18.2",
"cors": "^2.8.4",
"debug": "^3.1.0",
"express": "^4.16.2",
"http-errors": "^1.6.2",
"mongoose": "^5.0.7",
"morgan": "^1.9.0"


