import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'plans',
        pathMatch: 'full'
      },
      {
        path: 'plans',
        loadChildren: () =>
          import('../plans/plans.module').then((m) => m.PlansPageModule),
      },
      {
        path: 'periods',
        loadChildren: () =>
          import('../periods/periods.module').then(
            (m) => m.PeriodsPageModule
          ),
      },
      {
        path: 'templates',
        loadChildren: () =>
          import('../templates/templates.module').then(
            (m) => m.TemplatesPageModule
          ),
      },
      {
        path: 'tags',
        loadChildren: () =>
          import('../tags/tags.module').then((m) => m.TagsPageModule),
      },
      {
        path: 'coaches',
        loadChildren: () =>
          import('../coaches/coaches.module').then(
            (m) => m.CoachesPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
