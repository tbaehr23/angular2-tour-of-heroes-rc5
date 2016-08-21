import { Component, OnInit } from '@angular/core';

import { Hero } from './hero'; //relative to hero-list.component
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-list',
    templateUrl: './app/heroes/hero-list.component.html', //relative to index.html
    styleUrls: [ './app/heroes/hero-list.component.css' ]
})
export class HeroListComponent implements OnInit {
    
    constructor(private heroSvc: HeroService){}

    heroes: Hero[];
    selectedHero: Hero;
    
    onSelect(selection: Hero): void {
        this.selectedHero = selection;
    }

    ngOnInit(){
        this.getHeroes();
    }

    getHeroes(): void{
        this.heroSvc.getHeroes().then(data => this.heroes = data);
    }
}
