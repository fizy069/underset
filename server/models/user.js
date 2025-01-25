const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'student', 'recruiter'], required: true },
    college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' }, // Only for 'admin' and 'student'
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, // Only for 'recruiter'
    dateJoined: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('User', userSchema);
  