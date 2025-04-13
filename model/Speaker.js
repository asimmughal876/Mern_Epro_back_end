const mongoose = require('mongoose');

const speakerSchema = new mongoose.Schema({
  speaker_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    index: true,
    unique: true
  },
  speaker_name: {
    type: String,
    required: true
  },
  speaker_bio: {
    type: String
  },
  speaker__image: {
    type: String, 
    default: null 
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Speaker', speakerSchema);
