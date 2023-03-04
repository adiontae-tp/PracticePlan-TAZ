import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: `tp-delete-header-btn`,
  template: ` <ion-button (click)="deleteItem()">Delete</ion-button> `,
})
export class DeleteHeaderBtnComponent {
  constructor(
    private helper: HelperService,
    private fs: FirestoreService,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) {}

  @Input() item: any = {};
  @Input() name = 'Item';

  deleteItem() {
    this.helper
      .showAlertConfirmation(
        'Delete ' + this.name,
        'Are you sure you want to delete this ' + this.name + '?',
        'Delete'
      )
      .then(async (result) => {
        if (result) {
          await this.fs.deleteDoc(this.item);
          if (await this.modalCtrl.getTop()) {
            this.helper.closeModal();
          } else {
            this.navCtrl.back();
          }
        }
      });
  }
}
