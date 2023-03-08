import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';
import { Plan } from 'src/app/classes/plan';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'tp-plan-list',
  template: `
    <!-- TODO: [PPA-2] Update the design of teh plan-list card -->
    <div *ngIf="plans.length == 0" class="center">
      No Future Plans have been added to this Team
    </div>
    <ion-list lines="none">
      <div
        *ngFor="let plan of plans; let index = index"
        (click)="selectPlan(plan)"
      >
        <tp-item-divider *ngIf="showMonth(index)">
          {{ moment(plan.startTime, 'x').format('MMMM') }}</tp-item-divider
        >
        <ion-item class="card-item">
          <ion-label>
            <h2>{{ helper.dayTime(plan) }}</h2>
            <p>{{ helper.startEndDuration(plan) }}</p>
          </ion-label>
          <ion-thumbnail slot="end">
            <div class="px-2 inline-block border rounded">
              <div class="text-center">
                <span class="text-gray-400">
                  {{ moment(plan.startTime, 'x').format('MMM') }}
                </span>
                <span class="text-gray-400">
                  {{ moment(plan.startTime, 'x').format('Do') }}
                </span>
              </div>
            </div>
          </ion-thumbnail>
        </ion-item>
      </div>
    </ion-list>
    <style>
      .center {
        display: flex;
        flex-direction: row;
        height: 500px;
        justify-content: center;
        align-items: center;
      }
    </style>
  `,
})
export class PlanListComponent {
  constructor(public helper: HelperService) {}
  @Input() plans: Plan[] = [];
  @Input() title = '';
  @Input() subtitle = '';
  @Output() select = new EventEmitter();

  moment = moment;
  selectPlan(plan: Plan) {
    this.select.emit(plan);
  }

  showMonth(index: any) {
    if (index == 0) {
      return true;
    } else {
      var currentMonth = '';
      var lastMonth = '';
      var plan = this.plans[index];
      var lastPlan = this.plans[index - 1];
      currentMonth = moment(plan.startTime, 'x').format('MMYY');
      lastMonth = moment(lastPlan.startTime, 'x').format('MMYY');
      return currentMonth != lastMonth;
    }
  }
}
