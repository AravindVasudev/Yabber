module.exports = (io) => {
  const ss               = require('socket.io-stream');
  const escape           = require('escape-html');
  const formatAMPM       = require('../helpers/formatAMPM');
  const fs               = require('fs');
  const path             = require('path');
  const shortid          = require('shortid');
  const imagemin         = require('imagemin');
  const imageminJpegtran = require('imagemin-jpegtran');
  const imageminPngquant = require('imagemin-pngquant');

  io.on('connection', (socket) => {
    // Chat Message
    socket.on('message', msg => {
      if(!!msg.trim()) {
        let message = {
          id: socket.request.user.id,
          name: socket.request.user.name,
          msg: escape(msg),
          time: formatAMPM(new Date()),
          photo: socket.request.user.picture,
        };
        socket.broadcast.emit('message', message);
      }
    });

    // Image - 5MB Limit
    ss(socket).on('image', (stream, data) => {
      let filepath = './public/uploads/'
      let ext = path.extname(path.basename(data.name));
      if((ext === '.jpeg' || ext === '.jpg' || ext === '.png') && data.size < 5000000) {
        let filename = `${shortid.generate()}${ext}`;
        let save = stream.pipe(fs.createWriteStream(filepath + filename));
        save.on('finish', () => {
          data.filename = filename;
          console.log(data);
          let message = {
            id: socket.request.user.id,
            name: socket.request.user.name,
            msg: '',
            image: `/uploads/${filename}`,
            time: formatAMPM(new Date()),
            photo: socket.request.user.picture,
          }
          socket.broadcast.emit('message', message);
        });
      }
    });
  });
}
