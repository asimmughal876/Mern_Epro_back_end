const Company = require('../model/Company');
const Expo = require('../model/Expo');
const user = require('../model/user');

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
      message: 'Failed to Fetch expo',
      error: err.expoData
    });
  }
};
const fetchUser = async (req, res) => {
  try {

    const userData = await user.find();

    res.status(201).json({
      message: 'User Fetch successfully',
      data: userData
    });
  } catch (err) {
    console.error('Error Fetching user:', err);
    res.status(500).json({
      message: 'Failed to Fetch user',
      error: err.userData
    });
  }
};
const fetchExhi = async (req, res) => {
  try {

    const ExhiData = await user.find();

    res.status(201).json({
      message: 'Exhibitor Fetch successfully',
      data: ExhiData
    });
  } catch (err) {
    console.error('Error Fetching Exhibitor:', err);
    res.status(500).json({
      message: 'Failed to Fetch Exhibitor',
      error: err.ExhiData
    });
  }
};
const fetchCompany = async (req, res) => {
  try {

    const comData = await Company.find();

    res.status(201).json({
      message: 'Company Fetch successfully',
      data: comData
    });
  } catch (err) {
    console.error('Error Fetching Company:', err);
    res.status(500).json({
      message: 'Failed to Fetch Company',
      error: err.comData
    });
  }
};

module.exports = {fetchExpos,fetchUser,fetchExhi,fetchCompany};
