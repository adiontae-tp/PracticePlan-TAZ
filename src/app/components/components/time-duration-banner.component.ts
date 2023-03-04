import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: `tp-time-duration-banner`,
  template: `

    <div class="banner">
      <div
        style="display:  flex; align-items: center; flex-direction: row; justify-content: center; margin-left: -30px;"
      >
        <tp-ripple [id]="!readonly ? 'change-time' : '' " [readonly]="readonly">
          <span *ngIf="!readonly">
            <ion-icon
              style="font-size: 25px; margin-right:  5px;"
              name="create-outline"
            ></ion-icon>
          </span>
          <span> {{ helper.startEndDuration(item) }} </span>
        </tp-ripple>
      </div>
    </div>
    <ion-modal
      trigger="change-time"
      [keepContentsMounted]="true"
      class="time-modal"
    >
      <ng-template>
        <ion-datetime
          [value]="time"
          [showDefaultButtons]="true"
          (ionChange)="updateTime($event)"
          presentation="time"
        ></ion-datetime>
      </ng-template>
    </ion-modal>
    <style>
      .banner {
        text-align: center;
        background: #f0f0f0;
        color: #333;
        padding: 10px;
      }
      .time-modal {
        --width: fit-content;
        --min-width: 250px;
        --height: fit-content;
        --border-radius: 6px;
        --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
      }
    </style>
  `,
})
export class TimeDurationBannerComponent {
  constructor(public helper: HelperService) {
    setTimeout(() => {
  this.time = moment(this.item.startTime, 'x').format()
      
    }, 1000);
  }

  @Input() readonly = false;
  @Input() item = { startTime: 0, endTime: 0, duration: 0 };
  // time = moment(this.item.startTime, 'x').format('yyy-MM-DD[T]hh:mm');
  time = moment().format()
  moment = moment;
  updateTime(event: any) {
    var time = event.target.value;
    this.item.startTime = parseInt(moment(time).format('x'));
    this.helper.updateDurationTimes(this.item)
  }
}
