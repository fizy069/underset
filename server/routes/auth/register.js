const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const college = require('../../models/college');
const company = require('../../models/company');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, password, role, college, company} = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      name,
      email,
      password,
      college,
      company,
      role
    });

    await user.save();

    // Create JWT Token
    const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', {
      expiresIn: '1h'
    });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
