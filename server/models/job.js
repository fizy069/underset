const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    eligibilityCriteria: { type: String },
    college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true }, // Reference to the company
    recruiter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // The recruiter who posted the job
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'StudentProfile' }], // List of student applicants
    status: { type: String, enum: ['open', 'closed'], default: 'open' }, // Job status (open or closed)
    rounds: [{ type: String }], // Interview/Assessment rounds
    postedAt: { type: Date, default: Date.now } // Timestamp of job posting
  });
  
  module.exports = mongoose.model('Job', jobSchema);
  