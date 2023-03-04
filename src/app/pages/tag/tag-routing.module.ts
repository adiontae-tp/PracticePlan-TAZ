import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagPage } from './tag.page';

const routes: Routes = [
  {
    path: ':id',
    component: TagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagPageRoutingModule {}
