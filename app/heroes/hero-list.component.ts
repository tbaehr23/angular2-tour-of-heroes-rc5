import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero'; //relative to hero-list.component
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-list',
    templateUrl: './app/heroes/hero-list.component.html', //relative to index.html
    styleUrls: [ './app/heroes/hero-list.component.css' ]
})
export class HeroListComponent implements OnInit {
    
    constructor(
        private heroSvc: HeroService,
        private router: Router
    ){}

    heroes: Hero[];
    selectedHero: Hero;
    addingHero: boolean = false;
    error: any;
    
    onSelect(selection: Hero): void {
        this.selectedHero = selection;
        this.addingHero = false;
    }

    ngOnInit(){
        this.getHeroes();
    }

    getHeroes(): void{
        this.heroSvc.getHeroes().then(data => this.heroes = data);
    }

    gotoDetail(): void {
        let link = ['/detail', this.selectedHero.id];
        this.router.navigate(link);
     }

     addHero() {
         this.addingHero = true;
         this.selectedHero = null;
    }

    close(savedHero: Hero): void{
        this.addingHero=false;
        if (savedHero) {
            this.getHeroes();
        }
    }

    deleteHero(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroSvc
            .delete(hero)          
            .then(response => {
                    this.heroes = this.heroes.filter(h => h !== hero);
                    if (this.selectedHero === hero) { this.selectedHero = null; 
                }
            })
            .catch(error => this.error = error);
    }

}
