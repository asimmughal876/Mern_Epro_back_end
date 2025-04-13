const Expo = require('../model/Expo');

// POST /api/expos - Create a new expo
const addExpo = async (req, res) => {
  try {
    const expoData = req.body;

    const newExpo = new Expo(expoData);
    const savedExpo = await newExpo.save();

    res.status(201).json({
      message: 'Expo created successfully',
      data: savedExpo
    });
  } catch (err) {
    console.error('Error creating expo:', err);
    res.status(500).json({
      message: 'Failed to create expo',
      error: err.message
    });
  }
};

module.exports = {addExpo};
