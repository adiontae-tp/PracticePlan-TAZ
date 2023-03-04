import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: `tp-modal-footer`,
  template: `
    <ion-footer>
      <ion-toolbar style="text-align: center;">
        <ion-button (click)="close()" fill="outline">{{
          readonly || !item.id ? 'Close' : 'Cancel'
        }}</ion-button>
        <ion-button *ngIf="!new" (click)="save()">
          {{ readonly ? 'Edit' : 'Save' }}
        </ion-button>
        <ion-button (click)="newItem()" *ngIf="new">New</ion-button>
      </ion-toolbar>
    </ion-footer>
  `,
  styles: ['ion-button { width: 45%}'],
})
export class ModalFooterCommponent {
  constructor(
    private helper: HelperService,
    private fs: FirestoreService,
    private m: ModalController,
    private navCtrl: NavController
  ) {}

  @Input() readonly = false;
  @Output() readonlyChange = new EventEmitter();
  @Input() item: any = {};
  @Input() new: any = null;
  action = this.readonly ? 'edit' : 'save';

  async save() {
    if (this.readonly) {
      this.readonly = false;
      this.readonlyChange.emit(this.readonly);
    } else {
      if (this.item.id) {
        console.log(this.item);
        await this.fs.setDoc(this.item);
      } else {
        await this.fs.addDocTeam(this.item);
      }
      this.close();
    }
  }

  async newItem() {
    this.helper.showModal(this.new);
  }
  async close() {
    if (this.readonly || !this.item.id) {
      var isModal = await this.m.getTop();
      if (isModal) {
        this.helper.closeModal();
      } else {
        this.navCtrl.back();
      }
    } else {
      this.readonlyChange.emit(true);
      this.readonly = true;
    }
  }
}
