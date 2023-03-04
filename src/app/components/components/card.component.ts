import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: `tp-card`,
  template: `
    <div
      style="border: 2px solid gray; border-radius: 5px; margin-bottom: 10px; display: flex; flex-direction: row;  padding: 5px 10px; align-items: center; justify-content: space-between"
      button
      lines="none"
    >
      <div style="flex-grow: 0; ">
        <ng-content select="[start]"></ng-content>
      </div>
      <ion-label style="flex-grow: 1; padding: 5px">
        <h2 style="font-size: 20px;">{{ title }}</h2>
        <p style="font-size: 16px: ;">{{ subtitle }}</p>
      </ion-label>
      <div style="text-align: right; flex-grow: 0; ">
        <ng-content select="[end]"></ng-content>
      </div>
    </div>
  `,
})
export class CardComponent {
  constructor() {}

  @Input() title = '';
  @Input() subtitle = '';
}
