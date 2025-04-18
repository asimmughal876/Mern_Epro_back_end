const Company = require('../model/Company');
const Exhibitor = require('../model/Exhibitor');
const Expo = require('../model/Expo');
const user = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const addExpo = async (req, res) => {
  try {
    const expoData = req.body;

    if (req.file) {
      const { buffer, mimetype } = req.file;
      const imageString = `data:${mimetype};base64,${buffer.toString("base64")}`;
      expoData.expo_image = imageString;
    }
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

const addUser = async (req, res) => {
  try {
    const userData = req.body;
    if (req.file) {
      const { buffer, mimetype } = req.file;
      const imageString = `data:${mimetype};base64,${buffer.toString("base64")}`;
      userData.user_image = imageString;
    }


    const newUser = new user(userData);
    const savedUser = await newUser.save();

    res.status(201).json({
      message: 'User registerd successfully',
      data: savedUser
    });
  } catch (err) {
    console.error('Error Registering user:', err);
    res.status(500).json({
      message: 'Failed to register user',
      error: err.message
    });
  }
};


const addExhi = async (req, res) => {
  try {
    const Data = req.body;

    if (req.file) {
      const { buffer, mimetype } = req.file;
      const imageString = `data:${mimetype};base64,${buffer.toString("base64")}`;
      Data.exhibitor_image = imageString;
    }

    const newExhi = new Exhibitor(Data);
    const savedExhi = await newExhi.save();

    res.status(201).json({
      message: 'Exhibitor request sent successfully',
      data: savedExhi
    });
  } catch (err) {
    console.error('Error Sending Exhibitor request:', err);
    res.status(500).json({
      message: 'Failed to sent Exhibitor request',
      error: err.message
    });
  }
};


const addCompony = async (req, res) => {
  try {
    const Data = req.body;

    if (req.file) {
      const { buffer, mimetype } = req.file;
      const imageString = `data:${mimetype};base64,${buffer.toString("base64")}`;
      Data.compony_image = imageString;
    }

    const newCompany = new Company(Data);
    const savedCompany = await newCompany.save();

    res.status(201).json({
      message: 'Compony Added successfully',
      data: savedCompany
    });
  } catch (err) {
    console.error('Error Adding Company:', err);
    res.status(500).json({
      message: 'Failed to  Add request',
      error: err.message
    });
  }
};


const signInUser = async (req, res) => {
  try {
    const { user_email, user_pass } = req.body;

    const existingUser = await User.findOne({ user_email });
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(user_pass, existingUser.user_pass);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.user_email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.status(200).json({
      message: 'User signed in successfully',
      token,
    });

  } catch (err) {
    console.error('Sign-in error:', err);
    res.status(500).json({ message: 'Sign-in failed', error: err.message });
  }
};


module.exports = { addExpo, addUser, addExhi, addCompony, signInUser };
