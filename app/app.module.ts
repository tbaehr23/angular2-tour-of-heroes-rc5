import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }     from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';


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
  providers: [ 
    HeroService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
