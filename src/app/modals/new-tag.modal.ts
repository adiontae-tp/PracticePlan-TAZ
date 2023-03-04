import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tag } from '../classes/tag';
import { ComponentsModule } from '../components/components/components.module';

@Component({
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ComponentsModule],
  template: `
    <tp-modal-header label="New Tag"></tp-modal-header>
    <ion-content class="ion-padding">
      <tp-input label="Name" [(value)]="tag.name"></tp-input>
    </ion-content>
    <tp-modal-footer [item]="tag"></tp-modal-footer>
  `,
})
export class NewTagModal {
  tag = new Tag();
}
