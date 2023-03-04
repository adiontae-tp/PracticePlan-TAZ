import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Coach } from '../classes/coach';
import { ComponentsModule } from '../components/components/components.module';

@Component({
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ComponentsModule],
  template: `
    <tp-modal-header title="Add Coach"></tp-modal-header>
    <div style="padding: 16px; text-align: center">
        Enter the email of the New Coach
    </div>
    <ion-content class="ion-padding">
      <tp-input type="email" label="Email" [(value)]="coach.email"></tp-input>
    </ion-content>
    <tp-modal-footer [readonly]="readonly" [item]="coach" ></tp-modal-footer>
  `,
})
export class NewCoachModal {
  coach = new Coach();
  readonly = false;

}
