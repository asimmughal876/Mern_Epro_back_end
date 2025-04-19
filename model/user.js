const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    index: true,
    unique: true
  },
  user_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  user_pass: {
    type: String,
    required: true
  },
  user_image: {
    type: String,
    default: null
  },
  role_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'role',
    default: null
  }
});

userSchema.pre('save', async function (next) {
  if (this.isModified('user_pass')) {
    this.user_pass = await bcrypt.hash(this.user_pass, 10);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
