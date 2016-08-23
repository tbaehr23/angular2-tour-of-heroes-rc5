import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';// relative to app.module
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroService } from './heroes/hero.service';
import { HeroListComponent } from './heroes/hero-list.component';
import { routing } from './app.routing';
import { HeroDashboardComponent } from './heroes/hero-dashboard.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    routing,
    HttpModule 
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    HeroDashboardComponent 
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
