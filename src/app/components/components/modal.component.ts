import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: `tp-modal`,
  template: `
    <!-- <ion-button id="open-modal" expand="block">Open</ion-button> -->
    <ng-content select="[trigger]"> </ng-content>
    <ion-modal [keepContentsMounted]="true" [isOpen]="true">
      <ng-template>
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button>
                <ion-icon name="close"></ion-icon>
              </ion-button>
            </ion-buttons>
            <ion-title>
              {{ title }}
            </ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ng-content></ng-content>
        </ion-content>
        <tp-modal-footer [item]="item"></tp-modal-footer>
      </ng-template>
    </ion-modal>
  `,
})
export class ModalComponent {
  constructor() {}
  @Input() title = 'Modal';
  @Input() item = {};
 

}
