import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent }      from './heroes/hero-list.component'; //relative to app.routing.ts

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroListComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
