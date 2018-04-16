![cf](https://i.imgur.com/7v5ASc8.png) Lab 14: Two Resource API
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration 
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `lint` script for running eslint
  * create a `start` script for running your server
  * create a `test` script for running your tests
* **server.js** - runs your application
* **model/** - contains mongoose schemas
* **route/** - contains your routes
* **lib/** - contains custom middleware and helpers
* **\_\_test\_\_/** - contains route tests

## Feature Tasks
##### Minimum Requirements
* continue working on the express and mongoDB API that you started yesterday
* include an additional resource that contains a "relationship" to the single resource that has already been created - if you used a "list", you **may not** use "notes"
* create **GET**, **POST**, **PUT**, and **DELETE** routes for your newly added resource
* use `populate` in the logic of your **GET** route to `/api/new-resource-name/:id` in order to populate your related resource with actual data (ex: `List.findById(req.params.id).populate('notes')`)