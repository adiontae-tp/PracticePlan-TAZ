import { Component, OnInit } from '@angular/core';
import { Period } from 'src/app/classes/period';
import { NewPeriodModal } from 'src/app/modals/new-period.modal';
import { HelperService } from 'src/app/services/helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.page.html',
  styleUrls: ['./periods.page.scss'],
})
export class PeriodsPage implements OnInit {
  constructor(private store: StoreService, public helper: HelperService) {}

  ngOnInit() {}

  periods: Period[] = [];

  ionViewWillEnter() {
    this.store.periods.subscribe((val) => {
      if (val) {
        this.periods = val.sort((a: Period, b: Period) => {
          return ('' + a.name).localeCompare(b.name);
        });
      }
    });
  }

  selectPeriod(period: Period) {}

  newPeriod() {
    this.helper.showModal(NewPeriodModal);
  }
}
