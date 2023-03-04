import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamChatPageRoutingModule } from './team-chat-routing.module';

import { TeamChatPage } from './team-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamChatPageRoutingModule
  ],
  declarations: [TeamChatPage]
})
export class TeamChatPageModule {}
