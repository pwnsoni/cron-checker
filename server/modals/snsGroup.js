const mongoose = require('mongoose');

// schema maps to a collection
const Schema = mongoose.Schema;

const snsGroupSchema = new Schema({
  cronName: {
    type: 'String',
    required: true,
    trim: true,
  },
  cron_id: {
    type: mongoose.ObjectId,
    required: true,
    trim: true,
    unique: true
  },
  recipients: {
    type: [String],
    required: true
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


module.exports = mongoose.model('SnsGroup', snsGroupSchema);