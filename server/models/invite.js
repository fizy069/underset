const inviteSchema = new mongoose.Schema({
    email: { type: String, required: true },
    role: { type: String, enum: ['admin', 'recruiter'], required: true },
    college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' }, // Only for 'admin'
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, // Only for 'recruiter'
    used: { type: Boolean, default: false },
    inviteCode: { type: String, required: true },
  });
  
  module.exports = mongoose.model('Invite', inviteSchema);
  