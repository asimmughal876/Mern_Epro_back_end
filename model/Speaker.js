const mongoose = require('mongoose');

const speakerSchema = new mongoose.Schema({
  speaker_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    index: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  expertise: {
    type: String
  },
  contact_email: {
    type: String
  },
  photo_url: {
    type: String 
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Speaker', speakerSchema);
