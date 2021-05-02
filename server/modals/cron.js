const mongoose = require('mongoose');

// schema maps to a collection
const Schema = mongoose.Schema;

const cronSchema = new Schema({
  name: {
    type: 'String',
    required: true,
    trim: true,
  },
  creater: {
    type: 'String',
    required: true,
    trim: true
  },
  cronStatement: {
    type: 'String',
    required: true,
    trim: true
  },
  description: {
    type: 'String',
    required: true,
    trim: true
  },
  snsGroup: {
    type: mongoose.ObjectId,
  },
  lastHits: {
    type: mongoose.ObjectId,
  },
  cloudWatchEventUUID: {
    type: 'String',
  },
  createdAt:{
    type: 'Date',
    required: true
  }, 
  updatedAt:{
    type: 'Date',
    required: true
  }
});


module.exports = mongoose.model('Cron', cronSchema);