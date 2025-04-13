const mongoose = require('mongoose');

const expoScheduleSchema = new mongoose.Schema({
  schedule_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    index: true,
    unique: true
  },
  expo_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Expo',
    required: true
  },
  speaker_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Speaker' 
  },
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date,
    required: true
  },
  location: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Expo' 
  },  
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ExpoSchedule', expoScheduleSchema);
