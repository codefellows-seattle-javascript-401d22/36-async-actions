'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const debug = require('debug')('folder:server');
const folderRouter = require('./route/folder-route.js');
const documentRouter = require('./route/document-route.js');
const errors = require('./lib/error-middleware.js');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/folderdb';

mongoose.connect(MONGODB_URI);

app.use(cors());
app.use(morgan('dev'));

app.use(folderRouter);
app.use(documentRouter);
app.use(errors);

const server = module.exports = app.listen(PORT, () => {
  debug(`listening on ${PORT}`);
});

server.isRunning = true;