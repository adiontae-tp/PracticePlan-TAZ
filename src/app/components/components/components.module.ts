import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button.component';
import { ModalFooterCommponent } from './modal-footer.component';
import { CardComponent } from './card.component';
import { ModalComponent } from './modal.component';
import { PlanListComponent } from './plan-list.component';
import { SelectComponent } from './select.component';
import { TimeDurationBannerComponent } from './time-duration-banner.component';
import { ActivityListComponent } from './activity-list.component';

import { PeriodListComponent } from './period-list.component';
import { ModalHeaderComponent } from './modal-header.component';
import { ActivityModalFooterCommponent } from './activity-modal-footer.component';
import { RippleComponent } from './ripple.component';
import { DeleteHeaderBtnComponent } from './delete-header-btn.component';
import { TemplateListComponent } from './template-list.component';
import { DurationBannerComponent } from './duration-banner.component';
import { CoachListComponent } from './coach-list.component';
import { ItemDividerComponent } from './item-divider.component';
import { ActivityTimerComponent } from './activity-timer.component';


@NgModule({
  declarations: [
    InputComponent,
    ActivityListComponent,
    ActivityModalFooterCommponent,
    CardComponent,
    PlanListComponent,
    CoachListComponent,
    ModalHeaderComponent,

    ItemDividerComponent,
    SelectComponent,
    ModalComponent,
    ActivityTimerComponent,
    RippleComponent,
    ModalFooterCommponent,
    TemplateListComponent,
    DurationBannerComponent,
    TimeDurationBannerComponent,
    ButtonComponent,
    DeleteHeaderBtnComponent,
    PeriodListComponent,
  ],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [
    InputComponent,
    CardComponent,
    ActivityModalFooterCommponent,
    ModalComponent,
    CoachListComponent,
    ItemDividerComponent,
    ActivityTimerComponent,


    SelectComponent,
    ModalFooterCommponent,
    ActivityListComponent,
    RippleComponent,
    DurationBannerComponent,

    PeriodListComponent,
    ModalHeaderComponent,
    DeleteHeaderBtnComponent,
    TemplateListComponent,

    TimeDurationBannerComponent,
    PlanListComponent,
    ButtonComponent,
  ],
})
export class ComponentsModule {}
