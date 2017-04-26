module.exports = (io) => {
  const escape     = require('escape-html');
  const formatAMPM = require('../helpers/formatAMPM');

  io.on('connection', (socket) => {
    io.emit('participation', { id: socket.request.user.id, name: socket.request.user.name, join: true });
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
  });
}
