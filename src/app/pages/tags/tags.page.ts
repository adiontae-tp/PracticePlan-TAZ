import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Tag } from 'src/app/classes/tag';
import { NewTagModal } from 'src/app/modals/new-tag.modal';
import { FirestoreService } from 'src/app/services/firestore.service';
import { HelperService } from 'src/app/services/helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss'],
})
export class TagsPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    public helper: HelperService,
    private store: StoreService
  ) {}

  ngOnInit() {}

  tags: Tag[] = [];
  ionViewWillEnter() {
    this.store.tags.subscribe((val) => (this.tags = val));
  }

  newTag() {
    this.helper.showModal(NewTagModal);
  }
}
