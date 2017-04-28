import { Component, OnInit } from '@angular/core';

import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { PushNotificationsService } from 'angular2-notifications';

import { Message } from '../message';
import { User } from '../user';

@Component({
  selector: 'chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit {

  user: User;
  socket: any;
  chatmsg: String;
  messages: Array<Message>;
  audio: HTMLAudioElement;
  contextMenu: any;
  progressSize: any;
  progressStatus: any;
  emojiSet: Array<any>;

  constructor(private pushService: PushNotificationsService) {
    // Init variables
    this.socket = io();
    this.messages = [];
    this.audio = new Audio('assets/media/chat.mp3');
    this.progressStatus = 'indeterminate';
    this.chatmsg = '';
    this.emojiSet = ['😀','😃','😄','😁','😆','😅','😂','🤣','☺️','😊','😇','🙂','🙃','😉','😌','😍','😘','😗','😙','😚','😋','😜','😝','😛','🤑','🤗','🤓','😎','🤡','🤠','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','😤','😠','😡','😶','😐','😑','😯','😦','😧','😮','😲','😵','😳','😱','😨','😰','😢','😥','🤤','😭','😓','😪','😴','🙄','🤔','🤥','😬','🤐','🤢','🤧','😷','🤒','🤕','😈','👿','👹','👺','💩','👻','💀','☠️','👽','👾','🤖','🎃','😺','😸','😹','😻','😼','😽','🙀','😿','😾','👐','🙌','👏','🙏','🤝','👍','👎','👊','✊','🤛','🤜','🤞','✌️','🤘','👌','👈','👉','👆','👇','☝️','✋','🤚','🖐','🖖','👋','🤙','💪','🖕','✍️','🤳','💅','🖖','💄','💋','👄','👅','👂','👃','👣','👁','👀','🗣','👤','👥','👶','👦','👧','👨','👩','👱‍♀️','👱','👴','👵','👲','👳‍♀️','👳','👮‍♀️','👮','👷‍♀️','👷','💂‍♀️','💂','🕵️‍♀️','🕵️','👩‍⚕️','👨‍⚕️','👩‍🌾','👨‍🌾','👩‍🍳','👨‍🍳','👩‍🎓','👨‍🎓','👩‍🎤','👨‍🎤','👩‍🏫','👨‍🏫','👩‍🏭','👨‍🏭','👩‍💻','👨‍💻','👩‍💼','👨‍💼','👩‍🔧','👨‍🔧','👩‍🔬','👨‍🔬','👩‍🎨','👨‍🎨','👩‍🚒','👨‍🚒','👩‍✈️','👨‍✈️','👩‍🚀','👨‍🚀','👩‍⚖️','👨‍⚖️','🤶','🎅','👸','🤴','👰','🤵','👼','🤰','🙇‍♀️','🙇','💁','💁‍♂️','🙅','🙅‍♂️','🙆','🙆‍♂️','🙋','🙋‍♂️','🤦‍♀️','🤦‍♂️','🤷‍♀️','🤷‍♂️','🙎','🙎‍♂️','🙍','🙍‍♂️','💇','💇‍♂️','💆','💆‍♂️','🕴','💃','🕺','👯','👯‍♂️','🚶‍♀️','🚶','🏃‍♀️','🏃','👫','👭','👬','💑','👩‍❤️‍👩','👨‍❤️‍👨','💏','👩‍❤️‍💋‍👩','👨‍❤️‍💋‍👨','👪','👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👩‍👩‍👦','👩‍👩‍👧','👩‍👩‍👧‍👦','👩‍👩‍👦‍👦','👩‍👩‍👧‍👧','👨‍👨‍👦','👨‍👨‍👧','👨‍👨‍👧‍👦','👨‍👨‍👦‍👦','👨‍👨‍👧‍👧','👩‍👦','👩‍👧','👩‍👧‍👦','👩‍👦‍👦','👩‍👧‍👧','👨‍👦','👨‍👧','👨‍👧‍👦','👨‍👦‍👦','👨‍👧‍👧','👚','👕','👖','👔','👗','👙','👘','👠','👡','👢','👞','👟','👒','🎩','🎓','👑','⛑','🎒','👝','👛','👜','💼','👓','🕶','🌂','☂️'];

    // Init User
    Observable.fromEvent(this.socket, 'init')
      .subscribe((user: User) => this.user = user);
  }

  ngOnInit() {
    // Context Menu Selector
    this.contextMenu = $('#context-menu');

    // Chat Messages Observable
    Observable.fromEvent(this.socket, 'message')
      .subscribe(msg => this.response(msg));

    // Push Message Request Permission
    if(this.pushService.permission === 'default') {
      this.pushService.requestPermission();
    }

    // ProgressBar Init
    setTimeout(() => this.progressStatus = 'determinate', 4000);
  }

  // Send Text Message
  sendText(msg) {
    // Check if empty
    if(msg.trim() === '') return;

    // Send the message and clear the input field
    this.socket.emit('message', msg);
    this.chatmsg = '';

    // Sanitize the message, parse emojis unicodes, and push it into messages
    let escape = document.createElement('textarea');

    escape.textContent = msg.trim();
    let message: Message = {
      id: this.user.id,
      msg: twemoji.parse(escape.innerHTML, (icon, options, variant) => {
        return 'assets/emojis/' + icon + '.svg';
      }),
      time: this.formatAMPM(new Date())
    };
    this.messages.push(message);
  }

  // Received Message
  response(msg) {
    // if the website is not on focus, show push message
    if(this.pushService.permission === 'granted' && !document.hasFocus() && msg.id !== this.user.id) {
      this.pushService.create(msg.name,{body: msg.msg, icon: msg.photo, tag: msg.id}).subscribe(
        res => {
          res['notification']['onclick'] = () => {
            window.focus();
            res['notification'].close();
          }
        },
        (err: any) => console.log(err)
      );
    }

    // Parse emoji unicodes to img tag
    msg.msg = twemoji.parse(msg.msg, (icon, options, variant) => {
      return 'assets/emojis/' + icon + '.svg';
    });

    // Push it into messages
    this.messages.push(msg);

    // if the message was sent by the user in a different socket(tab) do not play sound or vibrate
    if(msg.id === this.user.id) return;

    // Play Message sound and vibrate
    this.audio.play();
    navigator.vibrate(100);
  }

// Send Image
  sendImage(e) {
    // Get the file
    let file = e.target.files[0];

    // Validate File Type
    let ext = file.name.split('.').pop().toLowerCase();
    if(['jpg', 'jpeg', 'png'].indexOf(ext) > -1) {
      // upload the image to the server and update progressSize
      let stream = ss.createStream();
      ss(this.socket).emit('image', stream, {name: file.name, size: file.size});

      let blobStream = ss.createBlobReadStream(file);
      let tot = 0;

      blobStream.on('data', function(chunk) {
        tot += chunk.length;
        this.progressSize = Math.floor(tot / file.size * 100);
      });

      blobStream.pipe(stream);
    }

    // create the blobURL for the image, format it and push it to messages
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.messages.push({id: this.user.id, image: reader.result, time: this.formatAMPM(new Date())});
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  // Toggle Emoji Tray
  toggleEmojiTray() {
    $('#emoji-tray').toggle('slide', {direction: 'down'});
  }

  // Parse Emoji
  parseEmoji(emoji) {
    return twemoji.parse(emoji, (icon, options, variant) => {
      return 'assets/emojis/' + icon + '.svg';
    });
  }

  // Insert Emoji
  insertEmoji(emoji) {
    this.chatmsg += emoji;
    $("#type-message").focus();
  }

  // Show Context Menu
  contextmenushow(ev) {
     this.contextMenu.css({
       left: ev.pageX,
       top: ev.pageY
     })
       .hide()
       .slideDown(300);
     return false;
   }

   // Hide Context Menu
   contextmenuhide(ev) {
     this.contextMenu.slideUp(300);
   }

  // Format Time in AM/PM format
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

  // Toggle Image fullscreen
  toggleFullscreen(event) {
    let elem = event.currentTarget || document.documentElement;
    if (!document.fullscreenElement && !(<any>document).mozFullScreenElement &&
    !document.webkitFullscreenElement && !(<any>document).msFullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen((<any>Element).ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((<any>document).msExitFullscreen) {
        (<any>document).msExitFullscreen();
      } else if ((<any>document).mozCancelFullScreen) {
        (<any>document).mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
}
