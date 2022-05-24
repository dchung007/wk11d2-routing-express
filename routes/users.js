const express = require('express');
const router = express.Router();


router.get('/:user/bio', (req, res) => {
  res.send('Bio');
})

router.get('/:user/contact', (req, res) => {
  res.send('Contact');
})

module.exports = router;
