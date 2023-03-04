import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tp-select',
  template: `
    <ion-item [fill]="readonly ? 'solid' : 'outline' " style="margin-bottom: 10px">
      <ion-label position="floating"> {{ label }}</ion-label>
      <ion-select (ionInput)="update()" fill="outline" [(ngModel)]="value">
        <ion-select-option *ngFor="let option of options" [value]="option">
          {{ option }}</ion-select-option
        >
      </ion-select>
    </ion-item>
  `,
})
export class SelectComponent {
  @Input() value: any = '';
  @Input() type = 'text';
  @Input() readonly  = false;
  @Input() label = '';
  @Output() valueChange = new EventEmitter();
  @Input() options: any[] = [];

  update() {
    this.valueChange.emit(this.value);
  }
}
