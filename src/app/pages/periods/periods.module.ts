import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodsPageRoutingModule } from './periods-routing.module';

import { PeriodsPage } from './periods.page';
import { ComponentsModule } from 'src/app/components/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    PeriodsPageRoutingModule
  ],
  declarations: [PeriodsPage]
})
export class PeriodsPageModule {}
