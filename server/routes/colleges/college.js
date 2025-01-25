const mongoose = require('mongoose');

const express = require('express');
const router = express.Router();
const College = require('../../models/college'); 


router.get('/', async (req, res) => {
  try {
    const colleges = await College.find(); 
    res.status(200).json(colleges);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;