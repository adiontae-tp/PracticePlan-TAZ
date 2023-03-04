import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  messages: any[] = [];
  currentUser = new User();

  newMessage = '';

  sendMessage() {}
}
