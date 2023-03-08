import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QuillModule } from 'ngx-quill';
import { Period } from '../classes/period';
import { Tag } from '../classes/tag';
import { ComponentsModule } from '../components/components/components.module';
import { StoreService } from '../services/store.service';

@Component({
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    ComponentsModule,
    QuillModule,
  ],
  template: `
    <tp-modal-header title="New Period"></tp-modal-header>
    <ion-content class="ion-padding">
      <ion-list>
        <tp-input label="Name" [(value)]="period.name"></tp-input>
        <tp-input
          label="Duration"
          type="number"
          [(value)]="period.duration"
        ></tp-input>
        <tp-select
          label="Tags"
          [options]="tags"
          [(value)]="period.tags"
        ></tp-select>
        <ion-item fill="outline">
          <ion-label position="floating">Notes</ion-label>
          <quill-editor
            [(ngModel)]="period.notes"
            placeholder="Enter notes here"
            style="width: 100%;"
          >
          </quill-editor>
        </ion-item>
      </ion-list>
    </ion-content>
    <tp-modal-footer [item]="period"></tp-modal-footer>
  `,
})
export class NewPeriodModal {
  constructor(private store: StoreService) {
    this.store.initTags().then(() => {
      this.store.tags.subscribe((val) => (this.tags = val));
    });
  }
  period = new Period();
  tags: Tag[] = [];
}
