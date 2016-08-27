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
    
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroSvc.getHero(id).then(data => this.hero = data);
            });
     }


     save(): void {
         this.heroSvc.save(this.hero)
                .then(data => {
                    this.goBack(data);
                })
                .catch(data => this.error = data);
      }


      goBack(savedHero: Hero): void {
          this.close.emit(savedHero);
          window.history.back();
      }

}
