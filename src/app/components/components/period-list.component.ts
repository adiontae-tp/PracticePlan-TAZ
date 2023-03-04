import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Period } from 'src/app/classes/period';
import { Plan } from 'src/app/classes/plan';
import { HelperService } from 'src/app/services/helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: `tp-period-list`,
  template: `
    <ion-searchbar placeholder="Find Periods"></ion-searchbar>
    <div *ngIf="periods.length == 0" style="padding: 16px; text-align: center">
      No Periods have been added to this team
    </div>
    <ion-list lines="none">
      <ion-item
        class="card-item"
        (click)="selectItem(period)"
        *ngFor="let period of periods"
      >
        <ion-label>
          <h2>{{ period.name }}</h2>
          <p>{{ helper.getDuration(period.duration) }}</p>
        </ion-label>
      </ion-item>
    </ion-list>
  `,
})
export class PeriodListComponent {
  constructor(private store: StoreService, public helper: HelperService) {
    this.store.initPeriods()?.then(() => {
      this.store.periods.subscribe((val) => (this.periods = val));
    });
  }

  @Input() periods: Period[] = [];
  @Output() select = new EventEmitter();
  selectItem(period: Period) {
    this.select.emit(period);
  }
}
