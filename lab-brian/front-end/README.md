# Code Fellows: Code 401d22: Full-Stack JavaScript

## Lab 36: Async Actions

Intro to React Redux with async actions and API requests, to do this we created a thunk middleware.

## Tech/frameworks/packages

- node 
- Webpack
- npm
- node packages
  - Production
    - babel-core
    - babel-loader
    - babel-plugin-transform-class-properties
    - babel-plugin-transform-object-rest-spread
    - babel-preset-env
    - babel-preset-react
    - clean-webpack-plugin
    - css-loader
    - dotenv
    - extract-text-webpack-plugin
    - file-loader
    - html-webpack-plugin
    - node-sass
    - react
    - react-dom
    - react-redux
    - react-router-dom
    - redux
    - redux-logger
    - sass-loader
    - style-loader
    - superagent
    - uglifyjs-webpack-plugin
    - url-loader
    - webpack
    - webpack-dav-server
  - Dev
    - eslint
    - eslint-plugin-react


## How to use?
Clone this repo, cd into `lab-brian`, run `npm install`. From here open up 2 more tabs in your terminal, start Mongo by running `mongod`, CD into back-end and run `npm run start` and lastly CD into front-end and run ` npm run watch`. You will then be able to create and delete menus and entrees.

## Contribute

You can totally contribute to this project if you want. Fork the repo, make some cool changes and then submit a PR.

## Credits

Initial codebase created by Code Fellows.
Read Me template created by Robert Reed https://github.com/RobertMcReed 

## License

MIT. Use it up!

question menu delete in entree.js the most efficient way of handling that

im resuing cases over again can i just route multiple things to same case, but it only works for one model ex. entree getting dropped from a menu i just delete the entrr but i put route the menu