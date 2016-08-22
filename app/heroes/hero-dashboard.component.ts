import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero'; //relative to hero-dashboard.component
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-dashboard',
    templateUrl: './app/heroes/hero-dashboard.component.html', //relative to index.html
    styleUrls: ['./app/heroes/hero-dashboard.component.css']
})
export class HeroDashboardComponent implements OnInit {
    
    constructor(
        private heroSvc: HeroService,
        private router: Router
    ) { }

    heroes: Hero[] = [];

    ngOnInit() {
        this.heroSvc.getHeroes().then(data => this.heroes = data.slice(1, 5))
     }

     gotoDetail(hero: Hero): void {
         let link = ['/detail', hero.id];
         this.router.navigate(link);
     }

}
