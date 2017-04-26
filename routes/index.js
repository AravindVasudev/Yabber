const express          = require('express');
const path             = require('path');
const passport         = require('passport');
const router           = express.Router();
const RoutesController = require('../controllers/RoutesController');
const routes           = new RoutesController();
const auth             = require('../config/passport');
const User             = require('../models/user.js');

const Group = require('../models/group');

// login page
router.get('/', auth.AuthenticatedRedirect, routes.getIndex);

// signup page
router.get('/signup', auth.AuthenticatedRedirect, routes.getSignup);
router.post('/signup', auth.AuthenticatedRedirect, routes.postSignup);

// verify login
router.post('/login', passport.authenticate('local', {
  successRedirect:'/chat',
  failureRedirect:'/',
  failureFlash : false}), routes.postLogin);

// logout
router.get('/logout', routes.getLogout);

// application
router.use(auth.ensureAuthenticated);
router.use('/chat', express.static(path.join(__dirname, '../dist')));

module.exports = router;
