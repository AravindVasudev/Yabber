import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SocketService {
  socket: any;

  constructor() {
    // Init Socket 
    this.socket = io();
  }

  // Get User Details
  getUserDetails() {
    return Observable.fromEvent(this.socket, 'init');
  }
  
  // Get Response
  getResponse() {
    return Observable.fromEvent(this.socket, 'message');
  }

  // Send Text Message
  sendTextMessage(msg) {
    this.socket.emit('message', msg);
  }

  // Send Image
  sendImage(file, groupid, callback) {
    // upload the image to the server and execute progress callback
    let stream = ss.createStream();
    ss(this.socket).emit('image', stream, {name: file.name, size: file.size, group: groupid});

    let blobStream = ss.createBlobReadStream(file);

    blobStream.on('data', callback);

    blobStream.pipe(stream);
  }

  // Create group
  createGroup(group) {
    this.socket.emit('create group', group);
  }

}
