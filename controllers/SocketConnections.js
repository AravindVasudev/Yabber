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
  const Group            = require('../models/group');
  const User             = require('../models/user.js');

  io.on('connection', (socket) => {
    socket.emit('init', {
      id: socket.request.user.id,
      name: socket.request.user.name,
      photo: socket.request.user.picture,
      group: socket.request.user.group
    });

    // Join member groups
    socket.request.user.group.forEach((group) => {
      socket.join(group.id);
    });

    // Create Group
    socket.on('create group', (group) => {
      let members = group.members.split(',');
      members.push(socket.request.user.id);
      console.log(members);
      let newGroup = new Group({
        name: group.title,
        picture: group.picture,
        members: members
      });

      newGroup.save((err, ngroup) => {
        members.forEach((member) => {
          User.findOne({id: member}, (err, doc) => {
            if(err) throw err;
            doc.group.push({
              id: ngroup.id,
              name: ngroup.name,
              picture: ngroup.picture
            });
            doc.save((err, d) => {
              if(err) throw err;
              console.log(d);
            })
          });
        });
      });
    });

    // Chat Message
    socket.on('message', msg => {
      if(!!msg.msg.trim()) {
        let message = {
          id: socket.request.user.id,
          name: socket.request.user.name,
          msg: escape(msg.msg.trim()),
          time: formatAMPM(new Date()),
          photo: socket.request.user.picture,
          group: msg.group
        };
        socket.broadcast.to(msg.group).emit('message', message);
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
            group: data.group
          }
          socket.broadcast.emit('message', message);
        });
      }
    });
  });
}
