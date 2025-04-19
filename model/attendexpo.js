const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const attendexpoSchema = new mongoose.Schema({
    attend_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        index: true,
        unique: true
    },
    session_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ExpoSchedule',
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    expo_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expo',
    }
});

attendexpoSchema.pre('save', async function (next) {
    if (this.isModified('user_pass')) {
        this.user_pass = await bcrypt.hash(this.user_pass, 10);
    }
    next();
});

module.exports = mongoose.model('User', userSchema);
