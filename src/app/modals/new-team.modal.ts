import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Team } from '../classes/team';
import { ComponentsModule } from '../components/components/components.module';

@Component({
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ComponentsModule],
  template: `
    <tp-modal-header label="New Team"></tp-modal-header>
    <ion-content class="ion-padding">
      <ion-list>
        <tp-input [(value)]="team.name" label="Name"></tp-input>
        <ion-item>
          <ion-label>Sport</ion-label>
          <ion-select [(ngModel)]="team.sport">
            <ion-select-option *ngFor="let sport of sports"> {{ sport }}</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
    </ion-content>
    <tp-modal-footer [item]="team"></tp-modal-footer>
  `,
})
export class NewTeamModal {
  team = new Team();
  sports = ['Basketball', 'Football', 'Baseball', 'Softball'];
}
