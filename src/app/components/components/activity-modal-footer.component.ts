import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Activity } from 'src/app/classes/activity';
import { Plan } from 'src/app/classes/plan';
import { FirestoreService } from 'src/app/services/firestore.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: `tp-activity-modal-footer`,
  template: `
    <ion-footer>
      <ion-toolbar style="text-align: center;">
        <ion-button (click)="close()" fill="outline">{{
          readonly ? 'Close' : 'Cancel'
        }}</ion-button>
        <ion-button *ngIf="!new" (click)="save()">
          {{ readonly ? 'Edit' : 'Save' }}
        </ion-button>
      </ion-toolbar>
    </ion-footer>
  `,
  styles: ['ion-button { width: 45%}'],
})
export class ActivityModalFooterCommponent {
  constructor(private helper: HelperService, private fs: FirestoreService) {}

  @Input() readonly = false;
  @Output() readonlyChange = new EventEmitter();
  @Input() activity = new Activity();
  @Input() plan = new Plan();
  @Input() new: any = null;
  action = this.readonly ? 'edit' : 'save';

  async save() {
    if (this.readonly) {
      this.readonly = false;
      this.readonlyChange.emit(this.readonly);
    } else {
      var index = this.plan.activities.findIndex(
        (a) => a.id == this.activity.id
      );
      this.plan.activities.splice(index, 1, { ...this.activity });
      this.fs.setDoc(this.plan);
      this.close();
    }
  }

  async newItem() {
    this.helper.showModal(this.new);
  }
  async close() {
    if (this.readonly) {
      this.helper.closeModal();
    } else {
      this.readonlyChange.emit(true);
      this.readonly = true;
    }
  }
}
