'use strict';

const Router = require('express').Router;
const bodyParser = require('body-parser').json();
const debug = require('debug')('folder:document-route');
const createError = require('http-errors');
const Folder = require('../model/folder.js');
const Document = require('../model/documents.js');

const documentRouter = module.exports = new Router();

documentRouter.post('/api/folder/:id/document', bodyParser, function(req, res, next) {
  debug('POST: /api/folder/:id/document');
  if (!req.params.id) next(createError(400));

  Folder.findByIdAndAddDocument(req.params.id, req.body)
    .then( document => {
      if (!document) return createError(404);
      return res.json(document);
    })
    .catch(next);
});

documentRouter.get('/api/document/:documentId', function(req, res, next) {
  debug('GET: /api/document/:documentId');
  if (!req.params.documentId) next(createError(400));

  Document.findById(req.params.documentId)
    .populate('documents')
    .then( document => {
      if (!document) return next(createError(404));
      return res.json(document);
    })
    .catch(err => {
      createError(404, err.message);
      next(err);
    });
});

documentRouter.put('/api/document/:documentId', function(req, res, next) {
  debug('PUT: /api/document/:documentId');
  if (!req.params.documentId) next(createError(400));
  console.log('req params', req.params);

  Document.findByIdAndUpdate(req.params.documentId, req.body, {new: true})
    .then( document => {
      if (!document) return next(createError(404));
      return res.json(document);
    })
    .catch( err => {
      next(createError(404, err.message));
    });
});

documentRouter.delete('/api/document/:documentId', function(req, res, next) {
  debug('DELETE: /api/document/:documentId');
  if (!req.params.documentId) next(createError(400));

  Document.findByIdAndRemove(req.body.documentId)
    .then( () => res.sendStatus(204))
    .catch( err => next(createError(404, err.message)));
});