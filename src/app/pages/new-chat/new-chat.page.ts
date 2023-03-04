import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StoreService } from '../services/store.service';
import { User } from '../classes/user';
import { Coach } from '../classes/coach';
import { Chat } from '../classes/chat';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.page.html',
  styleUrls: ['./new-chat.page.scss'],
})
export class NewChatPage implements OnInit {
  coachEmail: string = '';

  constructor(private navCtrl: NavController, private store: StoreService) {}

  ngOnInit() {}

  async startChat() {
    // Retrieve the current user and team data
    const user = this.store.user.getValue();
    const team = this.store.team.getValue();

    // Find the coach with the given email
    const coach = this.store.coaches
      .getValue()
      .find((c: Coach) => c.email === this.coachEmail);

    // If the coach exists and is not the current user, create a new chat
    if (coach && coach.email !== user.email) {
      const chat = new Chat();
      chat.id = Math.floor(Math.random() * 1000000).toString();
      chat.team = team.id;
      chat.user1 = user.email;
      chat.user2 = coach.email;

      // Add the new chat to the Firestore database
      await this.store.addChat(chat);

      // Navigate to the team chat page
      this.navCtrl.navigateBack('/team-chat');
    }
  }
}
