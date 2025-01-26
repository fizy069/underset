const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const recruiterRoutes = require('./routes/recruiter');
const studentRoutes = require('./routes/student');




// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
      message: 'Something went wrong!',
      error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
  });
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes); 
app.use('/api/recruiter', recruiterRoutes); 
app.use('/api/student', studentRoutes); 

  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });