const express = require('express');
const router = express.Router();
const College = require('../models/College');  
const Requirement = require('../models/Requirement');  
const Student = require('../models/Student');
const Recruiter = require('../models/Recruiter');
const Placement = require('../models/Placement');
const authMiddleware = require('../middleware/auth');
const User = require('../models/User')



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
  