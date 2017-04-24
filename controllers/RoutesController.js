let instance = null;

module.exports = class Routes {
  constructor() {
    if(!instance)
      instance = this;

    return instance;
  }

  getIndex(req, res) {
    let file = 'index';
    res.render(file, {
      meta: {
        title: 'Yabber',
        description: 'A revolutionary chat app with ground breaking ideas stolen from what\'sapp',
        keywords: 'Express, MVC, html5, boilerplate',
        file: file
      },
      title: 'Yabber'
    });
  }
}
