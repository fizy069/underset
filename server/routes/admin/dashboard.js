const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/auth');
const User = require('../../models/user');

router.get('/dashboard/students', authMiddleware(['admin']), async (req, res) => {
    try {
        // 1. Get admin user
        const admin = await User.findById(req.user.id);
        console.log('Admin found:', admin);

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // 2. Verify college association
        if (!admin.college) {
            return res.status(400).json({ 
                message: 'Admin not associated with college',
                adminId: admin._id,
                adminEmail: admin.email
            });
        }

        // 3. Get students
        const students = await User.find({
            role: 'student',
            college: admin.college
        }).select('name email role college dateJoined');

        return res.status(200).json({
            success: true,
            adminCollege: admin.college,
            count: students.length,
            students
        });

    } catch (error) {
        console.error('Dashboard Error:', error);
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;