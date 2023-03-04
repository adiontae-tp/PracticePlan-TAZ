import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplatesPageRoutingModule } from './templates-routing.module';

import { TemplatesPage } from './templates.page';
import { ComponentsModule } from 'src/app/components/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    TemplatesPageRoutingModule
  ],
  declarations: [TemplatesPage]
})
export class TemplatesPageModule {}
