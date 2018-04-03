'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Document = require('./documents.js');
const debug = require('debug')('folder:folder');
const createError = require('http-errors');

const folderSchema = Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  documents: [{type: Schema.Types.ObjectId, ref:'document'}],
});

const Folder = module.exports = mongoose.model('folder', folderSchema);

Folder.findByIdAndAddDocument = function(id, document) {
  debug('findByIdAndAddDocument');

  return Folder.findById(id)
    .then(folder => {
      document.folderID = folder._id;
      this.tempFolder = folder;
      return new Document(document).save();
    })
    .then( document => {
      this.tempFolder.documents.push(document._id);
      this.tempDocument = document;
      return this.tempFolder.save();
    })
    .then( () => {
      return this.tempDocument;
    })
    .catch( err => Promise.reject(createError(404, err.message)));
};

