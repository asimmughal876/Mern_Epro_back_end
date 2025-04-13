const mongoose = require('mongoose');

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
    user_email: {
        type: String,
        required: true
    },
    user_pass: {
        type: String,
        required: true
    },
    user_image: {
        type: String,
        required: true,
       default: null 
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'role',
        required: true
    },
});

module.exports = mongoose.model('user', userSchema);
