const mongoose = require('mongoose');

// schema maps to a collection
const Schema = mongoose.Schema;

const lastHitsSchema = new Schema({
  cronName: {
    type: 'String',
    required: true,
    trim: true,
  },
  cron_id: {
    type: mongoose.ObjectId,
    required: true,
    trim: true
  },
  lastHits: {
    type: [Date]
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


module.exports = mongoose.model('LastHits', lastHitsSchema);