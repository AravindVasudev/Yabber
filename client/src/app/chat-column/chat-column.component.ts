import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'chat-column',
  templateUrl: './chat-column.component.html',
  styleUrls: ['./chat-column.component.scss']
})
export class ChatColumnComponent implements OnInit {
  socket: any;
  dp: String;
  displayName: String;
  id: String;
  constructor() {
    // this.socket = io();
    //
    // // Get Details
    // Observable.fromEvent(this.socket, 'details')
    //   .subscribe(msg => this.reply(msg))
  }

  ngOnInit() {}

  // reply(msg) {
  //   alert('hi');
  //   this.dp = msg.photo;
  //   this.displayName = msg.name;
  //   this.id = msg.id;
  // }

}
