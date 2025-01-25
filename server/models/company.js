const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    logo: { type: String }, // URL or file path for the company logo
    description: { type: String }, // A brief description of the company
    recruiters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // List of recruiters associated with the company
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }] // Array of job IDs posted by the company
  });
  
  module.exports = mongoose.model('Company', companySchema);
  