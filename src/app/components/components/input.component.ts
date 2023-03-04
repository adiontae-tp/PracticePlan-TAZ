import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tp-input',
  template: `
    <ion-item lines="none"
      [fill]="readonly ? 'solid' : 'outline'"
      style="margin-bottom: 10px"
    >
      <ion-label position="floating"> {{ label }}</ion-label>
      <ion-input
        [type]="type"
        (ionChange)="update()"
        fill="outline"
        [(ngModel)]="value"
      ></ion-input>
    </ion-item>
  `,
})
export class InputComponent {
  @Input() value: any = '';
  @Input() type = 'text';
  @Input() label = '';
  @Input() readonly = false;
  @Output() valueChange = new EventEmitter();

  update() {
    this.valueChange.emit(this.value);
  }
}
