import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Template } from '../classes/template';
import { ComponentsModule } from '../components/components/components.module';
import { HelperService } from '../services/helper.service';
import { StoreService } from '../services/store.service';

@Component({
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ComponentsModule],
  template: `
    <tp-modal-header title="Choose Template"></tp-modal-header>
    <ion-content class="ion-padding">
      <ion-list lines="none">
        <ion-item
          (click)="selectTemplate(template)"
          *ngFor="let template of templates"
        >
          <ion-label>
            <h2>{{ template.name }}</h2>
            <p>{{ helper.getDuration(template.duration) }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    <tp-modal-footer></tp-modal-footer>
  `,
})
export class SelectTemplateModal {
  constructor(private store: StoreService, public helper: HelperService) {}

  templates: Template[] = [];

  ionViewWillEnter() {
    this.store.templates.subscribe((val) => (this.templates = val));
  }

  selectTemplate(template: Template) {
    this.helper
      .showAlertConfirmation(
        'Select Template',
        'Are you sure you want to use this Template?',
        'Use'
      )
      .then((result) => {
        if (result) {
          this.helper.closeModal(template);
        }
      });
  }
}
