const express = require('express');
const router = express.Router();

//@desc  Loginpage
//@route  GET /
router.get('/', (req, res) => {
  res.render('login', { layout: 'login' });
});

//@desc  DashBord
//@route GET/dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});
module.exports = router;
