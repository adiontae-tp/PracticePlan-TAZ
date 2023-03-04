import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Activity } from 'src/app/classes/activity';
import { Period } from 'src/app/classes/period';
import { Plan } from 'src/app/classes/plan';
import { ActivityModal } from 'src/app/modals/activity.modal';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'tp-activity-timer',
  template: `
    <ion-card style="position: relative">
      <ion-card-header>
        <ion-text color="primary">
          <ion-card-subtitle style="font-size: 18px; text-align: center">
            {{ activePeriod ? activePeriod?.name : 'Practice Timer' }}
          </ion-card-subtitle>
        </ion-text>
        <ion-card-title style="text-align: center; font-size: 40px">
          {{ timer }}</ion-card-title
        >
      </ion-card-header>
      <!-- <span *ngIf="activePeriod" style="padding: 8px">
        {{ moment(activePeriod?.startTime, 'x').format('h:mm A') }} -
        {{ moment(activePeriod?.endTime, 'x').format('h:mm A') }}</span
      > -->
    </ion-card>
  `,
})
export class ActivityTimerComponent implements OnInit {
  @Input() plan = new Plan();
  currentActivity: Activity = new Activity();
  currentEndTime: number = 0;
  planEnded: boolean = false;
  timeLeft: number = 0;
  interval: any;
  activePeriod: Activity = new Activity();
  lastPeriod: Activity = new Activity();
  editMode = true;
  periodDuration = 0;
  now = new Date().getTime();
  moment = moment;
  time = 0;
  timer = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.init();
  }

  async init() {
    this.getActivePeriod();
    this.interval = setInterval(() => {
      this.getActivePeriod();
    }, 1000);
  }

  getTimeRemaining() {
    let now = new Date().getTime();
    let remaining = this.currentEndTime - now;
    var time = new Date(remaining);
    console.log(time);
    return new Date();
  }

  getActivePeriod() {
    let planStart = parseInt(
      moment(this.plan.startTime, 'x').subtract(30, 'minute').format('x')
    );

    this.now = new Date().getTime();
    if (this.now > planStart) {
      let index = this.plan?.activities.findIndex((a) => a.endTime > this.now);
      this.activePeriod = this.plan.activities[index];
      // if (this.user?.alarmsOn) {
      //   this.checkPeriodEnd()
      // }
      this.periodDuration =
        this.plan.activities.length > index + 1
          ? this.plan.activities[index + 1].startTime
          : this.plan.endTime;
      if (!this.activePeriod) {
        this.timer = 'Practice Ended';
      } else {
        this.runTimer();
      }
    } else {
      this.timer = moment(this.plan.startTime, 'x').fromNow();
    }
  }

  runTimer() {
    var countDownDate = new Date(this.periodDuration).getTime();
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    this.time = distance;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    this.timer = hours
      ? hours + 'h ' + minutes + 'm ' + seconds + 's '
      : minutes
      ? minutes + 'm ' + seconds + 's '
      : seconds + 's ';

    // If the count down is over, write some text
    if (distance < 0) {
      // this.getActivePeriod()
      this.timer = 'Practice Ended';
    }
  }

  getDuration(value: any) {
    // return this.helper.getDuration(value);
  }

  viewActivity(activity: Activity) {
    // this.helper.showModal(ActivityModal, { activity: { ...activity }, readonly: true });
  }
}
