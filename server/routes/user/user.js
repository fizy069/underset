const express = require('express');
const router = express.Router();
const User = require('../../models/user');

// Middleware to authenticate (optional, if you want to restrict access)
const authMiddleware = require('../../middleware/auth');

// Get user details by ID
router.get('/user/:id', authMiddleware(['admin', 'recruiter', 'student']), async (req, res) => {
  const userId = req.params.id;

  try {
    // Find user by ID
    const user = await User.findById(userId).select('-password'); // Exclude password for security reasons

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching user details' });
  }
});

module.exports = router;
