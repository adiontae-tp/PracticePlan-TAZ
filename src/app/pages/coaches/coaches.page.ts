import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Coach } from 'src/app/classes/coach';
import { NewCoachModal } from 'src/app/modals/new-coach.modal';
import { HelperService } from 'src/app/services/helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.page.html',
  styleUrls: ['./coaches.page.scss'],
})
export class CoachesPage implements OnInit {
  coaches: Coach[] = [];
  readonly = false;

  constructor(
    private store: StoreService,
    private navCtlr: NavController,
    private helper: HelperService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.store.coaches.subscribe((val) => (this.coaches = val));
  }

  addCoach() {
    this.helper.showModal(NewCoachModal)
  }
}
