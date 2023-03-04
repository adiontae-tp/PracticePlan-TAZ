import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Plan } from 'src/app/classes/plan';
import { FirestoreService } from 'src/app/services/firestore.service';
import { HelperService } from 'src/app/services/helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  constructor(
    private store: StoreService,
    private fs: FirestoreService,
    private route: ActivatedRoute,
    public helper: HelperService
  ) {}

  plan: Plan = new Plan();
  activeActivity: number = 0;
  moment = moment;
  
  ngOnInit() {}

  async ionViewWillEnter() {
    var id = this.route.snapshot.paramMap.get('id');
    if (id) {
      var plan = (await this.fs.getDoc('/plans/' + id)) as Plan;
      if (plan && plan.id) {
        this.plan = plan;
        this.activeActivity = this.getActiveActivity();
      }
    }
  }

  getActiveActivity() {
    let now = new Date().getTime();
    for (let i = 0; i < this.plan.activities.length; i++) {
      if (
        now >= this.plan.activities[i].startTime &&
        now < this.plan.activities[i].endTime
      ) {
        return i;
      }
    }
    return -1;
  }
}
