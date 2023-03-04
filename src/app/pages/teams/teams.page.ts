import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/classes/team';
import { User } from 'src/app/classes/user';
import { NewTeamModal } from 'src/app/modals/new-team.modal';
import { HelperService } from 'src/app/services/helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  constructor(private store: StoreService, private helper: HelperService) {}

  ngOnInit() {}

  teams: Team[] = [];
  user = new User();


  ionViewWillEnter() {
    this.store.teams.subscribe((val) => (this.teams = val));
    this.store.user.subscribe((val) => (this.user = val));
  }

  newTeam() {
    this.helper.showModal(NewTeamModal);
  }
}
