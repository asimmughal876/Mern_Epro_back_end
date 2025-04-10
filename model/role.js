const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  role_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    index: true,
    unique: true
  },
  role_name: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('user', roleSchema);
