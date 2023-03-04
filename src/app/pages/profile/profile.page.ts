import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { FirestoreService } from 'src/app/services/firestore.service';
import { HelperService } from 'src/app/services/helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(
    private store: StoreService,
    private fs: FirestoreService,
    private helper: HelperService
  ) {}

  ngOnInit() {}

  user = new User();

  ionViewWillEnter() {
    this.store.user.subscribe((val) => (this.user = val));
  }

  save() {
    this.fs.setDoc(this.user).then(() => {
      this.helper.showToast();
    });
  }
}
