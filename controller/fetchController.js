const Company = require('../model/Company');
const Exhibitor = require('../model/Exhibitor');
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
      error: err.message
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
      error: err.message
    });
  }
};
const fetchExhi = async (req, res) => {
  try {
    const ExhiData = await Exhibitor.find().populate('user_id');

    res.status(200).json({
      message: 'Exhibitor fetched successfully',
      data: ExhiData
    });
  } catch (err) {
    console.error('Error Fetching Exhibitor:', err);
    res.status(500).json({
      message: 'Failed to fetch Exhibitor',
      error: err.message 
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
      error: err.message
    });
  }
};

const fetchbooth = async (req, res) => {
  try {
    const expos = await Expo.find({}, { booths: 1 }).populate('booths.assigned_to');

    const allBooths = expos.flatMap(expo => expo.booths);

    res.status(200).json({
      message: 'Booths fetched successfully',
      data: allBooths
    });
  } catch (err) {
    console.error('Error Fetching Booth:', err);
    res.status(500).json({
      message: 'Failed to fetch booths',
      error: err.message
    });
  }
};

module.exports = {fetchExpos,fetchUser,fetchExhi,fetchCompany,fetchbooth};
