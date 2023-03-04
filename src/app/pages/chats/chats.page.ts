import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Chat } from '../../classes/chat';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage {

  chats: Chat[] = [
    { id: 1, name: 'John Doe', lastMessage: 'Hello', members: ['John Doe', 'Jane Doe'] },
    { id: 2, name: 'Jane Doe', lastMessage: 'Hi', members: ['John Doe', 'Jane Doe'] },
    { id: 3, name: 'Bob Smith', lastMessage: 'Hey', members: ['John Doe', 'Bob Smith'] },
  ];

  currentUser = 'John Doe';
  newChatName = '';

  constructor(private navCtrl: NavController) { }

  openChat(chat: Chat) {
    // Navigate to the "Team Chat" page with the chat members
    this.navCtrl.navigateForward(`/team-chat/${chat.id}`);
  }

  newChat() {
    // Show the new chat page
    this.navCtrl.navigateForward('/new-chat');
  }

  startChat() {
    // Create a new chat with the current user and the entered chat name
    const newChat: Chat = {
      id: this.chats.length + 1,
      name: this.newChatName,
      lastMessage: '',
      members: [this.currentUser],
    };
    this.chats.push(newChat);
    
    // Navigate to the "Team Chat" page with the new chat ID
    this.navCtrl.navigateForward(`/team-chat/${newChat.id}`);
  }
}
