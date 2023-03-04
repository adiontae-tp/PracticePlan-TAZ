import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanPage } from './plan.page';

const routes: Routes = [
  {
    path: '',
    component: PlanPage,
  },
  {
    path: ':id',
    component: PlanPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanPageRoutingModule {}
