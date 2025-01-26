const studentProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    resume: { type: String }, // URL or file path for resume
    appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }], // Jobs the student applied to
    placed: { type: Boolean, default: false },
  });
  
  module.exports = mongoose.model('StudentProfile', studentProfileSchema);
  