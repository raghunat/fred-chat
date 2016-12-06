import {
  Component, style, animate, transition, state,
  trigger
} from '@angular/core';

import {NavController} from 'ionic-angular';

declare var socket;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-5%)', opacity: 0}),
        animate(500)
      ])
    ])
  ]
})
export class HomePage {

  messages = [];
  message: string = '';

  constructor(public navCtrl: NavController) {
    socket.on('chat message', (msg) => {
      this.messages.push(msg);
    });
  }

  sendMessage(message) {
    socket.emit('chat message', message);
  }
}
