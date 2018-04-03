'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentSchema = ({
  title: {type: String, required: true},
  description: {type: String, required: true},
  folderID: {type: Schema.Types.ObjectId, required: true},
});

module.exports = mongoose.model('document', documentSchema);