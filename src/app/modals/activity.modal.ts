import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Activity } from '../classes/activity';
import { Plan } from '../classes/plan';
import { ComponentsModule } from '../components/components/components.module';
import { FirestoreService } from '../services/firestore.service';
import { HelperService } from '../services/helper.service';
import { StoreService } from '../services/store.service';

@Component({
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ComponentsModule],
  template: `
    <tp-modal-header title="Activity"></tp-modal-header>
    <ion-content class="ion-padding">
      <ion-list>
        <tp-input
          [readonly]="readonly"
          label="Name"
          [(value)]="activity.name"
        ></tp-input>
        <ion-item
          style="margin-bottom: 10px;"
          [fill]="readonly ? 'solid' : 'outline'"
        >
          <ion-label position="floating">Tags</ion-label>
          <ion-select multiple [(ngModel)]="activity.tags">
            <ion-select-option *ngFor="let tag of tags" [value]="tag">
              {{ tag }}
            </ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item fill="outline">
          <ion-textarea
            [(ngModel)]="activity.notes"
            autoGrow="true"
            rows="6"
            placeholder="Notes"
            fill="outline"
            label="Notes"
            labelPlacement="floating"
          ></ion-textarea>
        </ion-item>
      </ion-list>
    </ion-content>
    <tp-activity-modal-footer
      [plan]="plan"
      [(readonly)]="readonly"
      [activity]="activity"
    ></tp-activity-modal-footer>
  `,
})
export class ActivityModal {
  constructor(
    private fs: FirestoreService,
    public helper: HelperService,
    private store: StoreService
  ) {}

  tags = [];
  readonly = false;
  plan = new Plan();
  activity = new Activity();
}
