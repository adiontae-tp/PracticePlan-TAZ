import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'tp-button',
    template: `
    <ion-button  [fill]="fill" [expand]="expand" [color]="color">
    <ion-spinner *ngIf="isLoading"></ion-spinner>    
    <ng-content *ngIf="!isLoading"> </ng-content>    
    </ion-button>
    `
})
export class ButtonComponent {
    @Input() fill = 'solid'
    @Input() isLoading = false;
    @Input() expand = 'block'
    @Input() color = 'primary'
    @Output() click = new EventEmitter();


}