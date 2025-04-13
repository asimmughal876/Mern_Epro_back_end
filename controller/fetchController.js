const Expo = require('../model/Expo');

const fetchExpos = async (req, res) => {
  try {

    const expoData = await Expo.find();

    res.status(201).json({
      message: 'Expo Fetch successfully',
      data: expoData
    });
  } catch (err) {
    console.error('Error Fetching expo:', err);
    res.status(500).json({
      message: 'Failed to create expo',
      error: err.expoData
    });
  }
};

module.exports = {fetchExpos};
