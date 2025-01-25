const mongoose = require('mongoose');
const collegeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    logo: { type: String }, // URL or file path for the college logo
    brandingColors: { type: String }, // Hex values or CSS color codes
    placementPolicy: { type: String }, // Placement policy details
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // List of admins for the college
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }] // Array of job IDs related to the college
  });
  
  module.exports = mongoose.model('College', collegeSchema);
  