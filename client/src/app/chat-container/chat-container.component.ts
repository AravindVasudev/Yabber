import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Message } from '../message';
import { PushNotificationsService } from 'angular2-notifications';

@Component({
  selector: 'chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit {
  socket: any;
  chatmsg: String;
  messages: Array<Message>;
  audio: HTMLAudioElement;
  contextMenu: HTMLElement;

  constructor(private pushService: PushNotificationsService) {
    this.socket = io.connect('http://localhost:3000');
    this.messages = [];
    this.audio = new Audio('assets/media/chat.mp3');
  }

  ngOnInit() {
    this.contextMenu = document.getElementById('context-menu');

    // Chat Messages
    Observable.fromEvent(this.socket, 'message')
      .subscribe(msg => this.reply(msg));


    if(this.pushService.permission === 'default') {
      this.pushService.requestPermission();
    }
  }

  reply(msg) {
    msg.msg = twemoji.parse(msg.msg);
    this.messages.push(msg);
    this.audio.play();
    navigator.vibrate(100);
    if(this.pushService.permission === 'granted' && !document.hasFocus()) {
      this.pushService.create(msg.name,{body: msg.msg, icon: msg.picture, tag: msg.id}).subscribe(
        res => {
          res['notification']['onclick'] = () => {
            window.focus();
            res['notification'].close();
          }
        },
        (err: any) => console.log(err)
      );
    }
  }

  send(msg) {
    if(msg.trim() === '') return;
    this.socket.emit('message', msg);
    this.chatmsg = '';

    let escape = document.createElement('textarea');
    escape.textContent = twemoji.parse(msg.trim());
    let message: Message = {
      msg: escape.innerHTML,
      time: this.formatAMPM(new Date()),
      me: true
    };
    this.messages.push(message);
  }

  sendImage(e) {
    let fileTypes = ['jpg', 'jpeg', 'png'];
    let file = e.target.files[0];
    let stream = ss.createStream();
    let ext = file.name.split('.').pop().toLowerCase();
    if(fileTypes.indexOf(ext) > -1) {
      // upload a file to the server.
      ss(this.socket).emit('image', stream, {name: file.name, size: file.size});
      ss.createBlobReadStream(file).pipe(stream);
    }

    let reader = new FileReader();
    reader.addEventListener("load", () => this.sentImage(reader.result), false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  sentImage(img) {
    let message: Message = {
      image: img,
      time: this.formatAMPM(new Date()),
      me: true
    };
    this.messages.push(message);
  }

  private formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  contextmenushow(ev) {
    this.contextMenu.style.display = 'none';
    this.contextMenu.style.left = `${ev.pageX}px`;
    this.contextMenu.style.top = `${ev.pageY}px`;
    this.contextMenu.style.display = 'block';
    return false;
  }

  contextmenuhide(ev) {
    this.contextMenu.style.display = 'none';
  }
}
