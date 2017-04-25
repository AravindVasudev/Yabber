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
