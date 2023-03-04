import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Template } from 'src/app/classes/template';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: `tp-template-list`,
  template: `
    <div
      *ngIf="templates.length == 0"
      style="padding: 16px; text-align: center"
    >
      No Templates have been added to the Team
    </div>
    <ion-list lines="none">
      <ion-item
        class="card-item"
        (click)="selectTemplate(template)"
        *ngFor="let template of templates"
      >
        <ion-label>
          <h2>{{ template.name }}</h2>
          <p>{{ helper.getDuration(template.duration) }}</p>
        </ion-label>
      </ion-item>
    </ion-list>
  `,
})
export class TemplateListComponent {
  constructor(public helper: HelperService, private navCtrl: NavController) {}

  @Input() templates: Template[] = [];
  selectTemplate(template: Template) {
    this.navCtrl.navigateForward('/template/' + template.id);
  }
}
