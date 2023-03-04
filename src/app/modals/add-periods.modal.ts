import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Activity } from '../classes/activity';
import { Period } from '../classes/period';
import { Plan } from '../classes/plan';
import { ComponentsModule } from '../components/components/components.module';
import { HelperService } from '../services/helper.service';
import { StoreService } from '../services/store.service';
import { NewPeriodModal } from './new-period.modal';

@Component({
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ComponentsModule],
  template: `
    <tp-modal-header title="Add Periods"></tp-modal-header>
    <tp-time-duration-banner
      *ngIf="plan.startTime && plan.endTime"
      [readonly]="true"
      [item]="plan"
    ></tp-time-duration-banner>
    <tp-duration-banner
      *ngIf="!plan?.startTime || !plan?.endTime"
      [item]="plan"
    ></tp-duration-banner>
    <ion-content>
      <div
        style="padding: 16px; text-align: center"
        *ngIf="periods.length == 0"
      >
        No Periods have been added to this Team
      </div>
      <ion-list>
        <ion-item *ngFor="let period of periods">
          <ion-label>
            <h2>{{ period.name }}</h2>
            <p>{{ helper.getDuration(period.duration) }}</p>
          </ion-label>
          <ion-button
            (click)="select(period)"
            fill="outline"
            size="small"
            [color]="period.added ? 'success' : 'primary' "
          >
            {{ period.added ? 'Added' : 'Add to Plan' }}
          </ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
    <tp-modal-footer [new]="NewPeriodModal"></tp-modal-footer>
  `,
})
export class AddPeriodsModal {
  constructor(public helper: HelperService, private store: StoreService) {
    this.store.periods.subscribe((val) => (this.periods = val));
  }
  periods: Period[] = [];
  plan = new Plan();
  NewPeriodModal = NewPeriodModal;

  select(period: Period) {
    period.added = true;
    setTimeout(() => {
      period.added = false;
    }, 500);
    var activity = Object.assign(new Activity(), period);
    this.plan.activities.push({ ...activity });
    if (this.plan.startTime && this.plan.endTime) {
      this.helper.updateDurationTimes(this.plan);
    } else {
      this.helper.updateDuration(this.plan);
    }
  }
}
