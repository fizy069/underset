const express = require('express');
const router = express.Router();
const College = require('../../models/college');
const authMiddleware = require('../../middleware/auth');
const User = require('../../models/user')

// College Setup API
router.post('/college-setup', authMiddleware(['admin']), async (req, res) => {
    const { collegeName, logo, brandingColors, placementPolicies, requirements } = req.body;
  
    try {
      const newCollege = new College({
        collegeName,
        logo,
        brandingColors,
        placementPolicies,
        requirements
      });
  
      await newCollege.save();
      const adminId = req.user.id;

      await User.findByIdAndUpdate(
        adminId,
        { $set: { college: savedCollege._id } },  
        { new: true }
      );
  
      res.status(201).json({ message: 'College setup successfully!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error setting up college' });
    }
  });

// Requirement Specification API
router.post('/requirement-specification', authMiddleware(['admin']), async (req, res) => {
  const { criteria } = req.body;

  try {
    const newRequirement = new Requirement({
      criteria
    });

    await newRequirement.save();
    res.status(201).json({ message: 'Requirement specification saved successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving requirements' });
  }
});


module.exports = router;
