import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                this.navigated = true;
                let id = +params['id'];
                this.heroSvc.getHero(id).then(data => this.hero = data);
            }
            else{
                this.navigated = false;
                this.hero = new Hero();
            }
        });
     }

     save(): void {
         this.heroSvc.save(this.hero)
                .then(data => {
                    this.hero = data; // saved hero, w/ id if new
                    this.goBack(data);
                })
                .catch(data => this.error = data); // TODO: Display error message
      }


      goBack(savedHero: Hero = null): void {
          this.close.emit(savedHero);
          if (this.navigated) { window.history.back(); }
      }

}
