const Expo = require('../model/Expo');

const addBooth = async (req, res) => {
  try {
    const { expo_id } = req.params;
    const boothData = req.body;

    const expo = await Expo.findById(expo_id);
    if (!expo) {
      return res.status(404).json({
        message: 'Expo not found'
      });
    }

    expo.booths.push(boothData);
    const updatedExpo = await expo.save();

    res.status(201).json({
      message: 'Booth added to expo successfully',
      data: updatedExpo
    });
  } catch (err) {
    console.error('Error adding booth to expo:', err);
    res.status(500).json({
      message: 'Failed to add booth to expo',
      error: err.message
    });
  }
};

module.exports = { addBooth };
