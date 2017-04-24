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
    res.render(file, {
      meta: {
        title: 'Local instant messaging system',
        description: 'Yabber is a simple to use chat app that let&#x27;s you to have fun with your friends',
        keywords: 'chat, app, babble, instant, messaging',
        file: file
      },
      title: 'Welcome to Yabber!'
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

  // Chat App
  getChat(req, res) {
    res.send('You made it here. Yay!!!');
  }
}
