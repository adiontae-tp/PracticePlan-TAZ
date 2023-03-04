import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: `tp-modal-header`,
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-button (click)="close()">
            <ion-icon name="close"></ion-icon>
          </ion-button>
          <ng-content select="[start]"></ng-content>
        </ion-buttons>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons slot="end">
          <ng-content select="[end]"></ng-content>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  `,
})
export class ModalHeaderComponent {
  constructor(private helper: HelperService) {}

  @Input() title = 'Modal';

  close() {
    this.helper.closeModal(); 
  }
}
