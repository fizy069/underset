const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const User = require('../../models/user')



router.get('/dashboard/students', authMiddleware(['admin']), async (req, res) => {
    try {
      const adminId = req.user.id;
  
      const adminUser = await User.findById(adminId).populate('college');
      const collegeId = adminUser.college._id;
  
      const students = await User.find({ role: 'student', college: collegeId });
  
      res.status(200).json({ students });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching students' });
    }
  });
  