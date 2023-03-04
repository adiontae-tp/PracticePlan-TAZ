import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: `tp-ripple`,
  template: `
    <div class="ion-activatable ripple-parent" style="display: inline-block;">
      <span>
        <ng-content></ng-content>
        <ion-ripple-effect *ngIf="!readonly"></ion-ripple-effect>
      </span>
    </div>
  `,
})
export class RippleComponent {
  constructor() {}
  @Input() readonly = false
}
