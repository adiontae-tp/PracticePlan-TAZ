import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/classes/team';
import { User } from 'src/app/classes/user';
import { FirestoreService } from 'src/app/services/firestore.service';
import { HelperService } from 'src/app/services/helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  constructor(
    private store: StoreService,
    private fs: FirestoreService,
    private helper: HelperService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  team = new Team();
  user = new User();
  id: string | null = null;
  readonly = false;
  sports: string[] = [
    'Basketball',
    'Baseball',
    'Softball',
    'Football',
    'Volleyball',
  ];

  async ionViewWillEnter() {
    this.store.user.subscribe((val) => (this.user = val));
    var id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
      var team = (await this.fs.getDoc('teams/' + id)) as Team;
      if (team && team.id) {
        this.readonly = true;
        this.team = team;
      }
    } else {
      this.store.team.subscribe((val) => (this.team = val));
    }
  }

  async save() {
    await this.fs.setDoc(this.team);
    this.readonly = true;
    this.helper.showToast();
  }

  async selectTeam() {
    this.user.team = this.team.id;
    this.fs.setDoc(this.user);
    this.store.init(this.user.uid);
    this.helper.showToast();
  }
}
