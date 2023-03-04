import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Activity } from 'src/app/classes/activity';
import { Plan } from 'src/app/classes/plan';
import { Template } from 'src/app/classes/template';
import { ActivityModal } from 'src/app/modals/activity.modal';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: `tp-activity-list`,
  template: `
    <div
      style="text-align: center; padding: 16px"
      *ngIf="plan.activities.length == 0"
    >
      No Activities have been added to this Plan
    </div>
    <ion-list lines="none">
      <ion-reorder-group
        [disabled]="readonly"
        (ionItemReorder)="reorder($event)"
      >
        <ion-item class="card-item"
          (click)="selectItem(activity)"
          *ngFor="let activity of plan.activities"
        >
          <ion-reorder slot="start"></ion-reorder>
          <ion-label>
            <h2>{{ activity.name }}</h2>
            <p *ngIf="plan?.startTime && plan?.endTime">
              {{ helper.startEndDuration(activity) }}
            </p>
            <p *ngIf="!plan?.startTime || !plan?.endTime">
              {{ helper.getDuration(activity.duration) }}
            </p>
          </ion-label>

          <div *ngIf="readonly">
            <span *ngFor="let tag of activity.tags" class="tag">
              {{ tag }}</span
            >
          </div>
          <ion-button
            (click)="remove(activity, $event)"
            *ngIf="!readonly"
            fill="clear"
          >
            <ion-icon name="close"></ion-icon>
          </ion-button>
        </ion-item>
      </ion-reorder-group>
    </ion-list>
  `,
})
export class ActivityListComponent {
  constructor(public helper: HelperService) {}

  @Input() plan: any = new Plan();
  @Input() readonly = false;
  @Output() select = new EventEmitter();

  reorder(event: any) {
    this.plan.activities = event.detail.complete(this.plan.activities);
    if (this.plan?.startTime && this.plan?.endTime) {
      this.helper.updateDurationTimes(this.plan);
    } else {
      this.helper.updateDuration(this.plan);
    }
  }
  selectItem(activity: any) {
    this.select.emit(activity);
    // this.helper.showModal(ActivityModal, { activity: activity });
  }

  remove(activity: Activity, event: Event) {
    event.stopPropagation();
    var index = this.plan.activities.findIndex(
      (a: Activity) => a.id == activity.id
    );
    this.plan.activities.splice(index, 1);
    if (this.plan?.startTime && this.plan?.endTime) {
      this.helper.updateDurationTimes(this.plan);
    } else {
      this.helper.updateDuration(this.plan);
    }
  }
}
