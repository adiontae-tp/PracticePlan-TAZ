import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachPageRoutingModule } from './coach-routing.module';

import { CoachPage } from './coach.page';
import { ComponentsModule } from 'src/app/components/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    CoachPageRoutingModule
  ],
  declarations: [CoachPage]
})
export class CoachPageModule {}
