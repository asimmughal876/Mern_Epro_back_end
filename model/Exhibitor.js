const mongoose = require('mongoose');

const ExhibitorSchema = new mongoose.Schema({
    exhibitor_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        index: true,
        unique: true
    },
    exhibitor_image: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
});

module.exports = mongoose.model('Exhibitor', ExhibitorSchema);
