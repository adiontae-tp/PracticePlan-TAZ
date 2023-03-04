import { Component } from '@angular/core';
import { Team } from './classes/team';
import { User } from './classes/user';
import { FirestoreService } from './services/firestore.service';
import { HelperService } from './services/helper.service';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private store: StoreService,
    private helper: HelperService,
    private fs: FirestoreService
  ) {
    this.store.user.subscribe((val) => (this.user = val));
    this.store.team.subscribe((val) => (this.team = val));
  }

  user = new User();
  team = new Team();
}
