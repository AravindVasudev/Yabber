const User = require('../models/user');

// Singleton Routes Controller
let instance = null;
module.exports = class Routes {
  constructor() {
    if(!instance)
      instance = this;

    return instance;
  }

  // Login Page
  getIndex(req, res) {
    let file = 'index';
    res.locals.meta = {
      title: 'Local instant messaging system',
      description: 'Yabber is a simple to use chat app that let&#x27;s you to have fun with your friends',
      keywords: 'chat, app, babble, instant, messaging',
      file: file
    };
    res.locals.title = 'Welcome to Yabber!';
    res.render(file);
  }

  // Signup
  getSignup(req, res) {
    let file = 'index';
    res.locals.meta = {
      title: 'Local instant messaging system',
      description: 'Yabber is a simple to use chat app that let&#x27;s you to have fun with your friends',
      keywords: 'chat, app, babble, instant, messaging',
      file: file
    };
    res.locals.title = 'Welcome to Yabber!';
    res.render('signup');
  }

  // Signup User
  postSignup(req, res) {
    let newUser = new User({
      id: req.body.regno,
      name: req.body.name,
      picture: req.body.picture,
      group: [{
        id: 'default',
        name: 'Global Group',
        picture: '/img/default-avatar.jpg'
      }]
    });
    newUser.password = newUser.generateHash(req.body.password);
    newUser.save((err) => {
      if(err) throw err;
      res.redirect('/chat');
    });
  }

  // Authenticates user
  postLogin(req, res) {
    res.redirect('/chat');
  }

  // Log Out
  getLogout(req, res) {
    req.logout();
    res.redirect('/');
  }
}
