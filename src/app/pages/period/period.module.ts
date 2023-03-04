import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodPageRoutingModule } from './period-routing.module';

import { PeriodPage } from './period.page';
import { ComponentsModule } from 'src/app/components/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PeriodPageRoutingModule
  ],
  declarations: [PeriodPage]
})
export class PeriodPageModule {}
