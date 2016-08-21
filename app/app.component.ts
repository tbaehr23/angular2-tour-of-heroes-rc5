import { Component, OnInit } from '@angular/core';

import { Hero } from './heroes/hero'; //relative to app.component
import { HeroService } from './heroes/hero.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html', //relative to index.html
    styleUrls: [ './app/app.component.css' ]
})
export class AppComponent implements OnInit {
    
    constructor(private heroSvc: HeroService){}

    title = 'Tour of Heroes';
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
