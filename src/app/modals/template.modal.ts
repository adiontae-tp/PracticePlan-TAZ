import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components/components.module';

@Component({
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ComponentsModule],
  template: `
    <tp-modal-header></tp-modal-header>
     <ion-content class="ion-padding">
        
     </ion-content>
    <tp-modal-footer></tp-modal-footer>
  `,
})
export class xxxxxxModal {}
