import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: `tp-item-divider`,
  template: `
    <ion-item-divider lines="none" style="border: none;">
      <ng-content></ng-content>
    </ion-item-divider>
  `,
})
export class ItemDividerComponent {
  constructor() {}
}
