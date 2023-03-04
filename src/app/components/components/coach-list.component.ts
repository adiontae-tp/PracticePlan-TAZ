import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Coach } from 'src/app/classes/coach';

@Component({
  selector: `tp-coach-list`,
  template: `
  <ion-searchbar placeholder="Search Coaches"></ion-searchbar>  
  <div style="padding: 16px; text-align: center" *ngIf="coaches.length == 0">No Coaches have been added to this Team</div>
  <ion-list lines="none">
      <ion-item class="card-item" (click)="selectCoach(coach)" *ngFor="let coach of coaches">
        <ion-label *ngIf="coach.fname && coach.lname">
          <h2>{{ coach.fname + ' ' + coach.lname }}</h2>
          <p>{{ coach.email }}</p>
        </ion-label>
        <ion-label *ngIf="!coach.fname || !coach.lname">
          <h2>{{ coach.email }}</h2>
          <p>This coach does not have an account</p>
        </ion-label>
      </ion-item>
    </ion-list>
  `,
})
export class CoachListComponent {
  @Input() coaches: Coach[] = [];
  @Input() readonly = false;
  constructor(private navCtrl: NavController) {}

  selectCoach(coach: Coach) {
    this.navCtrl.navigateForward('/coach/' + coach.id);
  }
}
