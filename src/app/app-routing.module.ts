import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InitGuard } from './guards/init.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
    canActivate: [InitGuard],
  },
  {
    path: 'plan',
    loadChildren: () =>
      import('./pages/plan/plan.module').then((m) => m.PlanPageModule),
    canActivate: [InitGuard],
  },
  {
    path: 'period',
    loadChildren: () =>
      import('./pages/period/period.module').then((m) => m.PeriodPageModule),
    canActivate: [InitGuard],
  },
  {
    path: 'template',
    loadChildren: () =>
      import('./pages/template/template.module').then(
        (m) => m.TemplatePageModule
      ),
    canActivate: [InitGuard],
  },
  {
    path: 'coach',
    loadChildren: () =>
      import('./pages/coach/coach.module').then((m) => m.CoachPageModule),
    canActivate: [InitGuard],
  },
  {
    path: 'tag',
    loadChildren: () =>
      import('./pages/tag/tag.module').then((m) => m.TagPageModule),
    canActivate: [InitGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
    canActivate: [InitGuard],
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/team/team.module').then( m => m.TeamPageModule),
    canActivate: [InitGuard],

  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/teams/teams.module').then( m => m.TeamsPageModule),
    canActivate: [InitGuard],
    
  },
  {
    path: 'team-info',
    loadChildren: () => import('./pages/team-info/team-info.module').then( m => m.TeamInfoPageModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./pages/timer/timer.module').then( m => m.TimerPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./pages/subscription/subscription.module').then( m => m.SubscriptionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
