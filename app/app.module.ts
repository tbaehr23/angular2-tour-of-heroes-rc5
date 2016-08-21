import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';// relative to app.module
import {HeroDetailComponent} from './heroes/hero-detail.component';
import { HeroService } from './heroes/hero.service';
import { HeroListComponent } from './heroes/hero-list.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule 
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroListComponent 
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
