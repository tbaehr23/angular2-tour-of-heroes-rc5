import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'; //relative to hero-dashboard.component
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-dashboard',
    templateUrl: './app/heroes/hero-dashboard.component.html' //relative to index.html
})
export class HeroDashboardComponent implements OnInit {
    
    constructor(private heroSvc: HeroService) { }

    heroes: Hero[] = [];

    ngOnInit() {
        this.heroSvc.getHeroes().then(data => this.heroes = data.slice(1, 5))
     }
}
