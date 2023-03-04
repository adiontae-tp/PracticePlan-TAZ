import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Template } from '../classes/template';
import { ComponentsModule } from '../components/components/components.module';

@Component({
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ComponentsModule],
  template: `
    <tp-modal-header title="New Template"></tp-modal-header>
    <ion-content class="ion-padding">
      <tp-input label="Name" [(value)]="template.name"></tp-input>
    </ion-content>
    <tp-modal-footer [item]="template" [readonly]="readonly"></tp-modal-footer>
  `,
})
export class NewTemplateModal {
  template = new Template();
  readonly = false;
}
