'use strict';

const Router = require('express').Router;
const bodyParser = require('body-parser').json();
const debug = require('debug')('folder:folder-route');
const Folder = require('../model/folder.js');
const createError = require('http-errors');
const router = new Router();

router.get('/api/folder/:id', function(req, res, next) {
  debug('GET /api/folder/:id');

  Folder.findById(req.params.id)
    .populate('documents')
    .then(folder => {
      if (!folder) return next(createError(404));
      res.json(folder);
    })
    .catch( err => {
      console.error(err);
      next(createError(400));
    });
});

router.get('/api/folder', function(req, res, next) {
  debug('GET /api/folder');

  let pageNumber = Number(req.query.page);
  if(!pageNumber || pageNumber < 1) pageNumber = 1;
  pageNumber--;

  Folder.find({})
    .sort({title: 'asc'})
    .skip(pageNumber * 50)
    .limit(50)
    .then(folders => res.json(folders))
    .catch(next);
});

router.post('/api/folder', bodyParser, function(req, res, next) {
  debug('POST: /api/folder/');
  if (req.body.title === undefined || req.body.description === undefined) {
    next(createError(400));
    return;
  }

  new Folder(req.body).save()
    .then( folder => res.json(folder))
    .catch(next);
});

router.put('/api/folder/:id', bodyParser, function(req, res, next) {
  debug('PUT: /api/folder/:id');
  if (req.body.title === undefined || req.body.description === undefined) {
    next(createError(400));
    return;
  }
  
  Folder.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then( folder => res.json(folder))
    .catch( err => {
      if(err.name === 'ValidationError') return next(err);
      next(createError(404));
    });
  
});

router.delete('/api/folder/:id', function(req, res) {
  debug('DELETE: /api/folder/:id');
  console.log('delete id', req.params.id);

  Folder.findByIdAndRemove(req.params.id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch( err => next(createError(404, err.message)));
});

router.get('/api/:anything', function(req, res) {
  res.sendStatus(404);
});

module.exports = router;