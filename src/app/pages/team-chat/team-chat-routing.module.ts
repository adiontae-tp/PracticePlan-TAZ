import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamChatPage } from './team-chat.page';

const routes: Routes = [
  {
    path: ':id',
    component: TeamChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamChatPageRoutingModule {}
