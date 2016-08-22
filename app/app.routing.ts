import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent }      from './heroes/hero-list.component'; //relative to app.routing.ts
import { HeroDashboardComponent } from './heroes/hero-dashboard.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroListComponent
  },
  {
  path: 'dashboard',
  component: HeroDashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
