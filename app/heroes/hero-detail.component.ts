import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero'; //relative to hero-detail.component
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: './app/heroes/hero-detail.component.html', //relative to index.html
    styleUrls: ['./app/heroes/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    
    constructor(
        private heroSvc: HeroService,
        private route: ActivatedRoute
    ) { }

    hero: Hero; 

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroSvc.getHero(id).then(data => this.hero = data);
            });
     }

     goBack(): void {
         window.history.back();
    }

}
