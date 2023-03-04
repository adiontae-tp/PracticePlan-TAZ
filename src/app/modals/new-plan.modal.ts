import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import * as moment from 'moment';
import { Plan } from '../classes/plan';
import { Template } from '../classes/template';
import { ComponentsModule } from '../components/components/components.module';
import { StoreService } from '../services/store.service';

@Component({
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ComponentsModule],
  template: `
    <tp-modal-header title="New Plan"></tp-modal-header>
    <ion-content class="ion-padding">
      <!-- <tp-input type="datetime-local" label="Start Time" [(value)]="startTime"></tp-input> -->

      <ion-item fill="outline">
        <ion-label position="floating"> Start Time</ion-label>
        <ion-input type="datetime-local" [(ngModel)]="startTime" (ionChange)="updateTime($event)"></ion-input>
      </ion-item>
      <!-- <ion-item>
        <ion-label position="floating">Template (optional)</ion-label>
        <ion-select>
          <ion-select-option *ngFor="let template of getTemplates()">
            {{ template }}
          </ion-select-option>
        </ion-select>
      </ion-item> -->
    </ion-content>
    <tp-modal-footer [item]="plan"></tp-modal-footer>
  `,
})
export class NewPlanModal {
  constructor(private store: StoreService) {
    this.store.templates.subscribe((val) => (this.templates = val));
  }
  moment = moment
  plan = new Plan();
  startTime = moment().format('yyy-MM-DD[T]hh:mm')
  templates: Template[] = [];

  ionViewWillEnter(){
    console.log(this.startTime)
  }

  updateTime(event: any){
    var time = event.target.value;
    this.plan.startTime = parseInt(moment(time, 'yyy-MM-DD[T]hh:mm').format('x'))
    console.log(time)
  }
  getTemplates() {
    return this.templates.map((template) => template.name);
  }
}
