import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  socket = null;
  chatinp = '';

  constructor() {
    this.socket = io.connect('http://localhost:3000');
    let listener = Observable.fromEvent(this.socket, 'message');
    listener.subscribe((payload) => {
      console.log(payload);
    });
  }

  send(msg) {
    this.socket.emit('message', msg);
  }
}
