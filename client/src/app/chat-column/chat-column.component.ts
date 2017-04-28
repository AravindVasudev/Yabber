import { Component, OnInit, EventEmitter } from '@angular/core';

import { SocketService } from '../socket.service';
import { User } from '../user';
import { Group } from '../group';

@Component({
  selector: 'chat-column',
  templateUrl: './chat-column.component.html',
  styleUrls: ['./chat-column.component.scss'],
  outputs: ['changeGroup']
})
export class ChatColumnComponent implements OnInit {
  user: User;
  changeGroup: EventEmitter<Group>;

  constructor(private socketService: SocketService) {
    this.user = (<User>[]);

    // Init Change Group
    this.changeGroup = new EventEmitter<Group>();

    // Get User Details
    this.socketService.getUserDetails()
      .subscribe((user: User) => this.user = user);
  }

  ngOnInit() { }

  // Add group
  addGroup() {
    let groupTitle = prompt("Enter group Title", "");
    let members = prompt("Enter member register number seperated by `,`", "");
    let dpurl = prompt("Enter URL for group dp", "");

    // if(!!groupTitle && !!members && !!dpurl) return;
    console.log(groupTitle, members, dpurl);

     this.socketService.createGroup({title: groupTitle, members: members, picture: dpurl});

     
  }

}
